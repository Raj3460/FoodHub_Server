import { OrderStatus } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// Order number generate করা
const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `FH-${timestamp}-${random}`;
};

// Order create করার সময় cart থেকে data নিয়ে order তৈরি করব, subtotal, delivery fee, total amount calculate করব, minimum order check করব, এবং transaction এর মাধ্যমে order এবং order items একসাথে তৈরি করব। Order create হওয়ার পরে cart clear করে দেবো।
const createOrder = async (
  customerId: string,
  data: {
    deliveryAddress: string;
    deliveryArea: string;
    deliveryInstructions?: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
  }
) => {
  // Cart check 
  const cart = await prisma.cart.findUnique({
    where: { customerId },
    include: {
      items: {
        include: {
          meal: {
            select: {
              id: true,
              name: true,
              price: true,
              discountPrice: true,
              isAvailable: true,
              providerId: true,
            },
          },
        },
      },
      provider: {
        select: {
          id: true,
          deliveryFee: true,
          minOrderAmount: true,
          isOpen: true,
          isApproved: true,
        },
      },
    },
  });

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  if (!cart.provider) {
    throw new Error("Provider not found");
  }

  if (!cart.provider.isApproved || !cart.provider.isOpen) {
    throw new Error("Provider is not available right now");
  }

  // subtotal calculate 
  const subtotal = cart.items.reduce((sum, item) => {
    const price = item.meal.discountPrice ?? item.meal.price;
    return sum + price * item.quantity;
  }, 0);

  const deliveryFee = cart.provider.deliveryFee;
  const minOrderAmount = cart.provider.minOrderAmount;

  // minimum order check 
  if (subtotal < minOrderAmount) {
    throw new Error(
      `Minimum order amount is ${minOrderAmount}. Current subtotal is ${subtotal}`
    );
  }

  const totalAmount = subtotal + deliveryFee;

  // Order এবং OrderItems একসাথে তৈরি করব (transaction)
  const order = await prisma.$transaction(async (tx) => {
    // Order model এ create করব, এবং সাথে সাথে OrderItem গুলোও create করব
    const newOrder = await tx.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        customerId,
        providerId: cart.provider!.id,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail ?? null,
        deliveryAddress: data.deliveryAddress,
        deliveryArea: data.deliveryArea,
        deliveryInstructions: data.deliveryInstructions ?? null,
        subtotal,
        deliveryFee,
        totalAmount,
        status: "placed",
        items: {
          create: cart.items.map((item) => ({
            mealId: item.meal.id,
            mealName: item.meal.name,
            mealPrice: item.meal.discountPrice ?? item.meal.price,
            quantity: item.quantity,
            subtotal: (item.meal.discountPrice ?? item.meal.price) * item.quantity,
            specialInstructions: item.specialInstructions,
          })),
        },
      },
      include: {
        items: true,
        provider: {
          select: { restaurantName: true, logo: true },
        },
      },
    });

    // প্রতিটি মিলের totalOrders আপডেট করব
    for (const item of cart.items) {
      await tx.meal.update({
        where: { id: item.meal.id },
        data: { totalOrders: { increment: item.quantity } },
      });
    }

    // Cart clear করব order এর পরে
    await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
    await tx.cart.update({
      where: { id: cart.id },
      data: { providerId: null },
    });

    return newOrder;
  });

  return order;
};

// Customer can see all their orders
const getMyOrders = async (customerId: string) => {
  return await prisma.order.findMany({
    where: { customerId },
    include: {
      items: {
        include: {
          meal: {
            select: { thumbnail: true },
          },
        },
      },
      provider: {
        select: { restaurantName: true, logo: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Customer can see specific order details
const getMyOrderById = async (orderId: string, customerId: string) => {
  return await prisma.order.findFirst({
    where: { id: orderId, customerId },
    include: {
      items: {
        include: {
          meal: {
            select: { thumbnail: true, name: true },
          },
        },
      },
      provider: {
        select: {
          restaurantName: true,
          logo: true,
          contactPhone: true,
          address: true,
        },
      },
      review: true,
    },
  });
};

// Customer order cancel করবে, কিন্তু শুধু placed status এ cancel করা যাবে। Cancel করার সময় optional cancellation reason দিতে পারবে, এবং cancelledAt timestamp set হবে।
const cancelOrder = async (orderId: string, customerId: string, reason?: string) => {
  const order = await prisma.order.findFirst({
    where: { id: orderId, customerId },
  });

  if (!order) throw new Error("Order not found");

  // শুধু placed status এ cancel করা যাবে
  if (order.status !== "placed") {
    throw new Error(
      "Order can only be cancelled when it is in placed status"
    );
  }

  return await prisma.order.update({
    where: { id: orderId },
    data: {
      status: "cancelled",
      cancelledAt: new Date(),
      ...(reason !== undefined && { cancellationReason: reason }),
    },
  });
};

// Provider তার সব orders দেখবে, order items এর সাথে meal এর thumbnail এবং provider এর restaurant name ও logo দেখাবো। Orders createdAt এর descending order এ দেখাবো।
const getProviderOrders = async (userId: string) => {
  const provider = await prisma.provider.findUnique({
    where: { userId },
  });

  if (!provider) throw new Error("Provider profile not found");

  return await prisma.order.findMany({
    where: { providerId: provider.id },
    include: {
      items: {
        include: {
          meal: { select: { thumbnail: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Provider order status update 
const updateOrderStatus = async (
  orderId: string,
  userId: string,
  status: OrderStatus
) => {
  const provider = await prisma.provider.findUnique({ where: { userId } });
  if (!provider) throw new Error("Provider profile not found");

  const order = await prisma.order.findFirst({
    where: { id: orderId, providerId: provider.id },
  });

  if (!order) throw new Error("Order not found");

  // Status flow validate 
  const allowedTransitions: Record<string, OrderStatus[]> = {
    placed: ["preparing", "cancelled"],
    preparing: ["ready"],
    ready: ["delivered"],
    delivered: [],
    cancelled: [],
  };

  if (!allowedTransitions[order.status]?.includes(status)) {
    throw new Error(
      `Cannot change status from ${order.status} to ${status}`
    );
  }

  // Status অনুযায়ী timestamp set করব
  const timestampField: Partial<Record<OrderStatus, object>> = {
    preparing: { preparingAt: new Date() },
    ready: { readyAt: new Date() },
    delivered: { deliveredAt: new Date() },
    cancelled: { cancelledAt: new Date() },
  };

  return await prisma.order.update({
    where: { id: orderId },
    data: {
      status,
      ...timestampField[status],
    },
  });
};

// Admin can see all orders
const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      items: true,
      provider: {
        select: { restaurantName: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const orderService = {
  createOrder,
  getMyOrders,
  getMyOrderById,
  cancelOrder,
  getProviderOrders,
  updateOrderStatus,
  getAllOrders,
};
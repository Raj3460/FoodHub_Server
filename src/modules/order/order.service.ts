import { OrderStatus } from "@prisma/client";
import { prisma } from "../../lib/prisma";

// Order number generate করা
const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `FH-${timestamp}-${random}`;
};

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

  if (!cart || cart.items.length === 0) throw new Error("Cart is empty");
  if (!cart.provider) throw new Error("Provider not found");
  if (!cart.provider.isApproved || !cart.provider.isOpen) {
    throw new Error("Provider is not available right now");
  }

  const subtotal = cart.items.reduce((sum, item) => {
    const price = item.meal.discountPrice ?? item.meal.price;
    return sum + price * item.quantity;
  }, 0);

  const deliveryFee = cart.provider.deliveryFee;
  const minOrderAmount = cart.provider.minOrderAmount;

  if (subtotal < minOrderAmount) {
    throw new Error(
      `Minimum order amount is ${minOrderAmount}. Current subtotal is ${subtotal}`
    );
  }

  const totalAmount = subtotal + deliveryFee;

  const order = await prisma.$transaction(async (tx) => {
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
            subtotal:
              (item.meal.discountPrice ?? item.meal.price) * item.quantity,
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

    for (const item of cart.items) {
      await tx.meal.update({
        where: { id: item.meal.id },
        data: { totalOrders: { increment: item.quantity } },
      });
    }

    await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
    await tx.cart.update({
      where: { id: cart.id },
      data: { providerId: null },
    });

    return newOrder;
  });

  return order;
};

const getMyOrders = async (customerId: string) => {
  return await prisma.order.findMany({
    where: { customerId },
    include: {
      items: {
        include: {
          meal: { select: { thumbnail: true } },
        },
      },
      provider: {
        select: { restaurantName: true, logo: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

const getMyOrderById = async (orderId: string, customerId: string) => {
  return await prisma.order.findFirst({
    where: { id: orderId, customerId },
    include: {
      items: {
        include: {
          meal: { select: { thumbnail: true, name: true } },
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

const cancelOrder = async (
  orderId: string,
  customerId: string,
  reason?: string
) => {
  const order = await prisma.order.findFirst({
    where: { id: orderId, customerId },
  });

  if (!order) throw new Error("Order not found");

  if (order.status !== "placed") {
    throw new Error("Order can only be cancelled when it is in placed status");
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

const getProviderOrders = async (userId: string) => {
  const provider = await prisma.provider.findUnique({ where: { userId } });
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

  const timestampField: Partial<Record<OrderStatus, object>> = {
    preparing: { preparingAt: new Date() },
    ready: { readyAt: new Date() },
    delivered: { deliveredAt: new Date() },
    cancelled: { cancelledAt: new Date() },
  };

  return await prisma.order.update({
    where: { id: orderId },
    data: { status, ...timestampField[status] },
  });
};

// ✅ Admin — pagination + filter + search সহ
const getAllOrders = async (query: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}) => {
  const page = query.page || 1;
  const limit = query.limit || 10;
  const skip = (page - 1) * limit;

  const where: any = {};

  if (query.status && query.status !== "all") {
    where.status = query.status;
  }

  if (query.search) {
    where.OR = [
      { orderNumber: { contains: query.search, mode: "insensitive" } },
      { customerName: { contains: query.search, mode: "insensitive" } },
    ];
  }

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where,
      include: {
        items: true,
        provider: { select: { restaurantName: true } },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.order.count({ where }),
  ]);

  return {
    orders,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

// ✅ Admin — order cancel করবে
const adminCancelOrder = async (orderId: string, reason?: string) => {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  if (!order) throw new Error("Order not found");

  if (order.status === "delivered" || order.status === "cancelled") {
    throw new Error("Cannot cancel a delivered or already cancelled order");
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

// ✅ Admin — summary stats
const getOrderStats = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [total, placed, preparing, delivered, cancelled, todayRevenue] =
    await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { status: "placed" } }),
      prisma.order.count({ where: { status: "preparing" } }),
      prisma.order.count({ where: { status: "delivered" } }),
      prisma.order.count({ where: { status: "cancelled" } }),
      prisma.order.aggregate({
        where: { status: "delivered", createdAt: { gte: today } },
        _sum: { totalAmount: true },
      }),
    ]);

  return {
    total,
    placed,
    preparing,
    delivered,
    cancelled,
    todayRevenue: todayRevenue._sum.totalAmount || 0,
  };
};

export const orderService = {
  createOrder,
  getMyOrders,
  getMyOrderById,
  cancelOrder,
  getProviderOrders,
  updateOrderStatus,
  getAllOrders,
  adminCancelOrder,
  getOrderStats,
};
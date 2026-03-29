// 1. Import prisma client
import { prisma } from "../../lib/prisma";

// 2. Get cart by customer ID
const getCart = async (customerId: string) => {
  return await prisma.cart.findUnique({
    where: { customerId },
    include: {
      items: {
        include: {
          meal: {
            include: {
              provider: {
                select: {
                  restaurantName: true,
                  deliveryFee: true,
                  minOrderAmount: true,
                },
              },
              category: {
                select: { name: true, icon: true },
              },
            },
          },
        },
      },
      provider: {
        select: {
          restaurantName: true,
          deliveryFee: true,
          minOrderAmount: true,
        },
      },
    },
  });
};

// 3. Add item to cart
const addToCart = async (
  customerId: string,
  data: {
    mealId: string;
    quantity: number;
    specialInstructions?: string;
  }
) => {
  // 3.1 Get meal info
  const meal = await prisma.meal.findUnique({
    where: { id: data.mealId },
    select: { providerId: true },
  });

  if (!meal) {
    throw new Error("Meal not found");
  }

  // 3.2 Find existing cart
  let cart = await prisma.cart.findUnique({
    where: { customerId },
  });

  // 3.3 If no cart, create new one
  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        customerId,
        providerId: meal.providerId,
      },
    });
  } else {
    // 3.4 Check if same provider
    if (cart.providerId !== meal.providerId) {
      throw new Error("Cannot add items from different restaurants in same cart");
    }
  }

  // 3.5 Add or update cart item
  const updateData: any = {
    quantity: { increment: data.quantity },
  };
  if (data.specialInstructions !== undefined) {
    updateData.specialInstructions = data.specialInstructions;
  }

  return await prisma.cartItem.upsert({
    where: {
      cartId_mealId: {
        cartId: cart.id,
        mealId: data.mealId,
      },
    },
    update: updateData,
    create: {
      cartId: cart.id,
      mealId: data.mealId,
      quantity: data.quantity,
      specialInstructions: data.specialInstructions ?? null,
    },
  });
};

// 4. Update cart item quantity
const updateCartItem = async (
  customerId: string,
  itemId: string,
  quantity: number
) => {
  // 4.1 Find cart
  const cart = await prisma.cart.findUnique({
    where: { customerId },
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  // 4.2 If quantity 0 or less, remove item
  if (quantity <= 0) {
    return await prisma.cartItem.delete({
      where: {
        id: itemId,
        cartId: cart.id,
      },
    });
  }

  // 4.3 Update quantity
  return await prisma.cartItem.update({
    where: {
      id: itemId,
      cartId: cart.id,
    },
    data: { quantity },
  });
};

// 5. Remove item from cart
const removeFromCart = async (customerId: string, itemId: string) => {
  const cart = await prisma.cart.findUnique({
    where: { customerId },
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  return await prisma.cartItem.delete({
    where: {
      id: itemId,
      cartId: cart.id,
    },
  });
};

// 6. Clear entire cart
const clearCart = async (customerId: string) => {
  const cart = await prisma.cart.findUnique({
    where: { customerId },
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  return await prisma.cart.delete({
    where: { customerId },
  });
};

// 7. Get cart summary for checkout
const getCartSummary = async (customerId: string) => {
  const cart = await getCart(customerId);

  // 7.1 Empty cart
  if (!cart || !cart.items.length) {
    return {
      items: [],
      subtotal: 0,
      deliveryFee: 0,
      total: 0,
      provider: null,
    };
  }

  // 7.2 Calculate subtotal
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.meal.price * item.quantity,
    0
  );

  // 7.3 Get delivery info
  const deliveryFee = cart.provider?.deliveryFee || 0;
  const minOrderAmount = cart.provider?.minOrderAmount || 0;

  // 7.4 Return formatted summary
  return {
    cartId: cart.id,
    providerId: cart.providerId,
    provider: cart.provider,
    items: cart.items.map((item) => ({
      id: item.id,
      mealId: item.mealId,
      name: item.meal.name,
      price: item.meal.price,
      quantity: item.quantity,
      subtotal: item.meal.price * item.quantity,
      specialInstructions: item.specialInstructions,
      image: item.meal.thumbnail || item.meal.images?.[0],
    })),
    subtotal,
    deliveryFee,
    minOrderAmount,
    total: subtotal + deliveryFee,
    meetsMinOrder: subtotal >= minOrderAmount,
  };
};

// 8. Export all functions
export const cartService = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartSummary,
};
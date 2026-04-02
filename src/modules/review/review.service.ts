import { prisma } from "../../lib/prisma";

// Create a review (only after order is delivered)
const createReview = async (
  customerId: string,
  data: {
    orderId: string;
    mealId: string;
    rating: number;
    title?: string;
    comment?: string;
  }
) => {
  // 1. Verify order belongs to this customer and is delivered
  const order = await prisma.order.findFirst({
    where: {
      id: data.orderId,
      customerId,
      status: "delivered",
    },
    select: { id: true },
  });

  if (!order) {
    throw new Error("Order not found or not delivered yet");
  }

  // 2. Check if meal exists and belongs to the order (optional but good)
  const orderItem = await prisma.orderItem.findFirst({
    where: {
      orderId: data.orderId,
      mealId: data.mealId,
    },
    select: { id: true },
  });

  if (!orderItem) {
    throw new Error("This meal was not part of the order");
  }

  // 3. Check if already reviewed for this meal from this order
  const existingReview = await prisma.review.findUnique({
    where: { orderId: data.orderId, mealId: data.mealId },
  });
  if (existingReview) {
    throw new Error("You have already reviewed this meal for this order");
  }

  // 4. Get customer snapshot
  const user = await prisma.user.findUnique({
    where: { id: customerId },
    select: { name: true },
  });

  // 5. Create review
  const review = await prisma.review.create({
    data: {
      customerId,
      mealId: data.mealId,
      orderId: data.orderId,
      rating: data.rating,
      title: data.title ?? null,
      comment: data.comment ?? null,
      customerName: user?.name || "Anonymous",
      isVerifiedPurchase: true,
    },
    include: {
      meal: {
        select: { name: true, rating: true, totalReviews: true },
      },
    },
  });

  // 6. Update meal rating and totalReviews
  const mealStats = await prisma.meal.update({
    where: { id: data.mealId },
    data: {
      totalReviews: { increment: 1 },
      rating: {
        set: await prisma.review
          .aggregate({
            where: { mealId: data.mealId },
            _avg: { rating: true },
          })
          .then((res) => res._avg.rating ?? 0),
      },
    },
  });

  return review;
};

// Get all reviews for a specific meal (public)
const getMealReviews = async (mealId: string, limit: number = 10) => {
  return await prisma.review.findMany({
    where: { mealId },
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      rating: true,
      title: true,
      comment: true,
      customerName: true,
      createdAt: true,
      isVerifiedPurchase: true,
      providerResponse: true,
      respondedAt: true,
    },
  });
};

// Get current customer's reviews
const getMyReviews = async (customerId: string) => {
  return await prisma.review.findMany({
    where: { customerId },
    include: {
      meal: {
        select: { name: true, thumbnail: true },
      },
      order: {
        select: { orderNumber: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Update a review (only own review)
const updateReview = async (
  reviewId: string,
  customerId: string,
  data: {
    rating?: number;
    title?: string;
    comment?: string;
  }
) => {
  const review = await prisma.review.findFirst({
    where: { id: reviewId, customerId },
  });

  if (!review) {
    throw new Error("Review not found or not authorized");
  }

  const updateData: Record<string, any> = {};
  if (data.rating !== undefined) updateData.rating = data.rating;
  if (data.title !== undefined) updateData.title = data.title;
  if (data.comment !== undefined) updateData.comment = data.comment;

  return await prisma.review.update({
    where: { id: reviewId },
    data: updateData,
  });
};

// Delete a review (only own review)
const deleteReview = async (reviewId: string, customerId: string) => {
  const review = await prisma.review.findFirst({
    where: { id: reviewId, customerId },
  });

  if (!review) {
    throw new Error("Review not found or not authorized");
  }

  // Get mealId before deletion to update stats
  const mealId = review.mealId;

  const deleted = await prisma.review.delete({
    where: { id: reviewId },
  });

  // Recalculate meal rating and totalReviews
  const newStats = await prisma.review.aggregate({
    where: { mealId },
    _count: true,
    _avg: { rating: true },
  });

  await prisma.meal.update({
    where: { id: mealId },
    data: {
      totalReviews: newStats._count,
      rating: newStats._avg.rating ?? 0,
    },
  });

  return deleted;
};

// Provider respond to a review (optional)
const respondToReview = async (
  reviewId: string,
  providerId: string,
  response: string
) => {
  // Verify provider owns the meal's provider
  const review = await prisma.review.findUnique({
    where: { id: reviewId },
    include: {
      meal: {
        select: { providerId: true },
      },
    },
  });

  if (!review) throw new Error("Review not found");

  const provider = await prisma.provider.findUnique({
    where: { id: providerId },
    select: { id: true },
  });

  if (!provider || review.meal.providerId !== provider.id) {
    throw new Error("Not authorized to respond to this review");
  }

  return await prisma.review.update({
    where: { id: reviewId },
    data: {
      providerResponse: response,
      respondedAt: new Date(),
    },
  });
};

export const reviewService = {
  createReview,
  getMealReviews,
  getMyReviews,
  updateReview,
  deleteReview,
  respondToReview,
};
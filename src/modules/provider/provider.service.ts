import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

// Provider profile তৈরি
const createProvider = async (data: Prisma.ProviderUncheckedCreateInput) => {
  return await prisma.provider.create({ data });
};

// // Public — approved providers সবাই দেখতে পারবে
// const getAllProviders = async (search?: string) => {
//   const where: Prisma.ProviderWhereInput = { isApproved: true };

//   if (search) {
//     where.OR = [
//       { restaurantName: { contains: search, mode: "insensitive" } },
//       { description: { contains: search, mode: "insensitive" } },
//       { city: { contains: search, mode: "insensitive" } },
//       { area: { contains: search, mode: "insensitive" } },
//     ];
//   }

//   return await prisma.provider.findMany({
//     where,
//     select: {
//       id: true,
//       restaurantName: true,
//       description: true,
//       city: true,
//       area: true,
//       cuisineType: true,
//       logo: true,
//       coverImage: true,
//       rating: true,
//       totalReviews: true,
//       deliveryFee: true,
//       deliveryTimeMin: true,
//       deliveryTimeMax: true,
//       minOrderAmount: true,
//       isOpen: true,
//       isFeatured: true,
//       _count: {
//         select: { meals: true },
//       },
//     },
//     orderBy: [
//       { isFeatured: "desc" },
//       { rating: "desc" },
//     ],
//   });
// };

// Public — approved providers সবাই দেখতে পারবে (isFeatured ফিল্টার সহ)
const getAllProviders = async (search?: string, isFeatured?: boolean) => {
  const where: Prisma.ProviderWhereInput = { isApproved: true };

  if (search) {
    where.OR = [
      { restaurantName: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
      { area: { contains: search, mode: "insensitive" } },
    ];
  }

  if (isFeatured !== undefined) {
    where.isFeatured = isFeatured;
  }

  return await prisma.provider.findMany({
    where,
    select: {
      id: true,
      restaurantName: true,
      description: true,
      city: true,
      area: true,
      cuisineType: true,
      logo: true,
      coverImage: true,
      rating: true,
      totalReviews: true,
      deliveryFee: true,
      deliveryTimeMin: true,
      deliveryTimeMax: true,
      minOrderAmount: true,
      isOpen: true,
      isFeatured: true,
      _count: {
        select: { meals: true },
      },
    },
    orderBy: [
      { isFeatured: "desc" },
      { rating: "desc" },
    ],
  });
};

// Public — single provider তার meals সহ
const getProviderById = async (id: string) => {
  return await prisma.provider.findUnique({
    where: { id },
    include: {
      meals: {
        where: { isAvailable: true },
        orderBy: { createdAt: "desc" },
        include: {
          category: {
            select: { name: true, icon: true },
          },
        },
      },
      _count: {
        select: { meals: true, orders: true },
      },
    },
  });
};

// Provider নিজের profile দেখবে বা check করবে
const getProviderByUserId = async (userId: string) => {
  return await prisma.provider.findUnique({
    where: { userId },
    include: {
      meals: {
        orderBy: { createdAt: "desc" },
        include: { category: true },
      },
      _count: {
        select: { meals: true, orders: true },
      },
    },
  });
};

// Provider নিজের profile update করবে
const updateProvider = async (
  userId: string,
  data: Prisma.ProviderUncheckedUpdateInput
) => {
  const updateData: Prisma.ProviderUncheckedUpdateInput = {
    ...(data.restaurantName !== undefined && { restaurantName: data.restaurantName }),
    ...(data.branch !== undefined && { branch: data.branch }),
    ...(data.description !== undefined && { description: data.description }),
    ...(data.contactPhone !== undefined && { contactPhone: data.contactPhone }),
    ...(data.contactEmail !== undefined && { contactEmail: data.contactEmail }),
    ...(data.address !== undefined && { address: data.address }),
    ...(data.city !== undefined && { city: data.city }),
    ...(data.area !== undefined && { area: data.area }),
    ...(data.cuisineType !== undefined && { cuisineType: data.cuisineType }),
    ...(data.isOpen !== undefined && { isOpen: data.isOpen }),
    ...(data.openingTime !== undefined && { openingTime: data.openingTime }),
    ...(data.closingTime !== undefined && { closingTime: data.closingTime }),
    ...(data.weeklyOff !== undefined && { weeklyOff: data.weeklyOff }),
    ...(data.deliveryFee !== undefined && { deliveryFee: data.deliveryFee }),
    ...(data.deliveryTimeMin !== undefined && { deliveryTimeMin: data.deliveryTimeMin }),
    ...(data.deliveryTimeMax !== undefined && { deliveryTimeMax: data.deliveryTimeMax }),
    ...(data.minOrderAmount !== undefined && { minOrderAmount: data.minOrderAmount }),
    ...(data.logo !== undefined && { logo: data.logo }),
    ...(data.coverImage !== undefined && { coverImage: data.coverImage }),
  };

  return await prisma.provider.update({
    where: { userId },
    data: updateData,
  });
};

// Admin — provider approve/reject করবে
const approveProvider = async (id: string, isApproved: boolean) => {
  return await prisma.provider.update({
    where: { id },
    data: { isApproved },
  });
};

// Admin — সব provider দেখবে
const getAllProvidersForAdmin = async () => {
  return await prisma.provider.findMany({
    select: {
      id: true,
      userId: true,
      restaurantName: true,
      contactPhone: true,
      contactEmail: true,
      city: true,
      isApproved: true,
      isFeatured: true,
      isOpen: true,
      rating: true,
      createdAt: true,
      _count: {
        select: { meals: true, orders: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Provider Dashboard Stats
const getProviderStats = async (userId: string) => {
  const provider = await prisma.provider.findUnique({
    where: { userId },
    include: {
      meals: true,
      orders: true,
    },
  });

  if (!provider) return null;

  const totalMeals = provider.meals.length;
  const totalOrders = provider.orders.length;
  const pendingOrders = provider.orders.filter((o: any) => o.status === "placed").length;
  const avgRating = provider.meals.reduce((sum: number, m: any) => sum + (m.rating || 0), 0) / (totalMeals || 1);

  return {
    totalMeals,
    totalOrders,
    pendingOrders,
    averageRating: avgRating,
  };
};

// Provider Dashboard Meals List

const getProviderMeals = async (userId: string) => {
  const provider = await prisma.provider.findUnique({
    where: { userId },
    include: {
      meals: {
        include: {
          category: {
            select: { name: true, icon: true },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  return provider?.meals || [];
};




export const providerService = {
  createProvider,
  getAllProviders,
  getProviderById,
  getProviderByUserId,
  updateProvider,
  approveProvider,
  getAllProvidersForAdmin,
  getProviderStats,
  getProviderMeals
};
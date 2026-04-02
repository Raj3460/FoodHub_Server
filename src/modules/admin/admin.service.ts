import { prisma } from "../../lib/prisma";

// সব users দেখা
const getAllUsers = async (search?: string) => {
  const where: any = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }

  return await prisma.user.findMany({
    where,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      emailVerified: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
};

// User status update (suspend/activate)
const updateUserStatus = async (userId: string, status: string) => {
  if (!["ACTIVE", "SUSPENDED"].includes(status)) {
    throw new Error("Status must be ACTIVE or SUSPENDED");
  }

  return await prisma.user.update({
    where: { id: userId },
    data: { status },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    },
  });
};

// সব providers দেখা
const getAllProviders = async () => {
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
      totalReviews: true,
      createdAt: true,
      _count: {
        select: { meals: true, orders: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Provider approve/reject করা
const approveProvider = async (providerId: string, isApproved: boolean) => {
  const provider = await prisma.provider.findUnique({
    where: { id: providerId },
  });

  if (!provider) throw new Error("Provider not found");

  return await prisma.provider.update({
    where: { id: providerId },
    data: { isApproved },
  });
};

// Provider featured toggle করা
const toggleFeatured = async (providerId: string, isFeatured: boolean) => {
  const provider = await prisma.provider.findUnique({
    where: { id: providerId },
  });

  if (!provider) throw new Error("Provider not found");

  return await prisma.provider.update({
    where: { id: providerId },
    data: { isFeatured },
  });
};

// সব orders দেখা
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

// Dashboard stats
const getDashboardStats = async () => {
  const [
    totalUsers,
    totalProviders,
    totalOrders,
    totalRevenue,
    pendingProviders,
    activeOrders,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.provider.count({ where: { isApproved: true } }),
    prisma.order.count(),
    prisma.order.aggregate({
      where: { status: "delivered" },
      _sum: { totalAmount: true },
    }),
    prisma.provider.count({ where: { isApproved: false } }),
    prisma.order.count({
      where: { status: { in: ["placed", "preparing", "ready"] } },
    }),
  ]);

  return {
    totalUsers,
    totalProviders,
    totalOrders,
    totalRevenue: totalRevenue._sum.totalAmount ?? 0,
    pendingProviders,
    activeOrders,
  };
};

export const adminService = {
  getAllUsers,
  updateUserStatus,
  getAllProviders,
  approveProvider,
  toggleFeatured,
  getAllOrders,
  getDashboardStats,
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const prisma_1 = require("../../lib/prisma");
// সব users দেখা
const getAllUsers = async (search) => {
    const where = {};
    if (search) {
        where.OR = [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
        ];
    }
    return await prisma_1.prisma.user.findMany({
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
const updateUserStatus = async (userId, status) => {
    if (!["ACTIVE", "SUSPENDED"].includes(status)) {
        throw new Error("Status must be ACTIVE or SUSPENDED");
    }
    return await prisma_1.prisma.user.update({
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
    return await prisma_1.prisma.provider.findMany({
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
const approveProvider = async (providerId, isApproved) => {
    const provider = await prisma_1.prisma.provider.findUnique({
        where: { id: providerId },
    });
    if (!provider)
        throw new Error("Provider not found");
    return await prisma_1.prisma.provider.update({
        where: { id: providerId },
        data: { isApproved },
    });
};
// Provider featured toggle করা
const toggleFeatured = async (providerId, isFeatured) => {
    const provider = await prisma_1.prisma.provider.findUnique({
        where: { id: providerId },
    });
    if (!provider)
        throw new Error("Provider not found");
    return await prisma_1.prisma.provider.update({
        where: { id: providerId },
        data: { isFeatured },
    });
};
// সব orders দেখা
const getAllOrders = async () => {
    return await prisma_1.prisma.order.findMany({
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
    const [totalUsers, totalProviders, totalOrders, totalRevenue, pendingProviders, activeOrders,] = await Promise.all([
        prisma_1.prisma.user.count(),
        prisma_1.prisma.provider.count({ where: { isApproved: true } }),
        prisma_1.prisma.order.count(),
        prisma_1.prisma.order.aggregate({
            where: { status: "delivered" },
            _sum: { totalAmount: true },
        }),
        prisma_1.prisma.provider.count({ where: { isApproved: false } }),
        prisma_1.prisma.order.count({
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
exports.adminService = {
    getAllUsers,
    updateUserStatus,
    getAllProviders,
    approveProvider,
    toggleFeatured,
    getAllOrders,
    getDashboardStats,
};
//# sourceMappingURL=admin.service.js.map
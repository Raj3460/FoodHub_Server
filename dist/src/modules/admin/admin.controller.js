"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
exports.adminController = {
    // GET /admin/users
    getAllUsers: async (req, res) => {
        try {
            const search = req.query.search;
            const users = await admin_service_1.adminService.getAllUsers(search);
            res.json({ success: true, total: users.length, data: users });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch users",
                error: error.message,
            });
        }
    },
    // PATCH /admin/users/:id/status
    updateUserStatus: async (req, res) => {
        try {
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: "status is required",
                });
            }
            const user = await admin_service_1.adminService.updateUserStatus(req.params.id, status);
            res.json({
                success: true,
                message: `User ${status === "ACTIVE" ? "activated" : "suspended"} successfully`,
                data: user,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to update user status",
            });
        }
    },
    // GET /admin/providers
    getAllProviders: async (req, res) => {
        try {
            const providers = await admin_service_1.adminService.getAllProviders();
            res.json({ success: true, total: providers.length, data: providers });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch providers",
                error: error.message,
            });
        }
    },
    // PATCH /admin/providers/:id/approve
    approveProvider: async (req, res) => {
        try {
            const { isApproved } = req.body;
            if (typeof isApproved !== "boolean") {
                return res.status(400).json({
                    success: false,
                    message: "isApproved must be a boolean",
                });
            }
            const provider = await admin_service_1.adminService.approveProvider(req.params.id, isApproved);
            res.json({
                success: true,
                message: `Provider ${isApproved ? "approved" : "rejected"} successfully`,
                data: provider,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to approve provider",
            });
        }
    },
    // PATCH /admin/providers/:id/featured
    toggleFeatured: async (req, res) => {
        try {
            const { isFeatured } = req.body;
            if (typeof isFeatured !== "boolean") {
                return res.status(400).json({
                    success: false,
                    message: "isFeatured must be a boolean",
                });
            }
            const provider = await admin_service_1.adminService.toggleFeatured(req.params.id, isFeatured);
            res.json({
                success: true,
                message: `Provider ${isFeatured ? "marked as featured" : "removed from featured"}`,
                data: provider,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to update featured status",
            });
        }
    },
    // GET /admin/orders
    getAllOrders: async (req, res) => {
        try {
            const orders = await admin_service_1.adminService.getAllOrders();
            res.json({ success: true, total: orders.length, data: orders });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch orders",
                error: error.message,
            });
        }
    },
    // GET /admin/stats
    getDashboardStats: async (req, res) => {
        try {
            const stats = await admin_service_1.adminService.getDashboardStats();
            res.json({ success: true, data: stats });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch stats",
                error: error.message,
            });
        }
    },
};
//# sourceMappingURL=admin.controller.js.map
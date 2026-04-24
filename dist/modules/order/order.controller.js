"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
exports.orderController = {
    // POST /orders — Customer order দেবে
    createOrder: async (req, res) => {
        try {
            const { deliveryAddress, deliveryArea, deliveryInstructions, customerName, customerPhone, customerEmail, } = req.body;
            if (!deliveryAddress || !deliveryArea || !customerName || !customerPhone) {
                return res.status(400).json({
                    success: false,
                    message: "deliveryAddress, deliveryArea, customerName and customerPhone are required",
                });
            }
            const order = await order_service_1.orderService.createOrder(req.user.id, {
                deliveryAddress,
                deliveryArea,
                deliveryInstructions,
                customerName,
                customerPhone,
                customerEmail,
            });
            res.status(201).json({
                success: true,
                message: "Order placed successfully",
                data: order,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to create order",
            });
        }
    },
    // GET /orders/my — Customer নিজের orders দেখবে
    getMyOrders: async (req, res) => {
        try {
            const orders = await order_service_1.orderService.getMyOrders(req.user.id);
            res.json({
                success: true,
                total: orders.length,
                data: orders,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch orders",
                error: error.message,
            });
        }
    },
    // GET /orders/my/:id — Customer single order দেখবে
    getMyOrderById: async (req, res) => {
        try {
            const order = await order_service_1.orderService.getMyOrderById(req.params.id, req.user.id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found",
                });
            }
            res.json({ success: true, data: order });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch order",
                error: error.message,
            });
        }
    },
    // PATCH /orders/my/:id/cancel — Customer order cancel করবে
    cancelOrder: async (req, res) => {
        try {
            const { reason } = req.body;
            const order = await order_service_1.orderService.cancelOrder(req.params.id, req.user.id, reason);
            res.json({
                success: true,
                message: "Order cancelled successfully",
                data: order,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to cancel order",
            });
        }
    },
    // GET /orders/provider — Provider তার orders দেখবে
    getProviderOrders: async (req, res) => {
        try {
            const orders = await order_service_1.orderService.getProviderOrders(req.user.id);
            res.json({
                success: true,
                total: orders.length,
                data: orders,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch orders",
                error: error.message,
            });
        }
    },
    // PATCH /orders/provider/:id/status — Provider status update করবে
    updateOrderStatus: async (req, res) => {
        try {
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: "status is required",
                });
            }
            const order = await order_service_1.orderService.updateOrderStatus(req.params.id, req.user.id, status);
            res.json({
                success: true,
                message: `Order status updated to ${status}`,
                data: order,
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Failed to update order status",
            });
        }
    },
    // GET /orders/admin — Admin সব orders দেখবে
    getAllOrders: async (req, res) => {
        try {
            const orders = await order_service_1.orderService.getAllOrders();
            res.json({
                success: true,
                total: orders.length,
                data: orders,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch orders",
                error: error.message,
            });
        }
    },
};
//# sourceMappingURL=order.controller.js.map
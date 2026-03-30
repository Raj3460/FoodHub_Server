import { Request, Response } from "express";
import { orderService } from "./order.service";

export const orderController = {

  // POST /orders — Customer order দেবে
  createOrder: async (req: Request, res: Response) => {
    try {
      const {
        deliveryAddress,
        deliveryArea,
        deliveryInstructions,
        customerName,
        customerPhone,
        customerEmail,
      } = req.body;

      if (!deliveryAddress || !deliveryArea || !customerName || !customerPhone) {
        return res.status(400).json({
          success: false,
          message: "deliveryAddress, deliveryArea, customerName and customerPhone are required",
        });
      }

      const order = await orderService.createOrder(req.user!.id, {
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
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create order",
      });
    }
  },

  // GET /orders/my — Customer নিজের orders দেখবে
  getMyOrders: async (req: Request, res: Response) => {
    try {
      const orders = await orderService.getMyOrders(req.user!.id);
      res.json({
        success: true,
        total: orders.length,
        data: orders,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
        error: error.message,
      });
    }
  },

  // GET /orders/my/:id — Customer single order দেখবে
  getMyOrderById: async (req: Request, res: Response) => {
    try {
      const order = await orderService.getMyOrderById(
        req.params.id as string,
        req.user!.id
      );

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      res.json({ success: true, data: order });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch order",
        error: error.message,
      });
    }
  },

  // PATCH /orders/my/:id/cancel — Customer order cancel করবে
  cancelOrder: async (req: Request, res: Response) => {
    try {
      const { reason } = req.body;
      const order = await orderService.cancelOrder(
        req.params.id as string,
        req.user!.id,
        reason
      );

      res.json({
        success: true,
        message: "Order cancelled successfully",
        data: order,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to cancel order",
      });
    }
  },

  // GET /orders/provider — Provider তার orders দেখবে
  getProviderOrders: async (req: Request, res: Response) => {
    try {
      const orders = await orderService.getProviderOrders(req.user!.id);
      res.json({
        success: true,
        total: orders.length,
        data: orders,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
        error: error.message,
      });
    }
  },

  // PATCH /orders/provider/:id/status — Provider status update করবে
  updateOrderStatus: async (req: Request, res: Response) => {
    try {
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: "status is required",
        });
      }

      const order = await orderService.updateOrderStatus(
        req.params.id as string,
        req.user!.id,
        status
      );

      res.json({
        success: true,
        message: `Order status updated to ${status}`,
        data: order,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update order status",
      });
    }
  },

  // GET /orders/admin — Admin সব orders দেখবে
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await orderService.getAllOrders();
      res.json({
        success: true,
        total: orders.length,
        data: orders,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
        error: error.message,
      });
    }
  },
};
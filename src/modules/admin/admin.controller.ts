import { Request, Response } from "express";
import { adminService } from "./admin.service";

export const adminController = {

  // GET /admin/users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const search = req.query.search as string | undefined;
      const users = await adminService.getAllUsers(search);
      res.json({ success: true, total: users.length, data: users });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch users",
        error: error.message,
      });
    }
  },

  // PATCH /admin/users/:id/status
  updateUserStatus: async (req: Request, res: Response) => {
    try {
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: "status is required",
        });
      }

      const user = await adminService.updateUserStatus(req.params.id as string, status);
      res.json({
        success: true,
        message: `User ${status === "ACTIVE" ? "activated" : "suspended"} successfully`,
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update user status",
      });
    }
  },

  // GET /admin/providers
  getAllProviders: async (req: Request, res: Response) => {
    try {
      const providers = await adminService.getAllProviders();
      res.json({ success: true, total: providers.length, data: providers });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch providers",
        error: error.message,
      });
    }
  },

  // PATCH /admin/providers/:id/approve
  approveProvider: async (req: Request, res: Response) => {
    try {
      const { isApproved } = req.body;

      if (typeof isApproved !== "boolean") {
        return res.status(400).json({
          success: false,
          message: "isApproved must be a boolean",
        });
      }

      const provider = await adminService.approveProvider(
        req.params.id as string,
        isApproved
      );

      res.json({
        success: true,
        message: `Provider ${isApproved ? "approved" : "rejected"} successfully`,
        data: provider,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to approve provider",
      });
    }
  },

  // PATCH /admin/providers/:id/featured
  toggleFeatured: async (req: Request, res: Response) => {
    try {
      const { isFeatured } = req.body;

      if (typeof isFeatured !== "boolean") {
        return res.status(400).json({
          success: false,
          message: "isFeatured must be a boolean",
        });
      }

      const provider = await adminService.toggleFeatured(
        req.params.id as string,
        isFeatured
      );

      res.json({
        success: true,
        message: `Provider ${isFeatured ? "marked as featured" : "removed from featured"}`,
        data: provider,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update featured status",
      });
    }
  },

  // GET /admin/orders
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await adminService.getAllOrders();
      res.json({ success: true, total: orders.length, data: orders });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch orders",
        error: error.message,
      });
    }
  },

  // GET /admin/stats
  getDashboardStats: async (req: Request, res: Response) => {
    try {
      const stats = await adminService.getDashboardStats();
      res.json({ success: true, data: stats });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch stats",
        error: error.message,
      });
    }
  },
};
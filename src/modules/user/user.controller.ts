// backend/src/modules/user/user.controller.ts
import { Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
  /**
   * GET /api/user/profile – Get current user profile
   */
  getProfile: async (req: Request, res: Response) => {
    try {
      const userId = req.user!.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.json({ success: true, data: user });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  /**
   * PUT /api/user/profile – Update user profile (name, phone)
   */
  updateProfile: async (req: Request, res: Response) => {
    try {
      const userId = req.user!.id;
      const { name, phone } = req.body;

      const updated = await userService.updateProfile(userId, { name, phone });
      res.json({
        success: true,
        message: "Profile updated successfully",
        data: updated,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to update profile" });
    }
  },
};



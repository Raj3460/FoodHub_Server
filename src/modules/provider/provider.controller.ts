import { Request, Response } from "express";
import { providerService } from "./provider.service";
import { prisma } from "../../lib/prisma";

export const providerController = {
  // POST /provider/profile
  createProviderProfile: async (req: Request, res: Response) => {
    try {
      // Check if user already has a provider profile
      const existing = await providerService.getProviderByUserId(req.user!.id);
      if (existing) {
        return res.status(400).json({
          success: false,
          message: "You already have a provider profile",
        });
      }

      const provider = await providerService.createProvider({
        userId: req.user!.id,
        ...req.body,
      });

      res.status(201).json({ success: true, data: provider });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to create provider profile",
        error: error.message,
      });
    }
  },

  // GET /providers (public)
  getAllProviders: async (req: Request, res: Response) => {
    try {
      const search = req.query.search as string | undefined;
      const providers = await providerService.getAllProviders(search);
      res.json({ success: true, data: providers });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch providers",
        error: error.message,
      });
    }
  },

  // GET /providers/:id (public)
  getProviderById: async (req: Request, res: Response) => {
    try {

      const provider = await providerService.getProviderById(req.params.id as string);
      if (!provider) {
        return res.status(404).json({ success: false, message: "Provider not found" });
      }
      res.json({ success: true, data: provider });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch provider",
        error: error.message,
      });
    }
  },

  // GET /provider/profile (private)
  getMyProviderProfile: async (req: Request, res: Response) => {
    try {
      const provider = await providerService.getProviderByUserId(req.user!.id);
      if (!provider) {
        return res.status(404).json({
          success: false,
          message: "Provider profile not found. Please create one first.",
        });
      }
      res.json({ success: true, data: provider });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch profile",
        error: error.message,
      });
    }
  },

  // PUT /provider/profile (private)
  updateMyProviderProfile: async (req: Request, res: Response) => {
    try {
      const provider = await providerService.getProviderByUserId(req.user!.id);
      if (!provider) {
        return res.status(404).json({
          success: false,
          message: "Provider profile not found",
        });
      }

      const updated = await providerService.updateProvider(req.user!.id, req.body);
      res.json({ success: true, data: updated });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to update provider profile",
        error: error.message,
      });
    }
  },
};
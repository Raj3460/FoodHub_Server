import { Request, Response } from "express";
import { providerService } from "./provider.service";

export const providerController = {

  // POST /providers/profile — Provider create profile 
  createProviderProfile: async (req: Request, res: Response) => {
    try {
      // আগে থেকে profile আছে কিনা check
      const existing = await providerService.getProviderByUserId(req.user!.id);
      if (existing) {
        return res.status(400).json({
          success: false,
          message: "You already have a provider profile",
          data: existing,
        });
      }

      const provider = await providerService.createProvider({
        userId: req.user!.id,
        ...req.body,
      });

      res.status(201).json({
        success: true,
        message: "Provider profile created successfully. Waiting for admin approval.",
        data: provider,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to create provider profile",
        error: error.message,
      });
    }
  },

  // GET /providers/my/profile — Provider see own profile 
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

  // PUT /providers/my/profile — Provider self profile update 
  updateMyProviderProfile: async (req: Request, res: Response) => {
    try {
      const provider = await providerService.getProviderByUserId(req.user!.id);
      if (!provider) {
        return res.status(404).json({
          success: false,
          message: "Provider profile not found. Please create one first.",
        });
      }

      const updated = await providerService.updateProvider(req.user!.id, req.body);
      res.json({
        success: true,
        message: "Provider profile updated successfully",
        data: updated,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to update provider profile",
        error: error.message,
      });
    }
  },

  // // GET /providers — Public,    it is okay
  // getAllProviders: async (req: Request, res: Response) => {
  //   try {
  //     const search = req.query.search as string | undefined;
  //     const providers = await providerService.getAllProviders(search);

  //     res.json({
  //       success: true,
  //       total: providers.length,
  //       data: providers,
  //     });
  //   } catch (error: any) {
  //     res.status(500).json({
  //       success: false,
  //       message: "Failed to fetch providers",
  //       error: error.message,
  //     });
  //   }
  // },

  // GET /providers — Public
getAllProviders: async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string | undefined;
    const isFeatured = req.query.isFeatured === 'true'; // ✅ কোয়েরি থেকে বুলিয়ান নেওয়া
    const providers = await providerService.getAllProviders(search, isFeatured  );

    res.json({
      success: true,
      total: providers.length,
      data: providers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch providers",
      error: error.message,
    });
  }
},

  // GET /providers/:id — Public, single provider +>++==> it is okay
  getProviderById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || typeof id !== "string") {
        return res.status(400).json({
          success: false,
          message: "Invalid or missing provider ID",
        });
      }

      const provider = await providerService.getProviderById(id);
      if (!provider) {
        return res.status(404).json({
          success: false,
          message: "Provider not found",
        });
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

  // PATCH /providers/approve/:id Only admin provider approve/reject
  approveProvider: async (req: Request, res: Response) => {
    try {
      const { id } = req.params as {id : string};
      const { isApproved } = req.body;

      if (typeof isApproved !== "boolean") {
        return res.status(400).json({
          success: false,
          message: "isApproved must be a boolean value",
        });
      }

      const provider = await providerService.getProviderById(id);
      if (!provider) {
        return res.status(404).json({
          success: false,
          message: "Provider not found",
        });
      }

      const updated = await providerService.approveProvider(id, isApproved);
      res.json({
        success: true,
        message: `Provider ${isApproved ? "approved" : "rejected"} successfully`,
        data: updated,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to approve provider",
        error: error.message,
      });
    }
  },

  // GET /providers/admin/all — 
  getAllProvidersForAdmin: async (req: Request, res: Response) => {
    try {
      const providers = await providerService.getAllProvidersForAdmin();
      res.json({
        success: true,
        total: providers.length,
        data: providers,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch providers",
        error: error.message,
      });
    }
  },
};
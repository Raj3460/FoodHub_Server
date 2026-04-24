"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerController = void 0;
const provider_service_1 = require("./provider.service");
exports.providerController = {
    // POST /providers/profile — Provider create profile 
    createProviderProfile: async (req, res) => {
        try {
            // আগে থেকে profile আছে কিনা check
            const existing = await provider_service_1.providerService.getProviderByUserId(req.user.id);
            if (existing) {
                return res.status(400).json({
                    success: false,
                    message: "You already have a provider profile",
                    data: existing,
                });
            }
            const provider = await provider_service_1.providerService.createProvider({
                userId: req.user.id,
                ...req.body,
            });
            res.status(201).json({
                success: true,
                message: "Provider profile created successfully. Waiting for admin approval.",
                data: provider,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to create provider profile",
                error: error.message,
            });
        }
    },
    // GET /providers/my/profile — Provider see own profile 
    getMyProviderProfile: async (req, res) => {
        try {
            const provider = await provider_service_1.providerService.getProviderByUserId(req.user.id);
            if (!provider) {
                return res.status(404).json({
                    success: false,
                    message: "Provider profile not found. Please create one first.",
                });
            }
            res.json({ success: true, data: provider });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch profile",
                error: error.message,
            });
        }
    },
    // PUT /providers/my/profile — Provider self profile update 
    updateMyProviderProfile: async (req, res) => {
        try {
            const provider = await provider_service_1.providerService.getProviderByUserId(req.user.id);
            if (!provider) {
                return res.status(404).json({
                    success: false,
                    message: "Provider profile not found. Please create one first.",
                });
            }
            const updated = await provider_service_1.providerService.updateProvider(req.user.id, req.body);
            res.json({
                success: true,
                message: "Provider profile updated successfully",
                data: updated,
            });
        }
        catch (error) {
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
    //! get all Providers where isFeatured query parameter is provided
    getAllProviders: async (req, res) => {
        try {
            const search = req.query.search;
            const isFeatured = req.query.isFeatured === 'true';
            const providers = await provider_service_1.providerService.getAllProviders(search, isFeatured);
            res.json({
                success: true,
                total: providers.length,
                data: providers,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch providers",
                error: error.message,
            });
        }
    },
    // GET /providers/:id — Public, single provider +>++==> it is okay
    getProviderById: async (req, res) => {
        try {
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid or missing provider ID",
                });
            }
            const provider = await provider_service_1.providerService.getProviderById(id);
            if (!provider) {
                return res.status(404).json({
                    success: false,
                    message: "Provider not found",
                });
            }
            res.json({ success: true, data: provider });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch provider",
                error: error.message,
            });
        }
    },
    // PATCH /providers/approve/:id Only admin provider approve/reject
    approveProvider: async (req, res) => {
        try {
            const { id } = req.params;
            const { isApproved } = req.body;
            if (typeof isApproved !== "boolean") {
                return res.status(400).json({
                    success: false,
                    message: "isApproved must be a boolean value",
                });
            }
            const provider = await provider_service_1.providerService.getProviderById(id);
            if (!provider) {
                return res.status(404).json({
                    success: false,
                    message: "Provider not found",
                });
            }
            const updated = await provider_service_1.providerService.approveProvider(id, isApproved);
            res.json({
                success: true,
                message: `Provider ${isApproved ? "approved" : "rejected"} successfully`,
                data: updated,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to approve provider",
                error: error.message,
            });
        }
    },
    // GET /providers/admin/all — 
    getAllProvidersForAdmin: async (req, res) => {
        try {
            const providers = await provider_service_1.providerService.getAllProvidersForAdmin();
            res.json({
                success: true,
                total: providers.length,
                data: providers,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch providers",
                error: error.message,
            });
        }
    },
    // GET /providers/stats — Provider Dashboard Stats
    getStats: async (req, res) => {
        try {
            // console.log("🔍 User ID from session:", req.user!.id);
            const stats = await provider_service_1.providerService.getProviderStats(req.user.id);
            // console.log("🔍 Stats from DB:", stats);
            if (!stats) {
                return res.status(404).json({ success: false, message: "Provider not found " });
            }
            res.json({ success: true, data: stats });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
    // GET /providers/meals — Provider Dashboard Meals List
    getMyMeals: async (req, res) => {
        try {
            const meals = await provider_service_1.providerService.getProviderMeals(req.user.id);
            res.json({ success: true, data: meals });
        }
        catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
};
//# sourceMappingURL=provider.controller.js.map
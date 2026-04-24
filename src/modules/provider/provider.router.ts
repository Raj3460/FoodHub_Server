import express from "express";
import { providerController } from "./provider.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

// ✅ 1. Public static routes
router.get("/", providerController.getAllProviders);

// ✅ 2. Private static routes
router.post("/profile", auth(UserRole.PROVIDER, UserRole.ADMIN), providerController.createProviderProfile);
router.get("/my/profile", auth(UserRole.PROVIDER, UserRole.ADMIN), providerController.getMyProviderProfile);
router.put("/my/profile", auth(UserRole.PROVIDER, UserRole.ADMIN), providerController.updateMyProviderProfile);
router.get("/stats", auth(UserRole.PROVIDER, UserRole.ADMIN), providerController.getStats);
router.get("/meals", auth(UserRole.PROVIDER, UserRole.ADMIN), providerController.getMyMeals);

// ✅ 3. Admin routes
router.patch("/approve/:id", auth(UserRole.ADMIN), providerController.approveProvider);
router.get("/admin/all", auth(UserRole.ADMIN), providerController.getAllProvidersForAdmin);

// ✅ 4. Dynamic route — সবার শেষে
router.get("/:id", providerController.getProviderById);

export const providerRouter = router;
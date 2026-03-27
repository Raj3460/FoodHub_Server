import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { providerController } from "./provider.controller";

const router = Router();

// Public routes (no auth required)
router.get("/", providerController.getAllProviders);
router.get("/:id", providerController.getProviderById);

// Provider routes (auth required)
router.post(
  "/profile",
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  providerController.createProviderProfile
);
router.get(
  "/profile",
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  providerController.getMyProviderProfile
);
router.put(
  "/profile",
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  providerController.updateMyProviderProfile
);

export const providerRouter = router;
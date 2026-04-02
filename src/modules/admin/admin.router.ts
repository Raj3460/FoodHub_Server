import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { adminController } from "./admin.controller";

const router = Router();

// ✅ সব admin route এ ADMIN auth লাগবে
router.use(auth(UserRole.ADMIN));

// Users
router.get("/users", adminController.getAllUsers);
router.patch("/users/:id/status", adminController.updateUserStatus);

// Providers
router.get("/providers", adminController.getAllProviders);
router.patch("/providers/:id/approve", adminController.approveProvider);
router.patch("/providers/:id/featured", adminController.toggleFeatured);

// Orders
router.get("/orders", adminController.getAllOrders);

// Stats
router.get("/stats", adminController.getDashboardStats);

export const adminRouter = router;
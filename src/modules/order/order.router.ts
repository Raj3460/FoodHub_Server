import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { orderController } from "./order.controller";

const router = Router();

// ✅ Customer routes
router.post("/", auth(UserRole.CUSTOMER, UserRole.ADMIN), orderController.createOrder);
router.get("/my", auth(UserRole.CUSTOMER, UserRole.ADMIN), orderController.getMyOrders);
router.get("/my/:id", auth(UserRole.CUSTOMER, UserRole.ADMIN), orderController.getMyOrderById);
router.patch("/my/:id/cancel", auth(UserRole.CUSTOMER, UserRole.ADMIN), orderController.cancelOrder);

// ✅ Provider routes
router.get("/provider", auth(UserRole.PROVIDER, UserRole.ADMIN), orderController.getProviderOrders);
router.patch("/provider/:id/status", auth(UserRole.PROVIDER), orderController.updateOrderStatus);

// ✅ Admin routes
// ⚠️ IMPORTANT: /admin/stats কে /admin/:id এর আগে রাখতে হবে
router.get("/admin/stats", auth(UserRole.ADMIN), orderController.getOrderStats);
router.get("/admin", auth(UserRole.ADMIN), orderController.getAllOrders);
router.patch("/admin/:id/cancel", auth(UserRole.ADMIN), orderController.adminCancelOrder);

export const orderRouter = router;
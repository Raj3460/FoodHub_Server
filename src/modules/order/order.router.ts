import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { orderController } from "./order.controller";

const router = Router();

// ✅ Customer routes
router.post("/", auth(UserRole.CUSTOMER , UserRole.ADMIN), orderController.createOrder);
router.get("/my", auth(UserRole.CUSTOMER , UserRole.ADMIN), orderController.getMyOrders);
router.get("/my/:id", auth(UserRole.CUSTOMER , UserRole.ADMIN), orderController.getMyOrderById);
router.patch("/my/:id/cancel", auth(UserRole.CUSTOMER , UserRole.ADMIN), orderController.cancelOrder);

// ✅ Provider routes
router.get("/provider", auth(UserRole.PROVIDER , UserRole.ADMIN), orderController.getProviderOrders);
router.patch("/provider/:id/status", auth(UserRole.PROVIDER), orderController.updateOrderStatus);

// ✅ Admin routes
router.get("/admin", auth(UserRole.ADMIN), orderController.getAllOrders);

export const orderRouter = router;
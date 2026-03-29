import { Router } from "express";
import { cartController } from "./cart.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router();

// All cart routes require authentication (Customer only)
router.use(auth(UserRole.CUSTOMER, UserRole.ADMIN));

router.get("/", cartController.getCart);
router.get("/summary", cartController.getCartSummary);
router.post("/", cartController.addToCart);
router.put("/:itemId", cartController.updateCartItem);
router.delete("/:itemId", cartController.removeFromCart);
router.delete("/", cartController.clearCart);

export const cartRouter = router;
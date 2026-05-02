// backend/src/modules/user/user.router.ts
import { Router } from "express";
import auth from "../../middlewares/auth";
import { userController } from "./user.controller";

const router = Router();

// All routes require authentication
router.use(auth());

router.get("/profile", userController.getProfile);
router.put("/profile", userController.updateProfile);

export default router;
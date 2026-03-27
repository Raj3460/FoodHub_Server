import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { categoryController } from "./category.controller";

const router = Router();

// Public routes (no auth required)
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

// Admin-only routes
router.post(
  "/",
  auth(UserRole.ADMIN , UserRole.PROVIDER), //for testing purpose
  categoryController.createCategory
);
router.put(
  "/:id",
  auth(UserRole.ADMIN , UserRole.PROVIDER), //for testing purpose
  categoryController.updateCategory
);
router.delete(
  "/:id",
  auth(UserRole.ADMIN , UserRole.PROVIDER), //for testing purpose
  categoryController.deleteCategory
);

export const categoryRouter = router;
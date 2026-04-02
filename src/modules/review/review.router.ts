import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { reviewController } from "./review.controller";

const router = Router();

// ============= PUBLIC ROUTES =============
// Get reviews for a meal (no auth needed)
router.get("/meals/:mealId/reviews", reviewController.getMealReviews);

// ============= CUSTOMER ROUTES =============
// Customer must be logged in (role CUSTOMER)
router.use(auth(UserRole.CUSTOMER, UserRole.ADMIN)); // both can access

router.post("/", reviewController.createReview);
router.get("/my-reviews", reviewController.getMyReviews);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

// ============= PROVIDER ROUTES (optional) =============
router.patch(
  "/:id/respond",
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  reviewController.respondToReview
);

export const reviewRouter = router;
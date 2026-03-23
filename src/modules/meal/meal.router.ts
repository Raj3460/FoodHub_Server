import  express, { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { mealController } from "./meal.controller";

const router = express.Router();

router.get("/",
       mealController.getAllMeals
)



router.post(
  "/",
  auth(UserRole.PROVIDER, UserRole.ADMIN , UserRole.CUSTOMER),  // ✅ শুধু provider/admin
  mealController.createMeal
);

export const mealRouter = router;
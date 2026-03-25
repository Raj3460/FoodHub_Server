import { Request, Response } from "express";
import { mealService } from "./meal.service";

export const mealController = {
  // ✅ meal creation controller
  createMeal: async (req: Request, res: Response) => {
    try {
      
      const meal = await mealService.createMeal(req.body);
      //  console.log("req.body:", req.body);

      res.status(201).json({
        success: true,
        data: meal,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to create meal",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  // get all meals
  getAllMeals: async (req: Request, res: Response) => {
    try {
      const { search } = req.query;
      // console.log("Query params:", { search });
      const searching = typeof search === "string" ? search : undefined;

   

    const minPrice = req.query.minPrice ? Number(req.query.minPrice as string) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice as string) : undefined;



      const meals = await mealService.getAllMeals({ search: searching , minPrice, maxPrice });
      res.json({
        success: true,
        data: meals,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch meals",
        error: error.message,
      });
    }
  },
};

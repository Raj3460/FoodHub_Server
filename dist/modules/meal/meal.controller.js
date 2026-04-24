"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealController = void 0;
const meal_service_1 = require("./meal.service");
const prisma_1 = require("../../lib/prisma");
exports.mealController = {
    // ✅ meal creation controller
    createMeal: async (req, res) => {
        try {
            const meal = await meal_service_1.mealService.createMeal(req.body);
            //  console.log("req.body:", req.body);
            res.status(201).json({
                success: true,
                data: meal,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Failed to create meal",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    },
    // get all meals
    // getAllMeals: async (req: Request, res: Response) => {
    //   try {
    //     const { search } = req.query;
    //     // console.log("Query params:", { search });
    //     const searching = typeof search === "string" ? search : undefined;
    //     const minPrice = req.query.minPrice
    //       ? Number(req.query.minPrice as string)
    //       : undefined;
    //     const maxPrice = req.query.maxPrice
    //       ? Number(req.query.maxPrice as string)
    //       : undefined;
    //     const meals = await mealService.getAllMeals({
    //       search: searching,
    //       minPrice,
    //       maxPrice,
    //     });
    //     res.json({
    //       success: true,
    //       data: meals,
    //     });
    //   } catch (error: any) {
    //     res.status(500).json({
    //       success: false,
    //       message: "Failed to fetch meals",
    //       error: error.message,
    //     });
    //   }
    // },
    // meal.controller.ts এর getAllMeals
    getAllMeals: async (req, res) => {
        try {
            const params = {};
            if (req.query.search)
                params.search = req.query.search;
            if (req.query.minPrice)
                params.minPrice = Number(req.query.minPrice);
            if (req.query.maxPrice)
                params.maxPrice = Number(req.query.maxPrice);
            if (req.query.categoryId)
                params.categoryId = req.query.categoryId;
            if (req.query.minRating)
                params.minRating = Number(req.query.minRating);
            if (req.query.sort)
                params.sort = req.query.sort;
            const meals = await meal_service_1.mealService.getAllMeals(params);
            res.json({ success: true, data: meals });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Failed to fetch meals" });
        }
    },
    // get meal by id
    getMealById: async (req, res) => {
        try {
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid or missing meal ID" });
            }
            const meal = await meal_service_1.mealService.getMealById(id);
            if (!meal) {
                return res
                    .status(404)
                    .json({ success: false, message: "Meal not found" });
            }
            res.json({ success: true, data: meal });
        }
        catch (e) {
            res.status(404).json({
                error: "Meal not found",
                details: e,
            });
        }
    },
    // PUT /meals/:id
    updateMeal: async (req, res) => {
        try {
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid or missing meal ID" });
            }
            const meal = await meal_service_1.mealService.getMealById(id);
            if (!meal) {
                return res
                    .status(404)
                    .json({ success: false, message: "Meal not found" });
            }
            console.log("1 . Meal.providerId", meal.providerId);
            // Authorization: only owner (provider) or admin can update
            if (req.user?.role === "PROVIDER") {
                const provider = await prisma_1.prisma.provider.findUnique({
                    where: { userId: req.user.id },
                });
                console.log(" 2 .provider", provider);
                if (meal.providerId !== provider?.id) {
                    return res.status(403).json({
                        success: false,
                        message: "You can only update your own meals",
                    });
                }
            }
            const updated = await meal_service_1.mealService.updateMeal(id, req.body);
            res.json({ success: true, data: updated });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to update meal",
                error: error.message,
            });
        }
    },
    // DELETE /meals/:id
    deleteMeal: async (req, res) => {
        try {
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid or missing meal ID" });
            }
            const meal = await meal_service_1.mealService.getMealById(id);
            if (!meal) {
                return res
                    .status(404)
                    .json({ success: false, message: "Meal not found" });
            }
            // Authorization: only owner (provider) or admin can delete
            if (req.user?.role === "PROVIDER") {
                const provider = await prisma_1.prisma.provider.findUnique({
                    where: { userId: req.user.id },
                });
                if (meal.providerId !== provider?.id) {
                    return res.status(403).json({
                        success: false,
                        message: "You can only delete your own meals",
                    });
                }
            }
            await meal_service_1.mealService.deleteMeal(id);
            res.json({ success: true, message: "Meal deleted successfully" });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to delete meal",
                error: error.message,
            });
        }
    },
};
//# sourceMappingURL=meal.controller.js.map
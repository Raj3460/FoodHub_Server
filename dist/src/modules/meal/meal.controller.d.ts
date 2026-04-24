import { Request, Response } from "express";
export declare const mealController: {
    createMeal: (req: Request, res: Response) => Promise<void>;
    getAllMeals: (req: Request, res: Response) => Promise<void>;
    getMealById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};

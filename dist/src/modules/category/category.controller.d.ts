import { Request, Response } from "express";
export declare const categoryController: {
    createCategory: (req: Request, res: Response) => Promise<void>;
    getAllCategories: (req: Request, res: Response) => Promise<void>;
    getCategoryById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};

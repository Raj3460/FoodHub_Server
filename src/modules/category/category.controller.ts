// src/modules/category/category.controller.ts (সংশোধিত)
import { Request, Response } from "express";
import { categoryService } from "./category.service";

export const categoryController = {
  createCategory: async (req: Request, res: Response) => {
    try {
      // Optional: validate req.body here (e.g., with Zod)
      const category = await categoryService.createCategory(req.body);
      res.status(201).json({ success: true, data: category });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to create category",
        error: error.message,
      });
    }
  },

  getAllCategories: async (req: Request, res: Response) => {
    try {
      const search = req.query.search as string | undefined;
      const categories = await categoryService.getAllCategories(search);
      res.json({ success: true, data: categories });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch categories",
        error: error.message,
      });
    }
  },

  getCategoryById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || typeof id !== "string") {
        return res
          .status(400)
          .json({ success: false, message: "Invalid or missing category ID" });
      }
      const category = await categoryService.getCategoryById(id);
      if (!category) {
        return res
          .status(404)
          .json({ success: false, message: "Category not found" });
      }
      res.json({ success: true, data: category });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch category",
        error: error.message,
      });
    }
  },

  updateCategory: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Optional: validate req.body here
      const category = await categoryService.updateCategory(id as string, req.body);
      res.json({ success: true, data: category });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to update category",
        error: error.message,
      });
    }
  },

  deleteCategory: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || typeof id !== "string") {
        return res
          .status(400)
          .json({ success: false, message: "Invalid or missing category ID" });
      }
      await categoryService.deleteCategory(id);
      res.json({ success: true, message: "Category deleted successfully" });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Failed to delete category",
        error: error.message,
      });
    }
  },
};
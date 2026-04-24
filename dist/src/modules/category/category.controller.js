"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const category_service_1 = require("./category.service");
exports.categoryController = {
    // POST /categories (admin only)
    createCategory: async (req, res) => {
        try {
            const category = await category_service_1.categoryService.createCategory(req.body);
            res.status(201).json({ success: true, data: category });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to create category",
                error: error.message,
            });
        }
    },
    // GET /categories (public)
    getAllCategories: async (req, res) => {
        try {
            const search = req.query.search;
            const categories = await category_service_1.categoryService.getAllCategories(search);
            res.json({ success: true, data: categories });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch categories",
                error: error.message,
            });
        }
    },
    // GET /categories/:id (public)
    getCategoryById: async (req, res) => {
        try {
            //       const id = req.params.id as string;
            const { id } = req.params;
            if (!id || typeof id !== "string") {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid or missing category ID" });
            }
            const category = await category_service_1.categoryService.getCategoryById(id);
            if (!category) {
                return res
                    .status(404)
                    .json({ success: false, message: "Category not found" });
            }
            res.json({ success: true, data: category });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch category",
                error: error.message,
            });
        }
    },
    // PUT /categories/:id (admin only)
    updateCategory: async (req, res) => {
        try {
            const id = req.params.id;
            const category = await category_service_1.categoryService.updateCategory(id, req.body);
            res.json({ success: true, data: category });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to update category",
                error: error.message,
            });
        }
    },
    // DELETE /categories/:id (admin only)
    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id;
            if (!id || typeof id !== "string") {
                return res
                    .status(400)
                    .json({ success: false, message: "Invalid or missing category ID" });
            }
            await category_service_1.categoryService.deleteCategory(id);
            res.json({ success: true, message: "Category deleted successfully" });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message || "Failed to delete category",
                error: error.message,
            });
        }
    },
};
//# sourceMappingURL=category.controller.js.map
"use strict";
// src/modules/category/category.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const prisma_1 = require("../../lib/prisma");
// Create category
const createCategory = async (data) => {
    return await prisma_1.prisma.category.create({ data });
};
// Get all categories (with optional search)
const getAllCategories = async (search) => {
    const where = { isActive: true };
    if (search) {
        where.OR = [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
        ];
    }
    return await prisma_1.prisma.category.findMany({
        where,
        orderBy: { displayOrder: "asc" },
        include: {
            _count: { select: { meals: true } },
        },
    });
};
// Get single category by ID
const getCategoryById = async (id) => {
    return await prisma_1.prisma.category.findUnique({
        where: { id },
        include: {
            meals: {
                take: 10,
                orderBy: { createdAt: "desc" },
                include: {
                    provider: { select: { restaurantName: true } },
                },
            },
            _count: { select: { meals: true } },
        },
    });
};
// Update category
const updateCategory = async (id, data) => {
    const updateData = {};
    if (data.name !== undefined)
        updateData.name = data.name;
    if (data.slug !== undefined)
        updateData.slug = data.slug;
    if (data.description !== undefined)
        updateData.description = data.description;
    if (data.icon !== undefined)
        updateData.icon = data.icon;
    if (data.image !== undefined)
        updateData.image = data.image;
    if (data.isActive !== undefined)
        updateData.isActive = data.isActive;
    if (data.displayOrder !== undefined)
        updateData.displayOrder = data.displayOrder;
    return await prisma_1.prisma.category.update({
        where: { id },
        data: updateData,
    });
};
// Delete category
const deleteCategory = async (id) => {
    // Optional: check if any meals are using this category before delete
    const mealCount = await prisma_1.prisma.meal.count({ where: { categoryId: id } });
    if (mealCount > 0) {
        throw new Error("Cannot delete category with associated meals");
    }
    return await prisma_1.prisma.category.delete({ where: { id } });
};
exports.categoryService = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.service.js.map
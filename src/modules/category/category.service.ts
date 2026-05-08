// src/modules/category/category.service.ts (সংশোধিত)
import { Category, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

const createCategory = async (data: Prisma.CategoryCreateInput) => {
  return await prisma.category.create({ data });
};

const getAllCategories = async (search?: string) => {
  const where: any = { isActive: true };
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }
  return await prisma.category.findMany({
    where,
    orderBy: { displayOrder: "asc" },
    include: { _count: { select: { meals: true } } },
  });
};

const getCategoryById = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      meals: {
        take: 10,
        orderBy: { createdAt: "desc" },
        include: { provider: { select: { restaurantName: true } } },
      },
      _count: { select: { meals: true } },
    },
  });
};

// ✅ এখন update টাইপ Prisma.CategoryUpdateInput, undefined ফিল্ড Prisma নিজেই বাদ দেয়
const updateCategory = async (id: string, data: Prisma.CategoryUpdateInput) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

const deleteCategory = async (id: string) => {
  const mealCount = await prisma.meal.count({ where: { categoryId: id } });
  if (mealCount > 0) {
    throw new Error("Cannot delete category with associated meals");
  }
  return await prisma.category.delete({ where: { id } });
};

export const categoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
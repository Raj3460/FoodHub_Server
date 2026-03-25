import { Meal } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// create meal service
const createMeal = async (data: Omit<Meal, "id">) => {
  console.log("service okk");

  const result = await prisma.meal.create({
    data: {
      providerId: data.providerId, // ✅ body থেকে providerId নিবে
      categoryId: data.categoryId,
      name: data.name,
      description: data.description,
      price: data.price,
      discountPrice: data.discountPrice,
      images: data.images || [],
      thumbnail: data.thumbnail,
      ingredients: data.ingredients || [],
      isVegetarian: data.isVegetarian || false,
      isSpicy: data.isSpicy || false,
      preparationTime: data.preparationTime,
      calories: data.calories,
    },
  });

  // console.log(result);
  return result;
};

// get all meals
const getAllMeals = async (payload:
   {
  search?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
}) => {
  const whereCondition: any = {};

  if (payload.search) {
    whereCondition.OR = [
      {
        name: {
          contains: payload.search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: payload.search,
          mode: "insensitive",
        },
      },
    ];
  }

  
  if (payload.minPrice !== undefined || payload.maxPrice !== undefined) {
    whereCondition.price = {
      ...(payload.minPrice !== undefined && { gte: payload.minPrice }),
      ...(payload.maxPrice !== undefined && { lte: payload.maxPrice }),
    };
  }

  const meals = await prisma.meal.findMany({
    where: whereCondition,
  });

  return meals;
};



// get meal by id
const getMealById = async (id: string ) => {
  if (!id) {
    throw new Error("Meal ID is required");
  }
  return await prisma.meal.findUnique({
    where: { id },
    include: {
      provider: true,
      category: true,
      reviews: { take: 10, orderBy: { createdAt: "desc" } },
    },
  });
};


// Update meal (only provided fields)
const updateMeal = async (id: string, data: any) => {
  const updateData: any = {};

  if (data.name !== undefined) updateData.name = data.name;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.price !== undefined) updateData.price = data.price;
  if (data.discountPrice !== undefined) updateData.discountPrice = data.discountPrice;
  if (data.images !== undefined) updateData.images = data.images;
  if (data.thumbnail !== undefined) updateData.thumbnail = data.thumbnail;
  if (data.ingredients !== undefined) updateData.ingredients = data.ingredients;
  if (data.isVegetarian !== undefined) updateData.isVegetarian = data.isVegetarian;
  if (data.isSpicy !== undefined) updateData.isSpicy = data.isSpicy;
  if (data.isAvailable !== undefined) updateData.isAvailable = data.isAvailable;
  if (data.preparationTime !== undefined) updateData.preparationTime = data.preparationTime;
  if (data.calories !== undefined) updateData.calories = data.calories;
  if (data.categoryId !== undefined) updateData.categoryId = data.categoryId;

  return await prisma.meal.update({
    where: { id },
    data: updateData,
  });
};

// Delete meal
const deleteMeal = async (id: string) => {
  return await prisma.meal.delete({
    where: { id },
  });
};

export const mealService = {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
};

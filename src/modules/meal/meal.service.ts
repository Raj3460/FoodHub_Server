import { prisma } from "../../lib/prisma";

// create meal service
const createMeal = async (data: any) => {
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


const getAllMeals = async (payload: {
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

export const mealService = {
  createMeal,
  getAllMeals,
};

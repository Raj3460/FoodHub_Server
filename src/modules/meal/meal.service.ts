import { prisma } from "../../lib/prisma";


// create meal service
const createMeal = async (data: any) => {
  console.log("service okk");
  
  const result = await prisma.meal.create({
    data: {
      providerId: data.providerId,  // ✅ body থেকে providerId নিবে
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
      calories: data.calories
    },
  });
  
  console.log(result);
  return result;
};


// get all meals
const getAllMeals = async (payload: { search?: string | undefined}) => {
  const meals = await prisma.meal.findMany({
//     where: {
//       isAvailable: true,
//     },
//     include: {
//       provider: {
//         select: {
//           restaurantName: true,
//           area: true,
//           rating: true,
//           deliveryFee: true,
//         },
//       },
//       category: {
//         select: { name: true, icon: true },
//       },
//     },

//  where: {
//    OR: [
//      {
//        name: {
//          contains: payload.search as string,
//          mode: "insensitive", // case-insensitive search
//        },
//      },
//      {
//        description: {
//          contains: payload.search as string,
//          mode: "insensitive",
//        },
//      },
//    ],
//  }
  }
);

  return meals;
};

export const mealService = {
  createMeal,
  getAllMeals,
};
import { Prisma } from "../../../generated/prisma/client";
import { CuisineType } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";


// Create provider profile
const createProvider = async (data: Prisma.ProviderCreateInput) => {
  return await prisma.provider.create({
    data
  });
};

// Get all providers (public)
const getAllProviders = async (search?: string) => {
  const where: any = { isApproved: true };

  if (search) {
    where.OR = [
      { restaurantName: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
      { area: { contains: search, mode: "insensitive" } },
    ];
  }

  return await prisma.provider.findMany({
    where,
    select: {
      id: true,
      restaurantName: true,
      description: true,
      city: true,
      area: true,
      cuisineType: true,
      logo: true,
      rating: true,
      deliveryFee: true,
      minOrderAmount: true,
      isOpen: true,
      _count: {
        select: { meals: true },
      },
    },
    orderBy: { rating: "desc" },
  });
};

// Get provider by ID with menu (public)
const getProviderById = async (id: string) => {
  return await prisma.provider.findUnique({
    where: { id },
    include: {
      meals: {
        where: { isAvailable: true },
        orderBy: { createdAt: "desc" },
        include: {
          category: {
            select: { name: true, icon: true },
          },
        },
      },
      _count: {
        select: { meals: true, orders: true },
      },
    },
  });
};

// Get provider by user ID (for logged in provider)
const getProviderByUserId = async (userId: string) => {
  return await prisma.provider.findUnique({
    where: { userId },
    include: {
      meals: {
        orderBy: { createdAt: "desc" },
        include: {
          category: true,
        },
      },
    },
  });
};

// Update provider profile
const updateProvider = async (userId: string, data: any) => {
  const updateData: any = {};
  if (data.restaurantName !== undefined) updateData.restaurantName = data.restaurantName;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.contactPhone !== undefined) updateData.contactPhone = data.contactPhone;
  if (data.contactEmail !== undefined) updateData.contactEmail = data.contactEmail;
  if (data.address !== undefined) updateData.address = data.address;
  if (data.city !== undefined) updateData.city = data.city;
  if (data.area !== undefined) updateData.area = data.area;
  if (data.cuisineType !== undefined) updateData.cuisineType = data.cuisineType;
  if (data.isOpen !== undefined) updateData.isOpen = data.isOpen;
  if (data.deliveryFee !== undefined) updateData.deliveryFee = data.deliveryFee;
  if (data.minOrderAmount !== undefined) updateData.minOrderAmount = data.minOrderAmount;
  if (data.logo !== undefined) updateData.logo = data.logo;

  return await prisma.provider.update({
    where: { userId },
    data: updateData,
  });
};

export const providerService = {
  createProvider,
  getAllProviders,
  getProviderById,
  getProviderByUserId,
  updateProvider,
};
// backend/src/modules/user/user.service.ts
import { prisma } from "../../lib/prisma";

export const userService = {
  /**
   * Get user by ID
   */
  getUserById: async (userId: string) => {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        emailVerified: true,
        image: true,
        createdAt: true,
      },
    });
  },

  /**
   * Update user profile (name and phone)
   */
  updateProfile: async (userId: string, data: { name?: string; phone?: string }) => {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name?.trim(),
        phone: data.phone?.trim() || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        emailVerified: true,
        image: true,
      },
    });
  },
};
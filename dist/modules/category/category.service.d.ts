import { Prisma } from "../../../generated/prisma/client";
export declare const categoryService: {
    createCategory: (data: Prisma.CategoryCreateInput) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        slug: string;
        icon: string | null;
        isActive: boolean;
        displayOrder: number;
    }>;
    getAllCategories: (search?: string) => Promise<({
        _count: {
            meals: number;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        slug: string;
        icon: string | null;
        isActive: boolean;
        displayOrder: number;
    })[]>;
    getCategoryById: (id: string) => Promise<{
        _count: {
            meals: number;
        };
        meals: ({
            provider: {
                restaurantName: string;
            };
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            categoryId: string;
            description: string | null;
            price: number;
            discountPrice: number | null;
            images: string[];
            thumbnail: string | null;
            ingredients: string[];
            isVegetarian: boolean;
            isSpicy: boolean;
            isAvailable: boolean;
            preparationTime: number | null;
            calories: number | null;
            rating: number;
            totalReviews: number;
            totalOrders: number;
            viewCount: number;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        slug: string;
        icon: string | null;
        isActive: boolean;
        displayOrder: number;
    }>;
    updateCategory: (id: string, data: Prisma.CategoryCreateInput) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        slug: string;
        icon: string | null;
        isActive: boolean;
        displayOrder: number;
    }>;
    deleteCategory: (id: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        description: string | null;
        slug: string;
        icon: string | null;
        isActive: boolean;
        displayOrder: number;
    }>;
};

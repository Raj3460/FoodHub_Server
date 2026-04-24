export declare const cartService: {
    getCart: (customerId: string) => Promise<{
        provider: {
            restaurantName: string;
            deliveryFee: number;
            minOrderAmount: number;
        };
        items: ({
            meal: {
                provider: {
                    restaurantName: string;
                    deliveryFee: number;
                    minOrderAmount: number;
                };
                category: {
                    name: string;
                    icon: string;
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
            };
        } & {
            id: string;
            createdAt: Date;
            mealId: string;
            cartId: string;
            quantity: number;
            specialInstructions: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string | null;
        customerId: string;
    }>;
    addToCart: (customerId: string, data: {
        mealId: string;
        quantity: number;
        specialInstructions?: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        mealId: string;
        cartId: string;
        quantity: number;
        specialInstructions: string | null;
    }>;
    updateCartItem: (customerId: string, itemId: string, quantity: number) => Promise<{
        id: string;
        createdAt: Date;
        mealId: string;
        cartId: string;
        quantity: number;
        specialInstructions: string | null;
    }>;
    removeFromCart: (customerId: string, itemId: string) => Promise<{
        id: string;
        createdAt: Date;
        mealId: string;
        cartId: string;
        quantity: number;
        specialInstructions: string | null;
    }>;
    clearCart: (customerId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string | null;
        customerId: string;
    }>;
    getCartSummary: (customerId: string) => Promise<{
        items: any[];
        subtotal: number;
        deliveryFee: number;
        total: number;
        provider: any;
        cartId?: undefined;
        providerId?: undefined;
        minOrderAmount?: undefined;
        meetsMinOrder?: undefined;
    } | {
        cartId: string;
        providerId: string;
        provider: {
            restaurantName: string;
            deliveryFee: number;
            minOrderAmount: number;
        };
        items: {
            id: string;
            mealId: string;
            name: string;
            price: number;
            quantity: number;
            subtotal: number;
            specialInstructions: string;
            image: string;
        }[];
        subtotal: number;
        deliveryFee: number;
        minOrderAmount: number;
        total: number;
        meetsMinOrder: boolean;
    }>;
};

export declare const reviewService: {
    createReview: (customerId: string, data: {
        orderId: string;
        mealId: string;
        rating: number;
        title?: string;
        comment?: string;
    }) => Promise<{
        meal: {
            name: string;
            rating: number;
            totalReviews: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        customerId: string;
        mealId: string;
        orderId: string;
        title: string | null;
        comment: string | null;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string | null;
        respondedAt: Date | null;
    }>;
    getMealReviews: (mealId: string, limit?: number) => Promise<{
        id: string;
        createdAt: Date;
        rating: number;
        title: string;
        comment: string;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string;
        respondedAt: Date;
    }[]>;
    getMyReviews: (customerId: string) => Promise<({
        meal: {
            name: string;
            thumbnail: string;
        };
        order: {
            orderNumber: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        customerId: string;
        mealId: string;
        orderId: string;
        title: string | null;
        comment: string | null;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string | null;
        respondedAt: Date | null;
    })[]>;
    updateReview: (reviewId: string, customerId: string, data: {
        rating?: number;
        title?: string;
        comment?: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        customerId: string;
        mealId: string;
        orderId: string;
        title: string | null;
        comment: string | null;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string | null;
        respondedAt: Date | null;
    }>;
    deleteReview: (reviewId: string, customerId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        customerId: string;
        mealId: string;
        orderId: string;
        title: string | null;
        comment: string | null;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string | null;
        respondedAt: Date | null;
    }>;
    respondToReview: (reviewId: string, providerId: string, response: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        customerId: string;
        mealId: string;
        orderId: string;
        title: string | null;
        comment: string | null;
        isVerifiedPurchase: boolean;
        customerName: string;
        providerResponse: string | null;
        respondedAt: Date | null;
    }>;
};

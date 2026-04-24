import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Provider: "Provider";
    readonly Category: "Category";
    readonly Meal: "Meal";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Review: "Review";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Favorite: "Favorite";
    readonly Notification: "Notification";
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProviderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly restaurantName: "restaurantName";
    readonly branch: "branch";
    readonly description: "description";
    readonly contactPhone: "contactPhone";
    readonly contactEmail: "contactEmail";
    readonly address: "address";
    readonly city: "city";
    readonly area: "area";
    readonly isOpen: "isOpen";
    readonly openingTime: "openingTime";
    readonly closingTime: "closingTime";
    readonly weeklyOff: "weeklyOff";
    readonly cuisineType: "cuisineType";
    readonly deliveryTimeMin: "deliveryTimeMin";
    readonly deliveryTimeMax: "deliveryTimeMax";
    readonly deliveryFee: "deliveryFee";
    readonly minOrderAmount: "minOrderAmount";
    readonly logo: "logo";
    readonly coverImage: "coverImage";
    readonly isApproved: "isApproved";
    readonly isFeatured: "isFeatured";
    readonly rating: "rating";
    readonly totalReviews: "totalReviews";
    readonly viewCount: "viewCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon: "icon";
    readonly image: "image";
    readonly isActive: "isActive";
    readonly displayOrder: "displayOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const MealScalarFieldEnum: {
    readonly id: "id";
    readonly providerId: "providerId";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly discountPrice: "discountPrice";
    readonly images: "images";
    readonly thumbnail: "thumbnail";
    readonly ingredients: "ingredients";
    readonly isVegetarian: "isVegetarian";
    readonly isSpicy: "isSpicy";
    readonly isAvailable: "isAvailable";
    readonly preparationTime: "preparationTime";
    readonly calories: "calories";
    readonly rating: "rating";
    readonly totalReviews: "totalReviews";
    readonly totalOrders: "totalOrders";
    readonly viewCount: "viewCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly customerId: "customerId";
    readonly providerId: "providerId";
    readonly customerName: "customerName";
    readonly customerPhone: "customerPhone";
    readonly customerEmail: "customerEmail";
    readonly deliveryAddress: "deliveryAddress";
    readonly deliveryArea: "deliveryArea";
    readonly deliveryInstructions: "deliveryInstructions";
    readonly deliveryLat: "deliveryLat";
    readonly deliveryLng: "deliveryLng";
    readonly subtotal: "subtotal";
    readonly deliveryFee: "deliveryFee";
    readonly discount: "discount";
    readonly totalAmount: "totalAmount";
    readonly paymentMethod: "paymentMethod";
    readonly paymentStatus: "paymentStatus";
    readonly status: "status";
    readonly placedAt: "placedAt";
    readonly confirmedAt: "confirmedAt";
    readonly preparingAt: "preparingAt";
    readonly readyAt: "readyAt";
    readonly deliveredAt: "deliveredAt";
    readonly cancelledAt: "cancelledAt";
    readonly cancellationReason: "cancellationReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly mealId: "mealId";
    readonly mealName: "mealName";
    readonly mealPrice: "mealPrice";
    readonly quantity: "quantity";
    readonly subtotal: "subtotal";
    readonly specialInstructions: "specialInstructions";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly mealId: "mealId";
    readonly orderId: "orderId";
    readonly rating: "rating";
    readonly title: "title";
    readonly comment: "comment";
    readonly isVerifiedPurchase: "isVerifiedPurchase";
    readonly customerName: "customerName";
    readonly providerResponse: "providerResponse";
    readonly respondedAt: "respondedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly providerId: "providerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly mealId: "mealId";
    readonly quantity: "quantity";
    readonly specialInstructions: "specialInstructions";
    readonly createdAt: "createdAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const FavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly mealId: "mealId";
    readonly createdAt: "createdAt";
};
export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly message: "message";
    readonly data: "data";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
    readonly readAt: "readAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly role: "role";
    readonly phone: "phone";
    readonly status: "status";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

export declare const OrderStatus: {
    readonly placed: "placed";
    readonly preparing: "preparing";
    readonly ready: "ready";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly pending: "pending";
    readonly paid: "paid";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentMethod: {
    readonly cash_on_delivery: "cash_on_delivery";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const CuisineType: {
    readonly Bengali: "Bengali";
    readonly Chinese: "Chinese";
    readonly Indian: "Indian";
    readonly Thai: "Thai";
    readonly Italian: "Italian";
    readonly Mexican: "Mexican";
    readonly Arabic: "Arabic";
    readonly Continental: "Continental";
    readonly FastFood: "FastFood";
    readonly Desserts: "Desserts";
    readonly Beverages: "Beverages";
};
export type CuisineType = (typeof CuisineType)[keyof typeof CuisineType];

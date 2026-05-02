"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_1 = require("better-auth/node");
const auth_1 = require("./lib/auth");
const cors_1 = __importDefault(require("cors"));
const meal_router_1 = require("./modules/meal/meal.router");
const category_router_1 = require("./modules/category/category.router");
const provider_router_1 = require("./modules/provider/provider.router");
const cart_router_1 = require("./modules/cart/cart.router");
const order_router_1 = require("./modules/order/order.router");
const review_router_1 = require("./modules/review/review.router");
const admin_router_1 = require("./modules/admin/admin.router");
const app = (0, express_1.default)();
app.set("trust proxy", true);
// ✅ CORS আগে, json এর আগে
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://food-hub-client-nu.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie"],
    exposedHeaders: ["Set-Cookie"],
}));
app.use(express_1.default.json());
// ✅ better-auth handler
app.all('/api/auth/*splat', (0, node_1.toNodeHandler)(auth_1.auth));
//todo: if webiste development is complete then i i can add this in my free time
// app.use('/api/meals', mealRouter);
// app.use('/api/categories', categoryRouter);
// app.use('/api/providers', providerRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/orders', orderRouter);
// app.use('/api/reviews', reviewRouter);
// app.use('/api/admin', adminRouter);
// app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/meals', meal_router_1.mealRouter);
app.use('/categories', category_router_1.categoryRouter);
app.use('/providers', provider_router_1.providerRouter);
app.use('/cart', cart_router_1.cartRouter);
app.use('/orders', order_router_1.orderRouter);
app.use('/reviews', review_router_1.reviewRouter);
app.use('/admin', admin_router_1.adminRouter);
app.get("/", (req, res) => {
    res.send("FoodHub Server Running! 🍱");
});
app.get('/check-session', async (req, res) => {
    const session = await auth_1.auth.api.getSession({ headers: req.headers });
    res.json({ session });
});
exports.default = app;
//# sourceMappingURL=app.js.map
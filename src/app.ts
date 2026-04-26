import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { mealRouter } from "./modules/meal/meal.router";
import { categoryRouter } from "./modules/category/category.router";
import { providerRouter } from "./modules/provider/provider.router";
import { cartRouter } from "./modules/cart/cart.router";
import { orderRouter } from "./modules/order/order.router";
import { reviewRouter } from "./modules/review/review.router";
import { adminRouter } from "./modules/admin/admin.router";

const app: Application = express();

// ✅ CORS আগে, json এর আগে
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://food-hub-client-nu.vercel.app",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
}));

app.use(express.json());

// ✅ better-auth handler
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use('/api/meals', mealRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/providers', providerRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/admin', adminRouter);

app.get("/", (req, res) => {
  res.send("FoodHub Server Running! 🍱");
});

app.get('/check-session', async (req, res) => {
  const session = await auth.api.getSession({ headers: req.headers as any });
  res.json({ session });
});

export default app;
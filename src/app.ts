// src/app.ts

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
app.use(express.json());
app.use(cors({
       origin: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
       credentials: true,
}));


app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/meals', mealRouter)
app.use('/categories', categoryRouter)
app.use('/providers', providerRouter)
app.use('/cart', cartRouter)
app.use('/orders', orderRouter )
app.use('/reviews', reviewRouter)
app.use('/admin', adminRouter)

app.get("/", (req, res) => {
       res.send("Hello, World!");
});
app.get('/check-session', async (req, res) => {
  const session = await auth.api.getSession({ headers: req.headers as any });
  res.json({ session });
});





export default app;
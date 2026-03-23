// src/app.ts

import express, { Application } from "express";

import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { mealRouter } from "./modules/meal/meal.router";

const app: Application = express();
app.use(express.json());
app.use(cors({
       origin: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
       credentials: true,
}));


app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/meals', mealRouter)

app.get("/", (req, res) => {
       res.send("Hello, World! baby");
});
app.get('/check-session', async (req, res) => {
  const session = await auth.api.getSession({ headers: req.headers as any });
  res.json({ session });
});





export default app;
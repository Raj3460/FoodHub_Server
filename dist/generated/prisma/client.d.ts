import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Providers
 * const providers = await prisma.provider.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Provider
 *
 */
export type Provider = Prisma.ProviderModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model Meal
 *
 */
export type Meal = Prisma.MealModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model OrderItem
 *
 */
export type OrderItem = Prisma.OrderItemModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model Cart
 *
 */
export type Cart = Prisma.CartModel;
/**
 * Model CartItem
 *
 */
export type CartItem = Prisma.CartItemModel;
/**
 * Model Favorite
 *
 */
export type Favorite = Prisma.FavoriteModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;

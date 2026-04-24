import { Request, Response } from "express";
export declare const cartController: {
    getCart: (req: Request, res: Response) => Promise<void>;
    getCartSummary: (req: Request, res: Response) => Promise<void>;
    addToCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateCartItem: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removeFromCart: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    clearCart: (req: Request, res: Response) => Promise<void>;
};

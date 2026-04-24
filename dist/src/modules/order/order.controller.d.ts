import { Request, Response } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyOrders: (req: Request, res: Response) => Promise<void>;
    getMyOrderById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    cancelOrder: (req: Request, res: Response) => Promise<void>;
    getProviderOrders: (req: Request, res: Response) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
};

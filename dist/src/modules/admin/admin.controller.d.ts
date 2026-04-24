import { Request, Response } from "express";
export declare const adminController: {
    getAllUsers: (req: Request, res: Response) => Promise<void>;
    updateUserStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllProviders: (req: Request, res: Response) => Promise<void>;
    approveProvider: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    toggleFeatured: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getDashboardStats: (req: Request, res: Response) => Promise<void>;
};

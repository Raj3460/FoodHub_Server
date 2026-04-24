import { Request, Response } from "express";
export declare const providerController: {
    createProviderProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyProviderProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateMyProviderProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllProviders: (req: Request, res: Response) => Promise<void>;
    getProviderById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    approveProvider: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllProvidersForAdmin: (req: Request, res: Response) => Promise<void>;
    getStats: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMyMeals: (req: Request, res: Response) => Promise<void>;
};

import { Request, Response } from "express";
export declare const reviewController: {
    createReview: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMealReviews: (req: Request, res: Response) => Promise<void>;
    getMyReviews: (req: Request, res: Response) => Promise<void>;
    updateReview: (req: Request, res: Response) => Promise<void>;
    deleteReview: (req: Request, res: Response) => Promise<void>;
    respondToReview: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};

import { NextFunction, Request, Response } from "express";
export declare enum UserRole {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN",
    PROVIDER = "PROVIDER"
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
                emailVerified: boolean;
            };
        }
    }
}
declare const auth: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export default auth;

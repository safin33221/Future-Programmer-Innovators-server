import type { Request, Response, NextFunction } from "express";
import { type JwtPayload } from "jsonwebtoken";
export interface AuthRequest extends Request {
    user?: JwtPayload;
}
export declare const auth: (...requiredRoles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.d.ts.map
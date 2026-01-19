import { type JwtPayload, type Secret } from 'jsonwebtoken';
export declare const jwtHelper: {
    generateToken: (payload: any, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: string) => JwtPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map
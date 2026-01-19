export declare const AuthService: {
    login: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../../prisma/generated/prisma/enums").UserRole;
            isVerified: boolean;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            lastLoginAt: Date | null;
            passwordChangedAt: Date | null;
            emailVerifiedAt: Date | null;
            isDelete: boolean;
            deletedAt: Date | null;
        };
        accessToken: string;
        refreshToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map
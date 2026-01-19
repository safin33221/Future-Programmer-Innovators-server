import { type IOptions } from "../../helper/paginationHelper";
export declare const SoftDelete: (id: string) => Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
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
}>;
export declare const UserService: {
    registerAsGuest: (payload: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) => Promise<{
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
    }>;
    getAllUsers: (params: any, options: IOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../../../prisma/generated/prisma/enums").UserRole;
            isVerified: boolean;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    getMe: (email: string) => Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: import("../../../../prisma/generated/prisma/enums").UserRole;
        isVerified: boolean;
        isActive: boolean;
        profile: any;
        createdAt: Date;
        updatedAt: Date;
    }>;
    SoftDelete: (id: string) => Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string;
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
    }>;
};
//# sourceMappingURL=user.service.d.ts.map
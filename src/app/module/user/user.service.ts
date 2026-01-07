
import bcrypt from "bcrypt";
import { prisma } from "../../../lib/prisma";
import envConfig from "../../../config/env.config";

type GetAllUsersParams = {
    searchTerm?: string | undefined;
    role?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    sortBy?: string | undefined;
    sortOrder?: "asc" | "desc" | undefined;
};

const registerAsGuest = async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) => {
    // 🔐 Check email already exists
    const existingUser = await prisma.user.findUnique({
        where: { email: payload.email },
    });

    if (existingUser) {
        throw new Error("Email already registered");
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(payload.password, Number(envConfig.Salt_rounds));

    // ✅ Create user securely
    const result = await prisma.user.create({
        data: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: hashedPassword,
            role: "GUEST",
        },
    });

    // ❌ Never return password
    const { password, ...safeUser } = result;
    return safeUser;
};

const getAllUsers = async (params: GetAllUsersParams) => {
    const {
        searchTerm,
        role,
        page = 1,
        limit = 10,
        sortBy = "createdAt",
        sortOrder = "desc",
    } = params;

    const skip = (page - 1) * limit;

    const andConditions: any[] = [];

    /* 🔍 Search */
    if (searchTerm) {
        andConditions.push({
            OR: [
                { firstName: { contains: searchTerm, mode: "insensitive" } },
                { lastName: { contains: searchTerm, mode: "insensitive" } },
                { email: { contains: searchTerm, mode: "insensitive" } },
            ],
        });
    }

    /* 🎭 Role filter */
    if (role) {
        andConditions.push({ role });
    }

    const whereCondition =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const users = await prisma.user.findMany({
        where: whereCondition,
        skip,
        take: limit,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: {
            [sortBy]: sortOrder,
        },
    });

    const total = await prisma.user.count({
        where: whereCondition,
    });

    return {
        meta: {
            page,
            limit,
            total,
        },
        data: users,
    };
};



export const UserService = {
    registerAsGuest,
    getAllUsers
};

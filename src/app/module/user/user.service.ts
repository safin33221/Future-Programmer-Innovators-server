
import bcrypt from "bcrypt";
import { prisma } from "../../../lib/prisma";
import envConfig from "../../../config/env.config";



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

export const UserService = {
    registerAsGuest,
};

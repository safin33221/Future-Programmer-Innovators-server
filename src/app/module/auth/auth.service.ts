import bcrypt from "bcrypt";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { prisma } from "../../../lib/prisma";
import envConfig from "../../../config/env.config";

const login = async (payload: { email: string; password: string }) => {
    // 1️⃣ Find user
    const user = await prisma.user.findUnique({
        where: { email: payload.email },
    });

    if (!user) {
        throw new Error("Invalid email or Password");
    }

    // 2️⃣ Check account status
    if (!user.isActive) {
        throw new Error("Account is disabled");
    }

    // 3️⃣ Compare password
    const isPasswordMatch = await bcrypt.compare(
        payload.password,
        user.password
    );

    if (!isPasswordMatch) {
        throw new Error("Invalid  password");
    }

  
    const { password, ...safeUser } = user;

    // 6️⃣ Return response
    return {
        user: safeUser,
      
    };
};

export const AuthService = {
    login,
};

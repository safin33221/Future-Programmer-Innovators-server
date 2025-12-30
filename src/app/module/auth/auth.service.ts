import bcrypt from "bcrypt";
import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";
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
    // 4️⃣ Generate tokens
    const accessTokenOptions: SignOptions = {
        expiresIn: envConfig.JWT.JWT_ACCESS_EXPIRES_IN as number,
    };

    const refreshTokenOptions: SignOptions = {
        expiresIn: envConfig.JWT.JWT_REFRESH_EXPIRES_IN as number,
    };

    const accessToken = jwt.sign(
        {
            userId: user.id,
            role: user.role,
            email: user.email,
        },
        envConfig.JWT.JWT_ACCESS_SECRET,
        accessTokenOptions
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        envConfig.JWT.JWT_REFRESH_SECRET,
        refreshTokenOptions
    );

    // 5️⃣ Remove sensitive fields


    const { password, ...safeUser } = user;

    // 6️⃣ Return response
    return {
        user: safeUser,
        accessToken,
        refreshToken

    };
};

export const AuthService = {
    login,
};

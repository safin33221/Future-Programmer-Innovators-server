"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../../../lib/prisma");
const env_config_1 = __importDefault(require("../../../config/env.config"));
const jwtHelper_1 = require("../../helper/jwtHelper");
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // 1️⃣ Find user
    const user = yield prisma_1.prisma.user.findUnique({
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
    const isPasswordMatch = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid password");
    }
    const JwtPayload = {
        userID: user.id,
        email: user.email,
        role: user.role
    };
    const accessToken = jwtHelper_1.jwtHelper.generateToken(JwtPayload, env_config_1.default.JWT.JWT_ACCESS_SECRET, env_config_1.default.JWT.JWT_ACCESS_EXPIRES_IN);
    const refreshToken = jwtHelper_1.jwtHelper.generateToken(JwtPayload, env_config_1.default.JWT.JWT_REFRESH_SECRET, env_config_1.default.JWT.JWT_REFRESH_EXPIRES_IN);
    // 5️⃣ Remove sensitive fields
    const { password } = user, safeUser = __rest(user, ["password"]);
    // 6️⃣ Return response
    return {
        user: safeUser,
        accessToken,
        refreshToken
    };
});
exports.AuthService = {
    login,
};
//# sourceMappingURL=auth.service.js.map
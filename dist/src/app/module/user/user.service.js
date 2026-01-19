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
exports.UserService = exports.SoftDelete = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../../../lib/prisma");
const env_config_1 = __importDefault(require("../../../config/env.config"));
const paginationHelper_1 = require("../../helper/paginationHelper");
const user_constant_1 = require("./user.constant");
const registerAsGuest = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // 🔐 Check email already exists
    const existingUser = yield prisma_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (existingUser) {
        throw new Error("Email already registered");
    }
    // 🔐 Hash password
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, Number(env_config_1.default.Salt_rounds));
    // ✅ Create user securely
    const result = yield prisma_1.prisma.user.create({
        data: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: hashedPassword,
            role: "GUEST",
        },
    });
    // ❌ Never return password
    const { password } = result, safeUser = __rest(result, ["password"]);
    return safeUser;
});
const getAllUsers = (params, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    console.log(filterData);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: user_constant_1.userSearchableFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive"
                }
            }))
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key]
                }
            }))
        });
    }
    const whereConditions = andConditions.length > 0 ? {
        AND: andConditions
    } : {};
    const users = yield prisma_1.prisma.user.findMany({
        where: whereConditions,
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
            isActive: true,
            isVerified: true
        },
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const total = yield prisma_1.prisma.user.count({
        where: whereConditions,
    });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: users,
    };
});
const getMe = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findUnique({
        where: { email },
        include: {
            admin: true,
            mentor: true,
            moderator: true,
            member: true
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    let profile = null;
    switch (user.role) {
        case "ADMIN": {
            profile = user.admin;
        }
        case "MEMBER": {
            profile = user.member;
        }
        case "MODERATOR": {
            profile = user.moderator;
        }
    }
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        isActive: user.isActive,
        profile,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
});
const SoftDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.user.update({
        where: { id },
        data: {
            isDelete: true,
            isActive: false,
            deletedAt: new Date(),
        },
    });
});
exports.SoftDelete = SoftDelete;
exports.UserService = {
    registerAsGuest,
    getAllUsers,
    getMe,
    SoftDelete: exports.SoftDelete
};
//# sourceMappingURL=user.service.js.map
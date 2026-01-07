import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";

import sendResponse from "../../shared/sendResponse";
import { statusCode } from "../../shared/statusCode";
import { UserService } from "./user.service";


/* =========================
   Register User
========================= */
const registerAsGuest = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.registerAsGuest(req.body)

    sendResponse(res, {
        status: statusCode.OK,
        success: true,
        message: "registration successful",
        data: result
    })
})


/* =========================
   Get All Users
========================= */

const getAllUsers = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await UserService.getAllUsers({
            searchTerm: req.query.searchTerm as string,
            role: req.query.role as string,
            page: req.query.page ? Number(req.query.page) : undefined,
            limit: req.query.limit ? Number(req.query.limit) : undefined,
            sortBy: req.query.sortBy as string,
            sortOrder: req.query.sortOrder as "asc" | "desc",
        });

        sendResponse(res, {
            status: statusCode.OK,
            success: true,
            message: "users retrieved successfully",
            data: result,
        });
    }
);


export const userController = {
    registerAsGuest,
    getAllUsers,
};

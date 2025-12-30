import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../shared/sendResponse";
import { statusCode } from "../../shared/statusCode";

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await AuthService.login(req.body)
    sendResponse(res, {
        status: statusCode.OK,
        success: true,
        message: "login successful",
        data: result
    })
})

export const authController = {
    login
}
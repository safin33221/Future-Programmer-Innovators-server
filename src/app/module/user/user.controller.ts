import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";

import sendResponse from "../../shared/sendResponse";
import { statusCode } from "../../shared/statusCode";
import { UserService } from "./user.service";

const registerAsGuest = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.registerAsGuest(req.body)
   
    sendResponse(res, {
        status: statusCode.OK,
        success: true,
        message: "registration successful",
        data: result
    })
})

export const userController = {
    registerAsGuest
}
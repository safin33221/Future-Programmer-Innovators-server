import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { OTPService } from "./otp.service";
import sendResponse from "../../shared/sendResponse";

const sendOTP = catchAsync(async (req: Request, res: Response) => {
    const { email, name } = req.body
    await OTPService.sendOtp(email, name)
    sendResponse(res, {
        status: 200,
        success: true,
        message: "OTP sent successfully",
        data: null,
    });
})


export const OTPController ={
    sendOTP
}
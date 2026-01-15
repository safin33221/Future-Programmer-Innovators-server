import express, { Router } from 'express';
import { OTPController } from './otp.controller';
const router = express.Router()

router.post("/send", OTPController.sendOTP);
router.post("/verify", OTPController.verifyOtp);

export const OtpRoute: Router = router
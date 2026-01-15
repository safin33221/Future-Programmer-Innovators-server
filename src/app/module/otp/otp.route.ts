import express, { Router } from 'express';
import { OTPController } from './otp.controller';
const router = express.Router()

router.post("/send", OTPController.sendOTP);

export const OtpRoute: Router = router
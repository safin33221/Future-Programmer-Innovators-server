import crypto from "crypto";
import { prisma } from "../../../lib/prisma";
import { redisClient } from "../../../config/redis.config";
import { sendEmail } from "../../util/sendEmail";
const OTP_EXPIRATION = 2 * 60 // 2minute
const generateOtp = (length = 6) => {
    const otp = crypto.randomInt(10 ** (length - 1), 10 ** length).toString()
    return otp
}

const sendOtp = async (email: string, name: string) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: email
        }
    })

    if (user.isVerified) {
        throw new Error("You are already verified")
    }

    const otp = generateOtp();
    const redisKey = `otp:${email}`

    await redisClient.set(redisKey, otp, {
        expiration: {
            type: "EX",
            value: OTP_EXPIRATION
        }
    })
    console.log({ otp });
    console.log({ email, name });

    await sendEmail({
        to: email,
        subject: "Your OTP Code",
        templateName: "otp",
        templateData: {
            name: name,
            otp: otp 
        }
    })
}


export const OTPService = {
    sendOtp
}
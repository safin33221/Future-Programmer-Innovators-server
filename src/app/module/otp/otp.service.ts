import crypto from "crypto";
import { prisma } from "../../../lib/prisma";
import { redisClient } from "../../../config/redis.config";
import { sendEmail } from "../../util/sendEmail";

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

const OTP_LENGTH = 6;
const OTP_EXPIRATION_SECONDS = 2 * 60; // 2 minutes
const OTP_REDIS_PREFIX = "otp";

/* -------------------------------------------------------------------------- */
/*                               Helper Methods                               */
/* -------------------------------------------------------------------------- */

const generateOtp = (length: number = OTP_LENGTH): string => {
  return crypto
    .randomInt(10 ** (length - 1), 10 ** length)
    .toString();
};

const getRedisKey = (email: string): string => {
  return `${OTP_REDIS_PREFIX}:${email}`;
};

/* -------------------------------------------------------------------------- */
/*                                Service Logic                               */
/* -------------------------------------------------------------------------- */

const sendOtp = async (email: string, name: string): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Email is not registered");
  }

  if (user.isVerified) {
    throw new Error("You are already verified");
  }

  const otp = generateOtp();
  const redisKey = getRedisKey(email);

  await redisClient.set(redisKey, otp, {
    expiration: {
      type: "EX",
      value: OTP_EXPIRATION_SECONDS,
    },
  });

  await sendEmail({
    to: email,
    subject: "Your OTP Code | Future Programmer Innovators Club",
    templateName: "otp",
    templateData: {
      name,
      otp,
    },
  });
};

const verifyOtp = async (email: string, otp: string): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.isVerified) {
    throw new Error("You are already verified");
  }

  const redisKey = getRedisKey(email);
  const savedOtp = await redisClient.get(redisKey);

  if (!savedOtp || savedOtp !== otp) {
    throw new Error("Invalid or expired OTP");
  }

  await Promise.all([
    prisma.user.update({
      where: { email },
      data: { isVerified: true },
    }),
    redisClient.del([redisKey]),
  ]);
};

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const OTPService = {
  sendOtp,
  verifyOtp,
};

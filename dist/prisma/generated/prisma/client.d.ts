import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Enrollments
 * const enrollments = await prisma.enrollment.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Enrollment
 *
 */
export type Enrollment = Prisma.EnrollmentModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model EventRegistration
 *
 */
export type EventRegistration = Prisma.EventRegistrationModel;
/**
 * Model EventFeedback
 *
 */
export type EventFeedback = Prisma.EventFeedbackModel;
/**
 * Model Post
 *
 */
export type Post = Prisma.PostModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model ModeratorPermission
 *
 */
export type ModeratorPermission = Prisma.ModeratorPermissionModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Admin
 *
 */
export type Admin = Prisma.AdminModel;
/**
 * Model Member
 *
 */
export type Member = Prisma.MemberModel;
/**
 * Model Mentor
 *
 */
export type Mentor = Prisma.MentorModel;
/**
 * Model Moderator
 *
 */
export type Moderator = Prisma.ModeratorModel;
//# sourceMappingURL=client.d.ts.map
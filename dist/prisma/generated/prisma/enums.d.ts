export declare const UserRole: {
    readonly GUEST: "GUEST";
    readonly ADMIN: "ADMIN";
    readonly MODERATOR: "MODERATOR";
    readonly MEMBER: "MEMBER";
    readonly MENTOR: "MENTOR";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly UPCOMING: "UPCOMING";
    readonly ONGOING: "ONGOING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const RegistrationStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
    readonly ATTENDED: "ATTENDED";
    readonly NO_SHOW: "NO_SHOW";
    readonly WHITELISTED: "WHITELISTED";
    readonly REFUNDED: "REFUNDED";
    readonly EXPIRED: "EXPIRED";
};
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];
export declare const PaymentType: {
    readonly COURSE_ENROLLMENT: "COURSE_ENROLLMENT";
    readonly EVENT_REGISTRATION: "EVENT_REGISTRATION";
    readonly MEMBERSHIP_SUBSCRIPTION: "MEMBERSHIP_SUBSCRIPTION";
    readonly DONATION: "DONATION";
    readonly PRODUCT_PURCHASE: "PRODUCT_PURCHASE";
    readonly OTHER: "OTHER";
};
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];
export declare const PaymentMethod: {
    readonly CREDIT_CARD: "CREDIT_CARD";
    readonly DEBIT_CARD: "DEBIT_CARD";
    readonly PAYPAL: "PAYPAL";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly CASH: "CASH";
    readonly MOBILE_WALLET: "MOBILE_WALLET";
    readonly OTHER: "OTHER";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
    readonly PARTIALLY_REFUNDED: "PARTIALLY_REFUNDED";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const EnrollmentStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly DROPPED: "DROPPED";
    readonly SUSPENDED: "SUSPENDED";
};
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];
export declare const AdminLevel: {
    readonly BASIC: "BASIC";
    readonly SUPER: "SUPER";
    readonly OWNER: "OWNER";
};
export type AdminLevel = (typeof AdminLevel)[keyof typeof AdminLevel];
//# sourceMappingURL=enums.d.ts.map
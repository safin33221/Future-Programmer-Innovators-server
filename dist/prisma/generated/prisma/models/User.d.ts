import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    isVerified: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    lastLoginAt: Date | null;
    passwordChangedAt: Date | null;
    emailVerifiedAt: Date | null;
    isDelete: boolean | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    isVerified: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    lastLoginAt: Date | null;
    passwordChangedAt: Date | null;
    emailVerifiedAt: Date | null;
    isDelete: boolean | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    password: number;
    role: number;
    isVerified: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    lastLoginAt: number;
    passwordChangedAt: number;
    emailVerifiedAt: number;
    isDelete: number;
    deletedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    password?: true;
    role?: true;
    isVerified?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    lastLoginAt?: true;
    passwordChangedAt?: true;
    emailVerifiedAt?: true;
    isDelete?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    password?: true;
    role?: true;
    isVerified?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    lastLoginAt?: true;
    passwordChangedAt?: true;
    emailVerifiedAt?: true;
    isDelete?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    password?: true;
    role?: true;
    isVerified?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    lastLoginAt?: true;
    passwordChangedAt?: true;
    emailVerifiedAt?: true;
    isDelete?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: $Enums.UserRole;
    isVerified: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt: Date | null;
    passwordChangedAt: Date | null;
    emailVerifiedAt: Date | null;
    isDelete: boolean;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isVerified?: Prisma.BoolFilter<"User"> | boolean;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    isDelete?: Prisma.BoolFilter<"User"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    member?: Prisma.XOR<Prisma.MemberNullableScalarRelationFilter, Prisma.MemberWhereInput> | null;
    mentor?: Prisma.XOR<Prisma.MentorNullableScalarRelationFilter, Prisma.MentorWhereInput> | null;
    moderator?: Prisma.XOR<Prisma.ModeratorNullableScalarRelationFilter, Prisma.ModeratorWhereInput> | null;
    eventFeedbacks?: Prisma.EventFeedbackListRelationFilter;
    eventRegistrations?: Prisma.EventRegistrationListRelationFilter;
    events?: Prisma.EventListRelationFilter;
    userPayments?: Prisma.PaymentListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDelete?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin?: Prisma.AdminOrderByWithRelationInput;
    member?: Prisma.MemberOrderByWithRelationInput;
    mentor?: Prisma.MentorOrderByWithRelationInput;
    moderator?: Prisma.ModeratorOrderByWithRelationInput;
    eventFeedbacks?: Prisma.EventFeedbackOrderByRelationAggregateInput;
    eventRegistrations?: Prisma.EventRegistrationOrderByRelationAggregateInput;
    events?: Prisma.EventOrderByRelationAggregateInput;
    userPayments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isVerified?: Prisma.BoolFilter<"User"> | boolean;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    isDelete?: Prisma.BoolFilter<"User"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.AdminWhereInput> | null;
    member?: Prisma.XOR<Prisma.MemberNullableScalarRelationFilter, Prisma.MemberWhereInput> | null;
    mentor?: Prisma.XOR<Prisma.MentorNullableScalarRelationFilter, Prisma.MentorWhereInput> | null;
    moderator?: Prisma.XOR<Prisma.ModeratorNullableScalarRelationFilter, Prisma.ModeratorWhereInput> | null;
    eventFeedbacks?: Prisma.EventFeedbackListRelationFilter;
    eventRegistrations?: Prisma.EventRegistrationListRelationFilter;
    events?: Prisma.EventListRelationFilter;
    userPayments?: Prisma.PaymentListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDelete?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    isVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    passwordChangedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    isDelete?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isDelete?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isDelete?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    passwordChangedAt?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isDelete?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.UserUpsertWithoutEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventsInput, Prisma.UserUpdateWithoutEventsInput>, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserCreateNestedOneWithoutEventRegistrationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventRegistrationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventRegistrationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventRegistrationsInput;
    upsert?: Prisma.UserUpsertWithoutEventRegistrationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventRegistrationsInput, Prisma.UserUpdateWithoutEventRegistrationsInput>, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
};
export type UserCreateNestedOneWithoutEventFeedbacksInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventFeedbacksInput, Prisma.UserUncheckedCreateWithoutEventFeedbacksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventFeedbacksInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEventFeedbacksNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventFeedbacksInput, Prisma.UserUncheckedCreateWithoutEventFeedbacksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventFeedbacksInput;
    upsert?: Prisma.UserUpsertWithoutEventFeedbacksInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventFeedbacksInput, Prisma.UserUpdateWithoutEventFeedbacksInput>, Prisma.UserUncheckedUpdateWithoutEventFeedbacksInput>;
};
export type UserCreateNestedOneWithoutUserPaymentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserPaymentsInput, Prisma.UserUncheckedCreateWithoutUserPaymentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserPaymentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserPaymentsInput, Prisma.UserUncheckedCreateWithoutUserPaymentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserPaymentsInput;
    upsert?: Prisma.UserUpsertWithoutUserPaymentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserPaymentsInput, Prisma.UserUpdateWithoutUserPaymentsInput>, Prisma.UserUncheckedUpdateWithoutUserPaymentsInput>;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type UserCreateNestedOneWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminInput;
    upsert?: Prisma.UserUpsertWithoutAdminInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdminInput, Prisma.UserUpdateWithoutAdminInput>, Prisma.UserUncheckedUpdateWithoutAdminInput>;
};
export type UserCreateNestedOneWithoutMemberInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemberInput, Prisma.UserUncheckedCreateWithoutMemberInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemberInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMemberNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemberInput, Prisma.UserUncheckedCreateWithoutMemberInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemberInput;
    upsert?: Prisma.UserUpsertWithoutMemberInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMemberInput, Prisma.UserUpdateWithoutMemberInput>, Prisma.UserUncheckedUpdateWithoutMemberInput>;
};
export type UserCreateNestedOneWithoutMentorInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMentorInput, Prisma.UserUncheckedCreateWithoutMentorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMentorInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMentorNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMentorInput, Prisma.UserUncheckedCreateWithoutMentorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMentorInput;
    upsert?: Prisma.UserUpsertWithoutMentorInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMentorInput, Prisma.UserUpdateWithoutMentorInput>, Prisma.UserUncheckedUpdateWithoutMentorInput>;
};
export type UserCreateNestedOneWithoutModeratorInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutModeratorInput, Prisma.UserUncheckedCreateWithoutModeratorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutModeratorInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutModeratorNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutModeratorInput, Prisma.UserUncheckedCreateWithoutModeratorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutModeratorInput;
    upsert?: Prisma.UserUpsertWithoutModeratorInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutModeratorInput, Prisma.UserUpdateWithoutModeratorInput>, Prisma.UserUncheckedUpdateWithoutModeratorInput>;
};
export type UserCreateWithoutEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
};
export type UserUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventsInput, Prisma.UserUncheckedCreateWithoutEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventsInput, Prisma.UserUncheckedUpdateWithoutEventsInput>;
};
export type UserUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEventRegistrationsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventRegistrationsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventRegistrationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
};
export type UserUpsertWithoutEventRegistrationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventRegistrationsInput, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventRegistrationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventRegistrationsInput, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
};
export type UserUpdateWithoutEventRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEventFeedbacksInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventFeedbacksInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventFeedbacksInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventFeedbacksInput, Prisma.UserUncheckedCreateWithoutEventFeedbacksInput>;
};
export type UserUpsertWithoutEventFeedbacksInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventFeedbacksInput, Prisma.UserUncheckedUpdateWithoutEventFeedbacksInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventFeedbacksInput, Prisma.UserUncheckedCreateWithoutEventFeedbacksInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventFeedbacksInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventFeedbacksInput, Prisma.UserUncheckedUpdateWithoutEventFeedbacksInput>;
};
export type UserUpdateWithoutEventFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutUserPaymentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserPaymentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserPaymentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserPaymentsInput, Prisma.UserUncheckedCreateWithoutUserPaymentsInput>;
};
export type UserUpsertWithoutUserPaymentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserPaymentsInput, Prisma.UserUncheckedUpdateWithoutUserPaymentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserPaymentsInput, Prisma.UserUncheckedCreateWithoutUserPaymentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserPaymentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserPaymentsInput, Prisma.UserUncheckedUpdateWithoutUserPaymentsInput>;
};
export type UserUpdateWithoutUserPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAdminInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAdminInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAdminInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
};
export type UserUpsertWithoutAdminInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdminInput, Prisma.UserUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminInput, Prisma.UserUncheckedCreateWithoutAdminInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdminInput, Prisma.UserUncheckedUpdateWithoutAdminInput>;
};
export type UserUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMemberInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMemberInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMemberInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemberInput, Prisma.UserUncheckedCreateWithoutMemberInput>;
};
export type UserUpsertWithoutMemberInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMemberInput, Prisma.UserUncheckedUpdateWithoutMemberInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemberInput, Prisma.UserUncheckedCreateWithoutMemberInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMemberInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMemberInput, Prisma.UserUncheckedUpdateWithoutMemberInput>;
};
export type UserUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMentorInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMentorInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    moderator?: Prisma.ModeratorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMentorInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMentorInput, Prisma.UserUncheckedCreateWithoutMentorInput>;
};
export type UserUpsertWithoutMentorInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMentorInput, Prisma.UserUncheckedUpdateWithoutMentorInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMentorInput, Prisma.UserUncheckedCreateWithoutMentorInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMentorInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMentorInput, Prisma.UserUncheckedUpdateWithoutMentorInput>;
};
export type UserUpdateWithoutMentorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMentorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    moderator?: Prisma.ModeratorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutModeratorInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    events?: Prisma.EventCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutModeratorInput = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: $Enums.UserRole;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lastLoginAt?: Date | string | null;
    passwordChangedAt?: Date | string | null;
    emailVerifiedAt?: Date | string | null;
    isDelete?: boolean;
    deletedAt?: Date | string | null;
    admin?: Prisma.AdminUncheckedCreateNestedOneWithoutUserInput;
    member?: Prisma.MemberUncheckedCreateNestedOneWithoutUserInput;
    mentor?: Prisma.MentorUncheckedCreateNestedOneWithoutUserInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutUserInput;
    userPayments?: Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutModeratorInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutModeratorInput, Prisma.UserUncheckedCreateWithoutModeratorInput>;
};
export type UserUpsertWithoutModeratorInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutModeratorInput, Prisma.UserUncheckedUpdateWithoutModeratorInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutModeratorInput, Prisma.UserUncheckedCreateWithoutModeratorInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutModeratorInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutModeratorInput, Prisma.UserUncheckedUpdateWithoutModeratorInput>;
};
export type UserUpdateWithoutModeratorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutModeratorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    passwordChangedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isDelete?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput;
    member?: Prisma.MemberUncheckedUpdateOneWithoutUserNestedInput;
    mentor?: Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput;
    eventFeedbacks?: Prisma.EventFeedbackUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutUserNestedInput;
    userPayments?: Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    eventFeedbacks: number;
    eventRegistrations: number;
    events: number;
    userPayments: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    eventFeedbacks?: boolean | UserCountOutputTypeCountEventFeedbacksArgs;
    eventRegistrations?: boolean | UserCountOutputTypeCountEventRegistrationsArgs;
    events?: boolean | UserCountOutputTypeCountEventsArgs;
    userPayments?: boolean | UserCountOutputTypeCountUserPaymentsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventFeedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFeedbackWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRegistrationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUserPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastLoginAt?: boolean;
    passwordChangedAt?: boolean;
    emailVerifiedAt?: boolean;
    isDelete?: boolean;
    deletedAt?: boolean;
    admin?: boolean | Prisma.User$adminArgs<ExtArgs>;
    member?: boolean | Prisma.User$memberArgs<ExtArgs>;
    mentor?: boolean | Prisma.User$mentorArgs<ExtArgs>;
    moderator?: boolean | Prisma.User$moderatorArgs<ExtArgs>;
    eventFeedbacks?: boolean | Prisma.User$eventFeedbacksArgs<ExtArgs>;
    eventRegistrations?: boolean | Prisma.User$eventRegistrationsArgs<ExtArgs>;
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    userPayments?: boolean | Prisma.User$userPaymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastLoginAt?: boolean;
    passwordChangedAt?: boolean;
    emailVerifiedAt?: boolean;
    isDelete?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastLoginAt?: boolean;
    passwordChangedAt?: boolean;
    emailVerifiedAt?: boolean;
    isDelete?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    isVerified?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lastLoginAt?: boolean;
    passwordChangedAt?: boolean;
    emailVerifiedAt?: boolean;
    isDelete?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "isVerified" | "isActive" | "createdAt" | "updatedAt" | "lastLoginAt" | "passwordChangedAt" | "emailVerifiedAt" | "isDelete" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.User$adminArgs<ExtArgs>;
    member?: boolean | Prisma.User$memberArgs<ExtArgs>;
    mentor?: boolean | Prisma.User$mentorArgs<ExtArgs>;
    moderator?: boolean | Prisma.User$moderatorArgs<ExtArgs>;
    eventFeedbacks?: boolean | Prisma.User$eventFeedbacksArgs<ExtArgs>;
    eventRegistrations?: boolean | Prisma.User$eventRegistrationsArgs<ExtArgs>;
    events?: boolean | Prisma.User$eventsArgs<ExtArgs>;
    userPayments?: boolean | Prisma.User$userPaymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        admin: Prisma.$AdminPayload<ExtArgs> | null;
        member: Prisma.$MemberPayload<ExtArgs> | null;
        mentor: Prisma.$MentorPayload<ExtArgs> | null;
        moderator: Prisma.$ModeratorPayload<ExtArgs> | null;
        eventFeedbacks: Prisma.$EventFeedbackPayload<ExtArgs>[];
        eventRegistrations: Prisma.$EventRegistrationPayload<ExtArgs>[];
        events: Prisma.$EventPayload<ExtArgs>[];
        userPayments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: $Enums.UserRole;
        isVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastLoginAt: Date | null;
        passwordChangedAt: Date | null;
        emailVerifiedAt: Date | null;
        isDelete: boolean;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.User$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$adminArgs<ExtArgs>>): Prisma.Prisma__AdminClient<runtime.Types.Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    member<T extends Prisma.User$memberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$memberArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mentor<T extends Prisma.User$mentorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$mentorArgs<ExtArgs>>): Prisma.Prisma__MentorClient<runtime.Types.Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    moderator<T extends Prisma.User$moderatorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$moderatorArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    eventFeedbacks<T extends Prisma.User$eventFeedbacksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    eventRegistrations<T extends Prisma.User$eventRegistrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.User$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userPayments<T extends Prisma.User$userPaymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly isVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly passwordChangedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly emailVerifiedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly isDelete: Prisma.FieldRef<"User", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.admin
 */
export type User$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: Prisma.AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: Prisma.AdminOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminInclude<ExtArgs> | null;
    where?: Prisma.AdminWhereInput;
};
/**
 * User.member
 */
export type User$memberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: Prisma.MemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Member
     */
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
};
/**
 * User.mentor
 */
export type User$mentorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: Prisma.MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: Prisma.MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MentorInclude<ExtArgs> | null;
    where?: Prisma.MentorWhereInput;
};
/**
 * User.moderator
 */
export type User$moderatorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moderator
     */
    select?: Prisma.ModeratorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moderator
     */
    omit?: Prisma.ModeratorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorInclude<ExtArgs> | null;
    where?: Prisma.ModeratorWhereInput;
};
/**
 * User.eventFeedbacks
 */
export type User$eventFeedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFeedback
     */
    select?: Prisma.EventFeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFeedback
     */
    omit?: Prisma.EventFeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFeedbackInclude<ExtArgs> | null;
    where?: Prisma.EventFeedbackWhereInput;
    orderBy?: Prisma.EventFeedbackOrderByWithRelationInput | Prisma.EventFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.EventFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventFeedbackScalarFieldEnum | Prisma.EventFeedbackScalarFieldEnum[];
};
/**
 * User.eventRegistrations
 */
export type User$eventRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: Prisma.EventRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: Prisma.EventRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRegistrationInclude<ExtArgs> | null;
    where?: Prisma.EventRegistrationWhereInput;
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * User.events
 */
export type User$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * User.userPayments
 */
export type User$userPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map
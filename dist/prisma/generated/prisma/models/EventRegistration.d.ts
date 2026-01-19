import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model EventRegistration
 *
 */
export type EventRegistrationModel = runtime.Types.Result.DefaultSelection<Prisma.$EventRegistrationPayload>;
export type AggregateEventRegistration = {
    _count: EventRegistrationCountAggregateOutputType | null;
    _avg: EventRegistrationAvgAggregateOutputType | null;
    _sum: EventRegistrationSumAggregateOutputType | null;
    _min: EventRegistrationMinAggregateOutputType | null;
    _max: EventRegistrationMaxAggregateOutputType | null;
};
export type EventRegistrationAvgAggregateOutputType = {
    unitPrice: runtime.Decimal | null;
    quantity: number | null;
    totalAmount: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
};
export type EventRegistrationSumAggregateOutputType = {
    unitPrice: runtime.Decimal | null;
    quantity: number | null;
    totalAmount: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
};
export type EventRegistrationMinAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    paymentId: string | null;
    status: $Enums.RegistrationStatus | null;
    ticketTypeId: string | null;
    ticketNumber: string | null;
    seatNumber: string | null;
    unitPrice: runtime.Decimal | null;
    quantity: number | null;
    totalAmount: runtime.Decimal | null;
    discountCode: string | null;
    discountAmount: runtime.Decimal | null;
    dietaryRequirements: string | null;
    specialNeeds: string | null;
    emergencyContact: string | null;
    emergencyPhone: string | null;
    isCheckedIn: boolean | null;
    checkedInAt: Date | null;
    checkedInBy: string | null;
    registeredAt: Date | null;
    updatedAt: Date | null;
    confirmedAt: Date | null;
    cancelledAt: Date | null;
};
export type EventRegistrationMaxAggregateOutputType = {
    id: string | null;
    eventId: string | null;
    userId: string | null;
    paymentId: string | null;
    status: $Enums.RegistrationStatus | null;
    ticketTypeId: string | null;
    ticketNumber: string | null;
    seatNumber: string | null;
    unitPrice: runtime.Decimal | null;
    quantity: number | null;
    totalAmount: runtime.Decimal | null;
    discountCode: string | null;
    discountAmount: runtime.Decimal | null;
    dietaryRequirements: string | null;
    specialNeeds: string | null;
    emergencyContact: string | null;
    emergencyPhone: string | null;
    isCheckedIn: boolean | null;
    checkedInAt: Date | null;
    checkedInBy: string | null;
    registeredAt: Date | null;
    updatedAt: Date | null;
    confirmedAt: Date | null;
    cancelledAt: Date | null;
};
export type EventRegistrationCountAggregateOutputType = {
    id: number;
    eventId: number;
    userId: number;
    paymentId: number;
    status: number;
    ticketTypeId: number;
    ticketNumber: number;
    seatNumber: number;
    unitPrice: number;
    quantity: number;
    totalAmount: number;
    discountCode: number;
    discountAmount: number;
    dietaryRequirements: number;
    specialNeeds: number;
    emergencyContact: number;
    emergencyPhone: number;
    isCheckedIn: number;
    checkedInAt: number;
    checkedInBy: number;
    registeredAt: number;
    updatedAt: number;
    confirmedAt: number;
    cancelledAt: number;
    _all: number;
};
export type EventRegistrationAvgAggregateInputType = {
    unitPrice?: true;
    quantity?: true;
    totalAmount?: true;
    discountAmount?: true;
};
export type EventRegistrationSumAggregateInputType = {
    unitPrice?: true;
    quantity?: true;
    totalAmount?: true;
    discountAmount?: true;
};
export type EventRegistrationMinAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    paymentId?: true;
    status?: true;
    ticketTypeId?: true;
    ticketNumber?: true;
    seatNumber?: true;
    unitPrice?: true;
    quantity?: true;
    totalAmount?: true;
    discountCode?: true;
    discountAmount?: true;
    dietaryRequirements?: true;
    specialNeeds?: true;
    emergencyContact?: true;
    emergencyPhone?: true;
    isCheckedIn?: true;
    checkedInAt?: true;
    checkedInBy?: true;
    registeredAt?: true;
    updatedAt?: true;
    confirmedAt?: true;
    cancelledAt?: true;
};
export type EventRegistrationMaxAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    paymentId?: true;
    status?: true;
    ticketTypeId?: true;
    ticketNumber?: true;
    seatNumber?: true;
    unitPrice?: true;
    quantity?: true;
    totalAmount?: true;
    discountCode?: true;
    discountAmount?: true;
    dietaryRequirements?: true;
    specialNeeds?: true;
    emergencyContact?: true;
    emergencyPhone?: true;
    isCheckedIn?: true;
    checkedInAt?: true;
    checkedInBy?: true;
    registeredAt?: true;
    updatedAt?: true;
    confirmedAt?: true;
    cancelledAt?: true;
};
export type EventRegistrationCountAggregateInputType = {
    id?: true;
    eventId?: true;
    userId?: true;
    paymentId?: true;
    status?: true;
    ticketTypeId?: true;
    ticketNumber?: true;
    seatNumber?: true;
    unitPrice?: true;
    quantity?: true;
    totalAmount?: true;
    discountCode?: true;
    discountAmount?: true;
    dietaryRequirements?: true;
    specialNeeds?: true;
    emergencyContact?: true;
    emergencyPhone?: true;
    isCheckedIn?: true;
    checkedInAt?: true;
    checkedInBy?: true;
    registeredAt?: true;
    updatedAt?: true;
    confirmedAt?: true;
    cancelledAt?: true;
    _all?: true;
};
export type EventRegistrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistration to aggregate.
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventRegistrations
    **/
    _count?: true | EventRegistrationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventRegistrationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventRegistrationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventRegistrationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventRegistrationMaxAggregateInputType;
};
export type GetEventRegistrationAggregateType<T extends EventRegistrationAggregateArgs> = {
    [P in keyof T & keyof AggregateEventRegistration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventRegistration[P]> : Prisma.GetScalarType<T[P], AggregateEventRegistration[P]>;
};
export type EventRegistrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRegistrationWhereInput;
    orderBy?: Prisma.EventRegistrationOrderByWithAggregationInput | Prisma.EventRegistrationOrderByWithAggregationInput[];
    by: Prisma.EventRegistrationScalarFieldEnum[] | Prisma.EventRegistrationScalarFieldEnum;
    having?: Prisma.EventRegistrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventRegistrationCountAggregateInputType | true;
    _avg?: EventRegistrationAvgAggregateInputType;
    _sum?: EventRegistrationSumAggregateInputType;
    _min?: EventRegistrationMinAggregateInputType;
    _max?: EventRegistrationMaxAggregateInputType;
};
export type EventRegistrationGroupByOutputType = {
    id: string;
    eventId: string;
    userId: string;
    paymentId: string | null;
    status: $Enums.RegistrationStatus;
    ticketTypeId: string | null;
    ticketNumber: string | null;
    seatNumber: string | null;
    unitPrice: runtime.Decimal | null;
    quantity: number;
    totalAmount: runtime.Decimal | null;
    discountCode: string | null;
    discountAmount: runtime.Decimal | null;
    dietaryRequirements: string | null;
    specialNeeds: string | null;
    emergencyContact: string | null;
    emergencyPhone: string | null;
    isCheckedIn: boolean;
    checkedInAt: Date | null;
    checkedInBy: string | null;
    registeredAt: Date;
    updatedAt: Date;
    confirmedAt: Date | null;
    cancelledAt: Date | null;
    _count: EventRegistrationCountAggregateOutputType | null;
    _avg: EventRegistrationAvgAggregateOutputType | null;
    _sum: EventRegistrationSumAggregateOutputType | null;
    _min: EventRegistrationMinAggregateOutputType | null;
    _max: EventRegistrationMaxAggregateOutputType | null;
};
type GetEventRegistrationGroupByPayload<T extends EventRegistrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventRegistrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventRegistrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventRegistrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>;
}>>;
export type EventRegistrationWhereInput = {
    AND?: Prisma.EventRegistrationWhereInput | Prisma.EventRegistrationWhereInput[];
    OR?: Prisma.EventRegistrationWhereInput[];
    NOT?: Prisma.EventRegistrationWhereInput | Prisma.EventRegistrationWhereInput[];
    id?: Prisma.StringFilter<"EventRegistration"> | string;
    eventId?: Prisma.StringFilter<"EventRegistration"> | string;
    userId?: Prisma.StringFilter<"EventRegistration"> | string;
    paymentId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    status?: Prisma.EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    ticketNumber?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    seatNumber?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    unitPrice?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFilter<"EventRegistration"> | number;
    totalAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    discountAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    specialNeeds?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyContact?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyPhone?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    isCheckedIn?: Prisma.BoolFilter<"EventRegistration"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    checkedInBy?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    registeredAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    confirmedAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
};
export type EventRegistrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    seatNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    dietaryRequirements?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialNeeds?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCheckedIn?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type EventRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ticketNumber?: string;
    eventId_userId?: Prisma.EventRegistrationEventIdUserIdCompoundUniqueInput;
    AND?: Prisma.EventRegistrationWhereInput | Prisma.EventRegistrationWhereInput[];
    OR?: Prisma.EventRegistrationWhereInput[];
    NOT?: Prisma.EventRegistrationWhereInput | Prisma.EventRegistrationWhereInput[];
    eventId?: Prisma.StringFilter<"EventRegistration"> | string;
    userId?: Prisma.StringFilter<"EventRegistration"> | string;
    paymentId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    status?: Prisma.EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    seatNumber?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    unitPrice?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFilter<"EventRegistration"> | number;
    totalAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    discountAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    specialNeeds?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyContact?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyPhone?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    isCheckedIn?: Prisma.BoolFilter<"EventRegistration"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    checkedInBy?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    registeredAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    confirmedAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
}, "id" | "ticketNumber" | "eventId_userId">;
export type EventRegistrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    seatNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    unitPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    dietaryRequirements?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialNeeds?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    emergencyPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCheckedIn?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EventRegistrationCountOrderByAggregateInput;
    _avg?: Prisma.EventRegistrationAvgOrderByAggregateInput;
    _max?: Prisma.EventRegistrationMaxOrderByAggregateInput;
    _min?: Prisma.EventRegistrationMinOrderByAggregateInput;
    _sum?: Prisma.EventRegistrationSumOrderByAggregateInput;
};
export type EventRegistrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventRegistrationScalarWhereWithAggregatesInput | Prisma.EventRegistrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventRegistrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventRegistrationScalarWhereWithAggregatesInput | Prisma.EventRegistrationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventRegistration"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"EventRegistration"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"EventRegistration"> | string;
    paymentId?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    status?: Prisma.EnumRegistrationStatusWithAggregatesFilter<"EventRegistration"> | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    ticketNumber?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    seatNumber?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    unitPrice?: Prisma.DecimalNullableWithAggregatesFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"EventRegistration"> | number;
    totalAmount?: Prisma.DecimalNullableWithAggregatesFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    discountAmount?: Prisma.DecimalNullableWithAggregatesFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    specialNeeds?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    emergencyContact?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    emergencyPhone?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    isCheckedIn?: Prisma.BoolWithAggregatesFilter<"EventRegistration"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null;
    checkedInBy?: Prisma.StringNullableWithAggregatesFilter<"EventRegistration"> | string | null;
    registeredAt?: Prisma.DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string;
    confirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null;
};
export type EventRegistrationCreateInput = {
    id?: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutEventRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutEventRegistrationsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationUncheckedCreateInput = {
    id?: string;
    eventId: string;
    userId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEventRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutEventRegistrationsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationCreateManyInput = {
    id?: string;
    eventId: string;
    userId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type EventRegistrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRegistrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRegistrationListRelationFilter = {
    every?: Prisma.EventRegistrationWhereInput;
    some?: Prisma.EventRegistrationWhereInput;
    none?: Prisma.EventRegistrationWhereInput;
};
export type EventRegistrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventRegistrationEventIdUserIdCompoundUniqueInput = {
    eventId: string;
    userId: string;
};
export type EventRegistrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discountCode?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    dietaryRequirements?: Prisma.SortOrder;
    specialNeeds?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    emergencyPhone?: Prisma.SortOrder;
    isCheckedIn?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type EventRegistrationAvgOrderByAggregateInput = {
    unitPrice?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
};
export type EventRegistrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discountCode?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    dietaryRequirements?: Prisma.SortOrder;
    specialNeeds?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    emergencyPhone?: Prisma.SortOrder;
    isCheckedIn?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type EventRegistrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketTypeId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discountCode?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    dietaryRequirements?: Prisma.SortOrder;
    specialNeeds?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    emergencyPhone?: Prisma.SortOrder;
    isCheckedIn?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    registeredAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type EventRegistrationSumOrderByAggregateInput = {
    unitPrice?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
};
export type EventRegistrationNullableScalarRelationFilter = {
    is?: Prisma.EventRegistrationWhereInput | null;
    isNot?: Prisma.EventRegistrationWhereInput | null;
};
export type EventRegistrationCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput> | Prisma.EventRegistrationCreateWithoutEventInput[] | Prisma.EventRegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutEventInput | Prisma.EventRegistrationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventRegistrationCreateManyEventInputEnvelope;
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
};
export type EventRegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput> | Prisma.EventRegistrationCreateWithoutEventInput[] | Prisma.EventRegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutEventInput | Prisma.EventRegistrationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventRegistrationCreateManyEventInputEnvelope;
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
};
export type EventRegistrationUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput> | Prisma.EventRegistrationCreateWithoutEventInput[] | Prisma.EventRegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutEventInput | Prisma.EventRegistrationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventRegistrationUpsertWithWhereUniqueWithoutEventInput | Prisma.EventRegistrationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventRegistrationCreateManyEventInputEnvelope;
    set?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    disconnect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    delete?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    update?: Prisma.EventRegistrationUpdateWithWhereUniqueWithoutEventInput | Prisma.EventRegistrationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventRegistrationUpdateManyWithWhereWithoutEventInput | Prisma.EventRegistrationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
};
export type EventRegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput> | Prisma.EventRegistrationCreateWithoutEventInput[] | Prisma.EventRegistrationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutEventInput | Prisma.EventRegistrationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventRegistrationUpsertWithWhereUniqueWithoutEventInput | Prisma.EventRegistrationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventRegistrationCreateManyEventInputEnvelope;
    set?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    disconnect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    delete?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    update?: Prisma.EventRegistrationUpdateWithWhereUniqueWithoutEventInput | Prisma.EventRegistrationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventRegistrationUpdateManyWithWhereWithoutEventInput | Prisma.EventRegistrationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
};
export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EventRegistrationCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.EventRegistrationWhereUniqueInput;
};
export type EventRegistrationUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.EventRegistrationUpsertWithoutPaymentsInput;
    disconnect?: Prisma.EventRegistrationWhereInput | boolean;
    delete?: Prisma.EventRegistrationWhereInput | boolean;
    connect?: Prisma.EventRegistrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventRegistrationUpdateToOneWithWhereWithoutPaymentsInput, Prisma.EventRegistrationUpdateWithoutPaymentsInput>, Prisma.EventRegistrationUncheckedUpdateWithoutPaymentsInput>;
};
export type EventRegistrationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput> | Prisma.EventRegistrationCreateWithoutUserInput[] | Prisma.EventRegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutUserInput | Prisma.EventRegistrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventRegistrationCreateManyUserInputEnvelope;
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
};
export type EventRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput> | Prisma.EventRegistrationCreateWithoutUserInput[] | Prisma.EventRegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutUserInput | Prisma.EventRegistrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventRegistrationCreateManyUserInputEnvelope;
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
};
export type EventRegistrationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput> | Prisma.EventRegistrationCreateWithoutUserInput[] | Prisma.EventRegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutUserInput | Prisma.EventRegistrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventRegistrationUpsertWithWhereUniqueWithoutUserInput | Prisma.EventRegistrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventRegistrationCreateManyUserInputEnvelope;
    set?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    disconnect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    delete?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    update?: Prisma.EventRegistrationUpdateWithWhereUniqueWithoutUserInput | Prisma.EventRegistrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventRegistrationUpdateManyWithWhereWithoutUserInput | Prisma.EventRegistrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
};
export type EventRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput> | Prisma.EventRegistrationCreateWithoutUserInput[] | Prisma.EventRegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventRegistrationCreateOrConnectWithoutUserInput | Prisma.EventRegistrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventRegistrationUpsertWithWhereUniqueWithoutUserInput | Prisma.EventRegistrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventRegistrationCreateManyUserInputEnvelope;
    set?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    disconnect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    delete?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    connect?: Prisma.EventRegistrationWhereUniqueInput | Prisma.EventRegistrationWhereUniqueInput[];
    update?: Prisma.EventRegistrationUpdateWithWhereUniqueWithoutUserInput | Prisma.EventRegistrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventRegistrationUpdateManyWithWhereWithoutUserInput | Prisma.EventRegistrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
};
export type EventRegistrationCreateWithoutEventInput = {
    id?: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutEventRegistrationsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationCreateOrConnectWithoutEventInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput>;
};
export type EventRegistrationCreateManyEventInputEnvelope = {
    data: Prisma.EventRegistrationCreateManyEventInput | Prisma.EventRegistrationCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventRegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutEventInput, Prisma.EventRegistrationUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutEventInput, Prisma.EventRegistrationUncheckedCreateWithoutEventInput>;
};
export type EventRegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutEventInput, Prisma.EventRegistrationUncheckedUpdateWithoutEventInput>;
};
export type EventRegistrationUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.EventRegistrationUpdateManyMutationInput, Prisma.EventRegistrationUncheckedUpdateManyWithoutEventInput>;
};
export type EventRegistrationScalarWhereInput = {
    AND?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
    OR?: Prisma.EventRegistrationScalarWhereInput[];
    NOT?: Prisma.EventRegistrationScalarWhereInput | Prisma.EventRegistrationScalarWhereInput[];
    id?: Prisma.StringFilter<"EventRegistration"> | string;
    eventId?: Prisma.StringFilter<"EventRegistration"> | string;
    userId?: Prisma.StringFilter<"EventRegistration"> | string;
    paymentId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    status?: Prisma.EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    ticketNumber?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    seatNumber?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    unitPrice?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFilter<"EventRegistration"> | number;
    totalAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    discountAmount?: Prisma.DecimalNullableFilter<"EventRegistration"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    specialNeeds?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyContact?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    emergencyPhone?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    isCheckedIn?: Prisma.BoolFilter<"EventRegistration"> | boolean;
    checkedInAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    checkedInBy?: Prisma.StringNullableFilter<"EventRegistration"> | string | null;
    registeredAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventRegistration"> | Date | string;
    confirmedAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EventRegistration"> | Date | string | null;
};
export type EventRegistrationCreateWithoutPaymentsInput = {
    id?: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutEventRegistrationsInput;
    event: Prisma.EventCreateNestedOneWithoutEventRegistrationsInput;
};
export type EventRegistrationUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    eventId: string;
    userId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type EventRegistrationCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedCreateWithoutPaymentsInput>;
};
export type EventRegistrationUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.EventRegistrationWhereInput;
};
export type EventRegistrationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.EventRegistrationWhereInput;
    data: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutPaymentsInput, Prisma.EventRegistrationUncheckedUpdateWithoutPaymentsInput>;
};
export type EventRegistrationUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEventRegistrationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutEventRegistrationsNestedInput;
};
export type EventRegistrationUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRegistrationCreateWithoutUserInput = {
    id?: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    event: Prisma.EventCreateNestedOneWithoutEventRegistrationsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationUncheckedCreateWithoutUserInput = {
    id?: string;
    eventId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEventRegistrationInput;
};
export type EventRegistrationCreateOrConnectWithoutUserInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput>;
};
export type EventRegistrationCreateManyUserInputEnvelope = {
    data: Prisma.EventRegistrationCreateManyUserInput | Prisma.EventRegistrationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutUserInput, Prisma.EventRegistrationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventRegistrationCreateWithoutUserInput, Prisma.EventRegistrationUncheckedCreateWithoutUserInput>;
};
export type EventRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventRegistrationUpdateWithoutUserInput, Prisma.EventRegistrationUncheckedUpdateWithoutUserInput>;
};
export type EventRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.EventRegistrationUpdateManyMutationInput, Prisma.EventRegistrationUncheckedUpdateManyWithoutUserInput>;
};
export type EventRegistrationCreateManyEventInput = {
    id?: string;
    userId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type EventRegistrationUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutEventRegistrationsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EventRegistrationCreateManyUserInput = {
    id?: string;
    eventId: string;
    paymentId?: string | null;
    status?: $Enums.RegistrationStatus;
    ticketTypeId?: string | null;
    ticketNumber?: string | null;
    seatNumber?: string | null;
    unitPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: number;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: string | null;
    specialNeeds?: string | null;
    emergencyContact?: string | null;
    emergencyPhone?: string | null;
    isCheckedIn?: boolean;
    checkedInAt?: Date | string | null;
    checkedInBy?: string | null;
    registeredAt?: Date | string;
    updatedAt?: Date | string;
    confirmedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type EventRegistrationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    event?: Prisma.EventUpdateOneRequiredWithoutEventRegistrationsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEventRegistrationNestedInput;
};
export type EventRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus;
    ticketTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticketNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seatNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    totalAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dietaryRequirements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    specialNeeds?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCheckedIn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registeredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type EventRegistrationCountOutputType
 */
export type EventRegistrationCountOutputType = {
    payments: number;
};
export type EventRegistrationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | EventRegistrationCountOutputTypeCountPaymentsArgs;
};
/**
 * EventRegistrationCountOutputType without action
 */
export type EventRegistrationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistrationCountOutputType
     */
    select?: Prisma.EventRegistrationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventRegistrationCountOutputType without action
 */
export type EventRegistrationCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type EventRegistrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    paymentId?: boolean;
    status?: boolean;
    ticketTypeId?: boolean;
    ticketNumber?: boolean;
    seatNumber?: boolean;
    unitPrice?: boolean;
    quantity?: boolean;
    totalAmount?: boolean;
    discountCode?: boolean;
    discountAmount?: boolean;
    dietaryRequirements?: boolean;
    specialNeeds?: boolean;
    emergencyContact?: boolean;
    emergencyPhone?: boolean;
    isCheckedIn?: boolean;
    checkedInAt?: boolean;
    checkedInBy?: boolean;
    registeredAt?: boolean;
    updatedAt?: boolean;
    confirmedAt?: boolean;
    cancelledAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.EventRegistration$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventRegistrationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRegistration"]>;
export type EventRegistrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    paymentId?: boolean;
    status?: boolean;
    ticketTypeId?: boolean;
    ticketNumber?: boolean;
    seatNumber?: boolean;
    unitPrice?: boolean;
    quantity?: boolean;
    totalAmount?: boolean;
    discountCode?: boolean;
    discountAmount?: boolean;
    dietaryRequirements?: boolean;
    specialNeeds?: boolean;
    emergencyContact?: boolean;
    emergencyPhone?: boolean;
    isCheckedIn?: boolean;
    checkedInAt?: boolean;
    checkedInBy?: boolean;
    registeredAt?: boolean;
    updatedAt?: boolean;
    confirmedAt?: boolean;
    cancelledAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRegistration"]>;
export type EventRegistrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    paymentId?: boolean;
    status?: boolean;
    ticketTypeId?: boolean;
    ticketNumber?: boolean;
    seatNumber?: boolean;
    unitPrice?: boolean;
    quantity?: boolean;
    totalAmount?: boolean;
    discountCode?: boolean;
    discountAmount?: boolean;
    dietaryRequirements?: boolean;
    specialNeeds?: boolean;
    emergencyContact?: boolean;
    emergencyPhone?: boolean;
    isCheckedIn?: boolean;
    checkedInAt?: boolean;
    checkedInBy?: boolean;
    registeredAt?: boolean;
    updatedAt?: boolean;
    confirmedAt?: boolean;
    cancelledAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventRegistration"]>;
export type EventRegistrationSelectScalar = {
    id?: boolean;
    eventId?: boolean;
    userId?: boolean;
    paymentId?: boolean;
    status?: boolean;
    ticketTypeId?: boolean;
    ticketNumber?: boolean;
    seatNumber?: boolean;
    unitPrice?: boolean;
    quantity?: boolean;
    totalAmount?: boolean;
    discountCode?: boolean;
    discountAmount?: boolean;
    dietaryRequirements?: boolean;
    specialNeeds?: boolean;
    emergencyContact?: boolean;
    emergencyPhone?: boolean;
    isCheckedIn?: boolean;
    checkedInAt?: boolean;
    checkedInBy?: boolean;
    registeredAt?: boolean;
    updatedAt?: boolean;
    confirmedAt?: boolean;
    cancelledAt?: boolean;
};
export type EventRegistrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "eventId" | "userId" | "paymentId" | "status" | "ticketTypeId" | "ticketNumber" | "seatNumber" | "unitPrice" | "quantity" | "totalAmount" | "discountCode" | "discountAmount" | "dietaryRequirements" | "specialNeeds" | "emergencyContact" | "emergencyPhone" | "isCheckedIn" | "checkedInAt" | "checkedInBy" | "registeredAt" | "updatedAt" | "confirmedAt" | "cancelledAt", ExtArgs["result"]["eventRegistration"]>;
export type EventRegistrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.EventRegistration$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventRegistrationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventRegistrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type EventRegistrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $EventRegistrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventRegistration";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        eventId: string;
        userId: string;
        paymentId: string | null;
        status: $Enums.RegistrationStatus;
        ticketTypeId: string | null;
        ticketNumber: string | null;
        seatNumber: string | null;
        unitPrice: runtime.Decimal | null;
        quantity: number;
        totalAmount: runtime.Decimal | null;
        discountCode: string | null;
        discountAmount: runtime.Decimal | null;
        dietaryRequirements: string | null;
        specialNeeds: string | null;
        emergencyContact: string | null;
        emergencyPhone: string | null;
        isCheckedIn: boolean;
        checkedInAt: Date | null;
        checkedInBy: string | null;
        registeredAt: Date;
        updatedAt: Date;
        confirmedAt: Date | null;
        cancelledAt: Date | null;
    }, ExtArgs["result"]["eventRegistration"]>;
    composites: {};
};
export type EventRegistrationGetPayload<S extends boolean | null | undefined | EventRegistrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload, S>;
export type EventRegistrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventRegistrationCountAggregateInputType | true;
};
export interface EventRegistrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventRegistration'];
        meta: {
            name: 'EventRegistration';
        };
    };
    /**
     * Find zero or one EventRegistration that matches the filter.
     * @param {EventRegistrationFindUniqueArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRegistrationFindUniqueArgs>(args: Prisma.SelectSubset<T, EventRegistrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRegistrationFindUniqueOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRegistrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRegistrationFindFirstArgs>(args?: Prisma.SelectSubset<T, EventRegistrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRegistrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany()
     *
     * // Get first 10 EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventRegistrationFindManyArgs>(args?: Prisma.SelectSubset<T, EventRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventRegistration.
     * @param {EventRegistrationCreateArgs} args - Arguments to create a EventRegistration.
     * @example
     * // Create one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.create({
     *   data: {
     *     // ... data to create a EventRegistration
     *   }
     * })
     *
     */
    create<T extends EventRegistrationCreateArgs>(args: Prisma.SelectSubset<T, EventRegistrationCreateArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventRegistrations.
     * @param {EventRegistrationCreateManyArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventRegistrationCreateManyArgs>(args?: Prisma.SelectSubset<T, EventRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventRegistrations and returns the data saved in the database.
     * @param {EventRegistrationCreateManyAndReturnArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventRegistrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventRegistration.
     * @param {EventRegistrationDeleteArgs} args - Arguments to delete one EventRegistration.
     * @example
     * // Delete one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.delete({
     *   where: {
     *     // ... filter to delete one EventRegistration
     *   }
     * })
     *
     */
    delete<T extends EventRegistrationDeleteArgs>(args: Prisma.SelectSubset<T, EventRegistrationDeleteArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventRegistration.
     * @param {EventRegistrationUpdateArgs} args - Arguments to update one EventRegistration.
     * @example
     * // Update one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventRegistrationUpdateArgs>(args: Prisma.SelectSubset<T, EventRegistrationUpdateArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventRegistrations.
     * @param {EventRegistrationDeleteManyArgs} args - Arguments to filter EventRegistrations to delete.
     * @example
     * // Delete a few EventRegistrations
     * const { count } = await prisma.eventRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventRegistrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventRegistrationUpdateManyArgs>(args: Prisma.SelectSubset<T, EventRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventRegistrations and returns the data updated in the database.
     * @param {EventRegistrationUpdateManyAndReturnArgs} args - Arguments to update many EventRegistrations.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventRegistrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventRegistration.
     * @param {EventRegistrationUpsertArgs} args - Arguments to update or create a EventRegistration.
     * @example
     * // Update or create a EventRegistration
     * const eventRegistration = await prisma.eventRegistration.upsert({
     *   create: {
     *     // ... data to create a EventRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRegistration we want to update
     *   }
     * })
     */
    upsert<T extends EventRegistrationUpsertArgs>(args: Prisma.SelectSubset<T, EventRegistrationUpsertArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationCountArgs} args - Arguments to filter EventRegistrations to count.
     * @example
     * // Count the number of EventRegistrations
     * const count = await prisma.eventRegistration.count({
     *   where: {
     *     // ... the filter for the EventRegistrations we want to count
     *   }
     * })
    **/
    count<T extends EventRegistrationCountArgs>(args?: Prisma.Subset<T, EventRegistrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventRegistrationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRegistrationAggregateArgs>(args: Prisma.Subset<T, EventRegistrationAggregateArgs>): Prisma.PrismaPromise<GetEventRegistrationAggregateType<T>>;
    /**
     * Group by EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventRegistrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventRegistrationGroupByArgs['orderBy'];
    } : {
        orderBy?: EventRegistrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventRegistration model
     */
    readonly fields: EventRegistrationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventRegistration.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventRegistrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.EventRegistration$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventRegistration$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EventRegistration model
 */
export interface EventRegistrationFieldRefs {
    readonly id: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly eventId: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly userId: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly paymentId: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly status: Prisma.FieldRef<"EventRegistration", 'RegistrationStatus'>;
    readonly ticketTypeId: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly ticketNumber: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly seatNumber: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly unitPrice: Prisma.FieldRef<"EventRegistration", 'Decimal'>;
    readonly quantity: Prisma.FieldRef<"EventRegistration", 'Int'>;
    readonly totalAmount: Prisma.FieldRef<"EventRegistration", 'Decimal'>;
    readonly discountCode: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly discountAmount: Prisma.FieldRef<"EventRegistration", 'Decimal'>;
    readonly dietaryRequirements: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly specialNeeds: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly emergencyContact: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly emergencyPhone: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly isCheckedIn: Prisma.FieldRef<"EventRegistration", 'Boolean'>;
    readonly checkedInAt: Prisma.FieldRef<"EventRegistration", 'DateTime'>;
    readonly checkedInBy: Prisma.FieldRef<"EventRegistration", 'String'>;
    readonly registeredAt: Prisma.FieldRef<"EventRegistration", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventRegistration", 'DateTime'>;
    readonly confirmedAt: Prisma.FieldRef<"EventRegistration", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"EventRegistration", 'DateTime'>;
}
/**
 * EventRegistration findUnique
 */
export type EventRegistrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: Prisma.EventRegistrationWhereUniqueInput;
};
/**
 * EventRegistration findUniqueOrThrow
 */
export type EventRegistrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: Prisma.EventRegistrationWhereUniqueInput;
};
/**
 * EventRegistration findFirst
 */
export type EventRegistrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * EventRegistration findFirstOrThrow
 */
export type EventRegistrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * EventRegistration findMany
 */
export type EventRegistrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which EventRegistrations to fetch.
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventRegistrations.
     */
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventRegistrations.
     */
    skip?: number;
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * EventRegistration create
 */
export type EventRegistrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a EventRegistration.
     */
    data: Prisma.XOR<Prisma.EventRegistrationCreateInput, Prisma.EventRegistrationUncheckedCreateInput>;
};
/**
 * EventRegistration createMany
 */
export type EventRegistrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRegistrations.
     */
    data: Prisma.EventRegistrationCreateManyInput | Prisma.EventRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventRegistration createManyAndReturn
 */
export type EventRegistrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: Prisma.EventRegistrationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: Prisma.EventRegistrationOmit<ExtArgs> | null;
    /**
     * The data used to create many EventRegistrations.
     */
    data: Prisma.EventRegistrationCreateManyInput | Prisma.EventRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRegistrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventRegistration update
 */
export type EventRegistrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a EventRegistration.
     */
    data: Prisma.XOR<Prisma.EventRegistrationUpdateInput, Prisma.EventRegistrationUncheckedUpdateInput>;
    /**
     * Choose, which EventRegistration to update.
     */
    where: Prisma.EventRegistrationWhereUniqueInput;
};
/**
 * EventRegistration updateMany
 */
export type EventRegistrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRegistrations.
     */
    data: Prisma.XOR<Prisma.EventRegistrationUpdateManyMutationInput, Prisma.EventRegistrationUncheckedUpdateManyInput>;
    /**
     * Filter which EventRegistrations to update
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number;
};
/**
 * EventRegistration updateManyAndReturn
 */
export type EventRegistrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: Prisma.EventRegistrationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: Prisma.EventRegistrationOmit<ExtArgs> | null;
    /**
     * The data used to update EventRegistrations.
     */
    data: Prisma.XOR<Prisma.EventRegistrationUpdateManyMutationInput, Prisma.EventRegistrationUncheckedUpdateManyInput>;
    /**
     * Filter which EventRegistrations to update
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventRegistration upsert
 */
export type EventRegistrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the EventRegistration to update in case it exists.
     */
    where: Prisma.EventRegistrationWhereUniqueInput;
    /**
     * In case the EventRegistration found by the `where` argument doesn't exist, create a new EventRegistration with this data.
     */
    create: Prisma.XOR<Prisma.EventRegistrationCreateInput, Prisma.EventRegistrationUncheckedCreateInput>;
    /**
     * In case the EventRegistration was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventRegistrationUpdateInput, Prisma.EventRegistrationUncheckedUpdateInput>;
};
/**
 * EventRegistration delete
 */
export type EventRegistrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which EventRegistration to delete.
     */
    where: Prisma.EventRegistrationWhereUniqueInput;
};
/**
 * EventRegistration deleteMany
 */
export type EventRegistrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistrations to delete
     */
    where?: Prisma.EventRegistrationWhereInput;
    /**
     * Limit how many EventRegistrations to delete.
     */
    limit?: number;
};
/**
 * EventRegistration.payments
 */
export type EventRegistration$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * EventRegistration without action
 */
export type EventRegistrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=EventRegistration.d.ts.map
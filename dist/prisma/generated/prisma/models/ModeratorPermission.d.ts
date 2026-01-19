import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ModeratorPermission
 *
 */
export type ModeratorPermissionModel = runtime.Types.Result.DefaultSelection<Prisma.$ModeratorPermissionPayload>;
export type AggregateModeratorPermission = {
    _count: ModeratorPermissionCountAggregateOutputType | null;
    _min: ModeratorPermissionMinAggregateOutputType | null;
    _max: ModeratorPermissionMaxAggregateOutputType | null;
};
export type ModeratorPermissionMinAggregateOutputType = {
    moderatorId: string | null;
    permissionId: string | null;
};
export type ModeratorPermissionMaxAggregateOutputType = {
    moderatorId: string | null;
    permissionId: string | null;
};
export type ModeratorPermissionCountAggregateOutputType = {
    moderatorId: number;
    permissionId: number;
    _all: number;
};
export type ModeratorPermissionMinAggregateInputType = {
    moderatorId?: true;
    permissionId?: true;
};
export type ModeratorPermissionMaxAggregateInputType = {
    moderatorId?: true;
    permissionId?: true;
};
export type ModeratorPermissionCountAggregateInputType = {
    moderatorId?: true;
    permissionId?: true;
    _all?: true;
};
export type ModeratorPermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ModeratorPermission to aggregate.
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: Prisma.ModeratorPermissionOrderByWithRelationInput | Prisma.ModeratorPermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ModeratorPermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ModeratorPermissions
    **/
    _count?: true | ModeratorPermissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ModeratorPermissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ModeratorPermissionMaxAggregateInputType;
};
export type GetModeratorPermissionAggregateType<T extends ModeratorPermissionAggregateArgs> = {
    [P in keyof T & keyof AggregateModeratorPermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModeratorPermission[P]> : Prisma.GetScalarType<T[P], AggregateModeratorPermission[P]>;
};
export type ModeratorPermissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeratorPermissionWhereInput;
    orderBy?: Prisma.ModeratorPermissionOrderByWithAggregationInput | Prisma.ModeratorPermissionOrderByWithAggregationInput[];
    by: Prisma.ModeratorPermissionScalarFieldEnum[] | Prisma.ModeratorPermissionScalarFieldEnum;
    having?: Prisma.ModeratorPermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModeratorPermissionCountAggregateInputType | true;
    _min?: ModeratorPermissionMinAggregateInputType;
    _max?: ModeratorPermissionMaxAggregateInputType;
};
export type ModeratorPermissionGroupByOutputType = {
    moderatorId: string;
    permissionId: string;
    _count: ModeratorPermissionCountAggregateOutputType | null;
    _min: ModeratorPermissionMinAggregateOutputType | null;
    _max: ModeratorPermissionMaxAggregateOutputType | null;
};
type GetModeratorPermissionGroupByPayload<T extends ModeratorPermissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModeratorPermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModeratorPermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModeratorPermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModeratorPermissionGroupByOutputType[P]>;
}>>;
export type ModeratorPermissionWhereInput = {
    AND?: Prisma.ModeratorPermissionWhereInput | Prisma.ModeratorPermissionWhereInput[];
    OR?: Prisma.ModeratorPermissionWhereInput[];
    NOT?: Prisma.ModeratorPermissionWhereInput | Prisma.ModeratorPermissionWhereInput[];
    moderatorId?: Prisma.StringFilter<"ModeratorPermission"> | string;
    permissionId?: Prisma.StringFilter<"ModeratorPermission"> | string;
    moderator?: Prisma.XOR<Prisma.ModeratorScalarRelationFilter, Prisma.ModeratorWhereInput>;
    permission?: Prisma.XOR<Prisma.PermissionScalarRelationFilter, Prisma.PermissionWhereInput>;
};
export type ModeratorPermissionOrderByWithRelationInput = {
    moderatorId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
    moderator?: Prisma.ModeratorOrderByWithRelationInput;
    permission?: Prisma.PermissionOrderByWithRelationInput;
};
export type ModeratorPermissionWhereUniqueInput = Prisma.AtLeast<{
    moderatorId_permissionId?: Prisma.ModeratorPermissionModeratorIdPermissionIdCompoundUniqueInput;
    AND?: Prisma.ModeratorPermissionWhereInput | Prisma.ModeratorPermissionWhereInput[];
    OR?: Prisma.ModeratorPermissionWhereInput[];
    NOT?: Prisma.ModeratorPermissionWhereInput | Prisma.ModeratorPermissionWhereInput[];
    moderatorId?: Prisma.StringFilter<"ModeratorPermission"> | string;
    permissionId?: Prisma.StringFilter<"ModeratorPermission"> | string;
    moderator?: Prisma.XOR<Prisma.ModeratorScalarRelationFilter, Prisma.ModeratorWhereInput>;
    permission?: Prisma.XOR<Prisma.PermissionScalarRelationFilter, Prisma.PermissionWhereInput>;
}, "moderatorId_permissionId">;
export type ModeratorPermissionOrderByWithAggregationInput = {
    moderatorId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
    _count?: Prisma.ModeratorPermissionCountOrderByAggregateInput;
    _max?: Prisma.ModeratorPermissionMaxOrderByAggregateInput;
    _min?: Prisma.ModeratorPermissionMinOrderByAggregateInput;
};
export type ModeratorPermissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModeratorPermissionScalarWhereWithAggregatesInput | Prisma.ModeratorPermissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModeratorPermissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModeratorPermissionScalarWhereWithAggregatesInput | Prisma.ModeratorPermissionScalarWhereWithAggregatesInput[];
    moderatorId?: Prisma.StringWithAggregatesFilter<"ModeratorPermission"> | string;
    permissionId?: Prisma.StringWithAggregatesFilter<"ModeratorPermission"> | string;
};
export type ModeratorPermissionCreateInput = {
    moderator: Prisma.ModeratorCreateNestedOneWithoutModeratorPermissionsInput;
    permission: Prisma.PermissionCreateNestedOneWithoutModeratorPermissionsInput;
};
export type ModeratorPermissionUncheckedCreateInput = {
    moderatorId: string;
    permissionId: string;
};
export type ModeratorPermissionUpdateInput = {
    moderator?: Prisma.ModeratorUpdateOneRequiredWithoutModeratorPermissionsNestedInput;
    permission?: Prisma.PermissionUpdateOneRequiredWithoutModeratorPermissionsNestedInput;
};
export type ModeratorPermissionUncheckedUpdateInput = {
    moderatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionCreateManyInput = {
    moderatorId: string;
    permissionId: string;
};
export type ModeratorPermissionUpdateManyMutationInput = {};
export type ModeratorPermissionUncheckedUpdateManyInput = {
    moderatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionListRelationFilter = {
    every?: Prisma.ModeratorPermissionWhereInput;
    some?: Prisma.ModeratorPermissionWhereInput;
    none?: Prisma.ModeratorPermissionWhereInput;
};
export type ModeratorPermissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModeratorPermissionModeratorIdPermissionIdCompoundUniqueInput = {
    moderatorId: string;
    permissionId: string;
};
export type ModeratorPermissionCountOrderByAggregateInput = {
    moderatorId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type ModeratorPermissionMaxOrderByAggregateInput = {
    moderatorId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type ModeratorPermissionMinOrderByAggregateInput = {
    moderatorId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type ModeratorPermissionCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput> | Prisma.ModeratorPermissionCreateWithoutPermissionInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput | Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
};
export type ModeratorPermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput> | Prisma.ModeratorPermissionCreateWithoutPermissionInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput | Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
};
export type ModeratorPermissionUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput> | Prisma.ModeratorPermissionCreateWithoutPermissionInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput | Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyPermissionInputEnvelope;
    set?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    disconnect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    delete?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    update?: Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.ModeratorPermissionUpdateManyWithWhereWithoutPermissionInput | Prisma.ModeratorPermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
};
export type ModeratorPermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput> | Prisma.ModeratorPermissionCreateWithoutPermissionInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput | Prisma.ModeratorPermissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyPermissionInputEnvelope;
    set?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    disconnect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    delete?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    update?: Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.ModeratorPermissionUpdateManyWithWhereWithoutPermissionInput | Prisma.ModeratorPermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
};
export type ModeratorPermissionCreateNestedManyWithoutModeratorInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput> | Prisma.ModeratorPermissionCreateWithoutModeratorInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput | Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyModeratorInputEnvelope;
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
};
export type ModeratorPermissionUncheckedCreateNestedManyWithoutModeratorInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput> | Prisma.ModeratorPermissionCreateWithoutModeratorInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput | Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyModeratorInputEnvelope;
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
};
export type ModeratorPermissionUpdateManyWithoutModeratorNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput> | Prisma.ModeratorPermissionCreateWithoutModeratorInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput | Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput[];
    upsert?: Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutModeratorInput | Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutModeratorInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyModeratorInputEnvelope;
    set?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    disconnect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    delete?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    update?: Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutModeratorInput | Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutModeratorInput[];
    updateMany?: Prisma.ModeratorPermissionUpdateManyWithWhereWithoutModeratorInput | Prisma.ModeratorPermissionUpdateManyWithWhereWithoutModeratorInput[];
    deleteMany?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
};
export type ModeratorPermissionUncheckedUpdateManyWithoutModeratorNestedInput = {
    create?: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput> | Prisma.ModeratorPermissionCreateWithoutModeratorInput[] | Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput[];
    connectOrCreate?: Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput | Prisma.ModeratorPermissionCreateOrConnectWithoutModeratorInput[];
    upsert?: Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutModeratorInput | Prisma.ModeratorPermissionUpsertWithWhereUniqueWithoutModeratorInput[];
    createMany?: Prisma.ModeratorPermissionCreateManyModeratorInputEnvelope;
    set?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    disconnect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    delete?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    connect?: Prisma.ModeratorPermissionWhereUniqueInput | Prisma.ModeratorPermissionWhereUniqueInput[];
    update?: Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutModeratorInput | Prisma.ModeratorPermissionUpdateWithWhereUniqueWithoutModeratorInput[];
    updateMany?: Prisma.ModeratorPermissionUpdateManyWithWhereWithoutModeratorInput | Prisma.ModeratorPermissionUpdateManyWithWhereWithoutModeratorInput[];
    deleteMany?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
};
export type ModeratorPermissionCreateWithoutPermissionInput = {
    moderator: Prisma.ModeratorCreateNestedOneWithoutModeratorPermissionsInput;
};
export type ModeratorPermissionUncheckedCreateWithoutPermissionInput = {
    moderatorId: string;
};
export type ModeratorPermissionCreateOrConnectWithoutPermissionInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput>;
};
export type ModeratorPermissionCreateManyPermissionInputEnvelope = {
    data: Prisma.ModeratorPermissionCreateManyPermissionInput | Prisma.ModeratorPermissionCreateManyPermissionInput[];
    skipDuplicates?: boolean;
};
export type ModeratorPermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModeratorPermissionUpdateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedUpdateWithoutPermissionInput>;
    create: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedCreateWithoutPermissionInput>;
};
export type ModeratorPermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateWithoutPermissionInput, Prisma.ModeratorPermissionUncheckedUpdateWithoutPermissionInput>;
};
export type ModeratorPermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: Prisma.ModeratorPermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateManyMutationInput, Prisma.ModeratorPermissionUncheckedUpdateManyWithoutPermissionInput>;
};
export type ModeratorPermissionScalarWhereInput = {
    AND?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
    OR?: Prisma.ModeratorPermissionScalarWhereInput[];
    NOT?: Prisma.ModeratorPermissionScalarWhereInput | Prisma.ModeratorPermissionScalarWhereInput[];
    moderatorId?: Prisma.StringFilter<"ModeratorPermission"> | string;
    permissionId?: Prisma.StringFilter<"ModeratorPermission"> | string;
};
export type ModeratorPermissionCreateWithoutModeratorInput = {
    permission: Prisma.PermissionCreateNestedOneWithoutModeratorPermissionsInput;
};
export type ModeratorPermissionUncheckedCreateWithoutModeratorInput = {
    permissionId: string;
};
export type ModeratorPermissionCreateOrConnectWithoutModeratorInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput>;
};
export type ModeratorPermissionCreateManyModeratorInputEnvelope = {
    data: Prisma.ModeratorPermissionCreateManyModeratorInput | Prisma.ModeratorPermissionCreateManyModeratorInput[];
    skipDuplicates?: boolean;
};
export type ModeratorPermissionUpsertWithWhereUniqueWithoutModeratorInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModeratorPermissionUpdateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedUpdateWithoutModeratorInput>;
    create: Prisma.XOR<Prisma.ModeratorPermissionCreateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedCreateWithoutModeratorInput>;
};
export type ModeratorPermissionUpdateWithWhereUniqueWithoutModeratorInput = {
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateWithoutModeratorInput, Prisma.ModeratorPermissionUncheckedUpdateWithoutModeratorInput>;
};
export type ModeratorPermissionUpdateManyWithWhereWithoutModeratorInput = {
    where: Prisma.ModeratorPermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateManyMutationInput, Prisma.ModeratorPermissionUncheckedUpdateManyWithoutModeratorInput>;
};
export type ModeratorPermissionCreateManyPermissionInput = {
    moderatorId: string;
};
export type ModeratorPermissionUpdateWithoutPermissionInput = {
    moderator?: Prisma.ModeratorUpdateOneRequiredWithoutModeratorPermissionsNestedInput;
};
export type ModeratorPermissionUncheckedUpdateWithoutPermissionInput = {
    moderatorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionUncheckedUpdateManyWithoutPermissionInput = {
    moderatorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionCreateManyModeratorInput = {
    permissionId: string;
};
export type ModeratorPermissionUpdateWithoutModeratorInput = {
    permission?: Prisma.PermissionUpdateOneRequiredWithoutModeratorPermissionsNestedInput;
};
export type ModeratorPermissionUncheckedUpdateWithoutModeratorInput = {
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionUncheckedUpdateManyWithoutModeratorInput = {
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ModeratorPermissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    moderatorId?: boolean;
    permissionId?: boolean;
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderatorPermission"]>;
export type ModeratorPermissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    moderatorId?: boolean;
    permissionId?: boolean;
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderatorPermission"]>;
export type ModeratorPermissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    moderatorId?: boolean;
    permissionId?: boolean;
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moderatorPermission"]>;
export type ModeratorPermissionSelectScalar = {
    moderatorId?: boolean;
    permissionId?: boolean;
};
export type ModeratorPermissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"moderatorId" | "permissionId", ExtArgs["result"]["moderatorPermission"]>;
export type ModeratorPermissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
};
export type ModeratorPermissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
};
export type ModeratorPermissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moderator?: boolean | Prisma.ModeratorDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.PermissionDefaultArgs<ExtArgs>;
};
export type $ModeratorPermissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ModeratorPermission";
    objects: {
        moderator: Prisma.$ModeratorPayload<ExtArgs>;
        permission: Prisma.$PermissionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        moderatorId: string;
        permissionId: string;
    }, ExtArgs["result"]["moderatorPermission"]>;
    composites: {};
};
export type ModeratorPermissionGetPayload<S extends boolean | null | undefined | ModeratorPermissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload, S>;
export type ModeratorPermissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModeratorPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModeratorPermissionCountAggregateInputType | true;
};
export interface ModeratorPermissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ModeratorPermission'];
        meta: {
            name: 'ModeratorPermission';
        };
    };
    /**
     * Find zero or one ModeratorPermission that matches the filter.
     * @param {ModeratorPermissionFindUniqueArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeratorPermissionFindUniqueArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ModeratorPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeratorPermissionFindUniqueOrThrowArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeratorPermissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ModeratorPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindFirstArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeratorPermissionFindFirstArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ModeratorPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindFirstOrThrowArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeratorPermissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ModeratorPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeratorPermissions
     * const moderatorPermissions = await prisma.moderatorPermission.findMany()
     *
     * // Get first 10 ModeratorPermissions
     * const moderatorPermissions = await prisma.moderatorPermission.findMany({ take: 10 })
     *
     * // Only select the `moderatorId`
     * const moderatorPermissionWithModeratorIdOnly = await prisma.moderatorPermission.findMany({ select: { moderatorId: true } })
     *
     */
    findMany<T extends ModeratorPermissionFindManyArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ModeratorPermission.
     * @param {ModeratorPermissionCreateArgs} args - Arguments to create a ModeratorPermission.
     * @example
     * // Create one ModeratorPermission
     * const ModeratorPermission = await prisma.moderatorPermission.create({
     *   data: {
     *     // ... data to create a ModeratorPermission
     *   }
     * })
     *
     */
    create<T extends ModeratorPermissionCreateArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionCreateArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ModeratorPermissions.
     * @param {ModeratorPermissionCreateManyArgs} args - Arguments to create many ModeratorPermissions.
     * @example
     * // Create many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ModeratorPermissionCreateManyArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ModeratorPermissions and returns the data saved in the database.
     * @param {ModeratorPermissionCreateManyAndReturnArgs} args - Arguments to create many ModeratorPermissions.
     * @example
     * // Create many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ModeratorPermissions and only return the `moderatorId`
     * const moderatorPermissionWithModeratorIdOnly = await prisma.moderatorPermission.createManyAndReturn({
     *   select: { moderatorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ModeratorPermissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ModeratorPermission.
     * @param {ModeratorPermissionDeleteArgs} args - Arguments to delete one ModeratorPermission.
     * @example
     * // Delete one ModeratorPermission
     * const ModeratorPermission = await prisma.moderatorPermission.delete({
     *   where: {
     *     // ... filter to delete one ModeratorPermission
     *   }
     * })
     *
     */
    delete<T extends ModeratorPermissionDeleteArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionDeleteArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ModeratorPermission.
     * @param {ModeratorPermissionUpdateArgs} args - Arguments to update one ModeratorPermission.
     * @example
     * // Update one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ModeratorPermissionUpdateArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionUpdateArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ModeratorPermissions.
     * @param {ModeratorPermissionDeleteManyArgs} args - Arguments to filter ModeratorPermissions to delete.
     * @example
     * // Delete a few ModeratorPermissions
     * const { count } = await prisma.moderatorPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ModeratorPermissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModeratorPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ModeratorPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ModeratorPermissionUpdateManyArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ModeratorPermissions and returns the data updated in the database.
     * @param {ModeratorPermissionUpdateManyAndReturnArgs} args - Arguments to update many ModeratorPermissions.
     * @example
     * // Update many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ModeratorPermissions and only return the `moderatorId`
     * const moderatorPermissionWithModeratorIdOnly = await prisma.moderatorPermission.updateManyAndReturn({
     *   select: { moderatorId: true },
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
    updateManyAndReturn<T extends ModeratorPermissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ModeratorPermission.
     * @param {ModeratorPermissionUpsertArgs} args - Arguments to update or create a ModeratorPermission.
     * @example
     * // Update or create a ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.upsert({
     *   create: {
     *     // ... data to create a ModeratorPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeratorPermission we want to update
     *   }
     * })
     */
    upsert<T extends ModeratorPermissionUpsertArgs>(args: Prisma.SelectSubset<T, ModeratorPermissionUpsertArgs<ExtArgs>>): Prisma.Prisma__ModeratorPermissionClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ModeratorPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionCountArgs} args - Arguments to filter ModeratorPermissions to count.
     * @example
     * // Count the number of ModeratorPermissions
     * const count = await prisma.moderatorPermission.count({
     *   where: {
     *     // ... the filter for the ModeratorPermissions we want to count
     *   }
     * })
    **/
    count<T extends ModeratorPermissionCountArgs>(args?: Prisma.Subset<T, ModeratorPermissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModeratorPermissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ModeratorPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeratorPermissionAggregateArgs>(args: Prisma.Subset<T, ModeratorPermissionAggregateArgs>): Prisma.PrismaPromise<GetModeratorPermissionAggregateType<T>>;
    /**
     * Group by ModeratorPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ModeratorPermissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModeratorPermissionGroupByArgs['orderBy'];
    } : {
        orderBy?: ModeratorPermissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModeratorPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeratorPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ModeratorPermission model
     */
    readonly fields: ModeratorPermissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ModeratorPermission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ModeratorPermissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    moderator<T extends Prisma.ModeratorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModeratorDefaultArgs<ExtArgs>>): Prisma.Prisma__ModeratorClient<runtime.Types.Result.GetResult<Prisma.$ModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    permission<T extends Prisma.PermissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PermissionDefaultArgs<ExtArgs>>): Prisma.Prisma__PermissionClient<runtime.Types.Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ModeratorPermission model
 */
export interface ModeratorPermissionFieldRefs {
    readonly moderatorId: Prisma.FieldRef<"ModeratorPermission", 'String'>;
    readonly permissionId: Prisma.FieldRef<"ModeratorPermission", 'String'>;
}
/**
 * ModeratorPermission findUnique
 */
export type ModeratorPermissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where: Prisma.ModeratorPermissionWhereUniqueInput;
};
/**
 * ModeratorPermission findUniqueOrThrow
 */
export type ModeratorPermissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where: Prisma.ModeratorPermissionWhereUniqueInput;
};
/**
 * ModeratorPermission findFirst
 */
export type ModeratorPermissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: Prisma.ModeratorPermissionOrderByWithRelationInput | Prisma.ModeratorPermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ModeratorPermissions.
     */
    cursor?: Prisma.ModeratorPermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ModeratorPermissions.
     */
    distinct?: Prisma.ModeratorPermissionScalarFieldEnum | Prisma.ModeratorPermissionScalarFieldEnum[];
};
/**
 * ModeratorPermission findFirstOrThrow
 */
export type ModeratorPermissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: Prisma.ModeratorPermissionOrderByWithRelationInput | Prisma.ModeratorPermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ModeratorPermissions.
     */
    cursor?: Prisma.ModeratorPermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ModeratorPermissions.
     */
    distinct?: Prisma.ModeratorPermissionScalarFieldEnum | Prisma.ModeratorPermissionScalarFieldEnum[];
};
/**
 * ModeratorPermission findMany
 */
export type ModeratorPermissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter, which ModeratorPermissions to fetch.
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: Prisma.ModeratorPermissionOrderByWithRelationInput | Prisma.ModeratorPermissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ModeratorPermissions.
     */
    cursor?: Prisma.ModeratorPermissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number;
    distinct?: Prisma.ModeratorPermissionScalarFieldEnum | Prisma.ModeratorPermissionScalarFieldEnum[];
};
/**
 * ModeratorPermission create
 */
export type ModeratorPermissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a ModeratorPermission.
     */
    data: Prisma.XOR<Prisma.ModeratorPermissionCreateInput, Prisma.ModeratorPermissionUncheckedCreateInput>;
};
/**
 * ModeratorPermission createMany
 */
export type ModeratorPermissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModeratorPermissions.
     */
    data: Prisma.ModeratorPermissionCreateManyInput | Prisma.ModeratorPermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ModeratorPermission createManyAndReturn
 */
export type ModeratorPermissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * The data used to create many ModeratorPermissions.
     */
    data: Prisma.ModeratorPermissionCreateManyInput | Prisma.ModeratorPermissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ModeratorPermission update
 */
export type ModeratorPermissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a ModeratorPermission.
     */
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateInput, Prisma.ModeratorPermissionUncheckedUpdateInput>;
    /**
     * Choose, which ModeratorPermission to update.
     */
    where: Prisma.ModeratorPermissionWhereUniqueInput;
};
/**
 * ModeratorPermission updateMany
 */
export type ModeratorPermissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeratorPermissions.
     */
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateManyMutationInput, Prisma.ModeratorPermissionUncheckedUpdateManyInput>;
    /**
     * Filter which ModeratorPermissions to update
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * Limit how many ModeratorPermissions to update.
     */
    limit?: number;
};
/**
 * ModeratorPermission updateManyAndReturn
 */
export type ModeratorPermissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * The data used to update ModeratorPermissions.
     */
    data: Prisma.XOR<Prisma.ModeratorPermissionUpdateManyMutationInput, Prisma.ModeratorPermissionUncheckedUpdateManyInput>;
    /**
     * Filter which ModeratorPermissions to update
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * Limit how many ModeratorPermissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ModeratorPermission upsert
 */
export type ModeratorPermissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the ModeratorPermission to update in case it exists.
     */
    where: Prisma.ModeratorPermissionWhereUniqueInput;
    /**
     * In case the ModeratorPermission found by the `where` argument doesn't exist, create a new ModeratorPermission with this data.
     */
    create: Prisma.XOR<Prisma.ModeratorPermissionCreateInput, Prisma.ModeratorPermissionUncheckedCreateInput>;
    /**
     * In case the ModeratorPermission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ModeratorPermissionUpdateInput, Prisma.ModeratorPermissionUncheckedUpdateInput>;
};
/**
 * ModeratorPermission delete
 */
export type ModeratorPermissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
    /**
     * Filter which ModeratorPermission to delete.
     */
    where: Prisma.ModeratorPermissionWhereUniqueInput;
};
/**
 * ModeratorPermission deleteMany
 */
export type ModeratorPermissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ModeratorPermissions to delete
     */
    where?: Prisma.ModeratorPermissionWhereInput;
    /**
     * Limit how many ModeratorPermissions to delete.
     */
    limit?: number;
};
/**
 * ModeratorPermission without action
 */
export type ModeratorPermissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: Prisma.ModeratorPermissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: Prisma.ModeratorPermissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ModeratorPermissionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ModeratorPermission.d.ts.map
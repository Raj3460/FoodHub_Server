import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Provider
 *
 */
export type ProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$ProviderPayload>;
export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null;
    _avg: ProviderAvgAggregateOutputType | null;
    _sum: ProviderSumAggregateOutputType | null;
    _min: ProviderMinAggregateOutputType | null;
    _max: ProviderMaxAggregateOutputType | null;
};
export type ProviderAvgAggregateOutputType = {
    deliveryTimeMin: number | null;
    deliveryTimeMax: number | null;
    deliveryFee: number | null;
    minOrderAmount: number | null;
    rating: number | null;
    totalReviews: number | null;
    viewCount: number | null;
};
export type ProviderSumAggregateOutputType = {
    deliveryTimeMin: number | null;
    deliveryTimeMax: number | null;
    deliveryFee: number | null;
    minOrderAmount: number | null;
    rating: number | null;
    totalReviews: number | null;
    viewCount: number | null;
};
export type ProviderMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    restaurantName: string | null;
    branch: string | null;
    description: string | null;
    contactPhone: string | null;
    contactEmail: string | null;
    address: string | null;
    city: string | null;
    area: string | null;
    isOpen: boolean | null;
    openingTime: string | null;
    closingTime: string | null;
    weeklyOff: string | null;
    deliveryTimeMin: number | null;
    deliveryTimeMax: number | null;
    deliveryFee: number | null;
    minOrderAmount: number | null;
    logo: string | null;
    coverImage: string | null;
    isApproved: boolean | null;
    isFeatured: boolean | null;
    rating: number | null;
    totalReviews: number | null;
    viewCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProviderMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    restaurantName: string | null;
    branch: string | null;
    description: string | null;
    contactPhone: string | null;
    contactEmail: string | null;
    address: string | null;
    city: string | null;
    area: string | null;
    isOpen: boolean | null;
    openingTime: string | null;
    closingTime: string | null;
    weeklyOff: string | null;
    deliveryTimeMin: number | null;
    deliveryTimeMax: number | null;
    deliveryFee: number | null;
    minOrderAmount: number | null;
    logo: string | null;
    coverImage: string | null;
    isApproved: boolean | null;
    isFeatured: boolean | null;
    rating: number | null;
    totalReviews: number | null;
    viewCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProviderCountAggregateOutputType = {
    id: number;
    userId: number;
    restaurantName: number;
    branch: number;
    description: number;
    contactPhone: number;
    contactEmail: number;
    address: number;
    city: number;
    area: number;
    isOpen: number;
    openingTime: number;
    closingTime: number;
    weeklyOff: number;
    cuisineType: number;
    deliveryTimeMin: number;
    deliveryTimeMax: number;
    deliveryFee: number;
    minOrderAmount: number;
    logo: number;
    coverImage: number;
    isApproved: number;
    isFeatured: number;
    rating: number;
    totalReviews: number;
    viewCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProviderAvgAggregateInputType = {
    deliveryTimeMin?: true;
    deliveryTimeMax?: true;
    deliveryFee?: true;
    minOrderAmount?: true;
    rating?: true;
    totalReviews?: true;
    viewCount?: true;
};
export type ProviderSumAggregateInputType = {
    deliveryTimeMin?: true;
    deliveryTimeMax?: true;
    deliveryFee?: true;
    minOrderAmount?: true;
    rating?: true;
    totalReviews?: true;
    viewCount?: true;
};
export type ProviderMinAggregateInputType = {
    id?: true;
    userId?: true;
    restaurantName?: true;
    branch?: true;
    description?: true;
    contactPhone?: true;
    contactEmail?: true;
    address?: true;
    city?: true;
    area?: true;
    isOpen?: true;
    openingTime?: true;
    closingTime?: true;
    weeklyOff?: true;
    deliveryTimeMin?: true;
    deliveryTimeMax?: true;
    deliveryFee?: true;
    minOrderAmount?: true;
    logo?: true;
    coverImage?: true;
    isApproved?: true;
    isFeatured?: true;
    rating?: true;
    totalReviews?: true;
    viewCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProviderMaxAggregateInputType = {
    id?: true;
    userId?: true;
    restaurantName?: true;
    branch?: true;
    description?: true;
    contactPhone?: true;
    contactEmail?: true;
    address?: true;
    city?: true;
    area?: true;
    isOpen?: true;
    openingTime?: true;
    closingTime?: true;
    weeklyOff?: true;
    deliveryTimeMin?: true;
    deliveryTimeMax?: true;
    deliveryFee?: true;
    minOrderAmount?: true;
    logo?: true;
    coverImage?: true;
    isApproved?: true;
    isFeatured?: true;
    rating?: true;
    totalReviews?: true;
    viewCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProviderCountAggregateInputType = {
    id?: true;
    userId?: true;
    restaurantName?: true;
    branch?: true;
    description?: true;
    contactPhone?: true;
    contactEmail?: true;
    address?: true;
    city?: true;
    area?: true;
    isOpen?: true;
    openingTime?: true;
    closingTime?: true;
    weeklyOff?: true;
    cuisineType?: true;
    deliveryTimeMin?: true;
    deliveryTimeMax?: true;
    deliveryFee?: true;
    minOrderAmount?: true;
    logo?: true;
    coverImage?: true;
    isApproved?: true;
    isFeatured?: true;
    rating?: true;
    totalReviews?: true;
    viewCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Providers to fetch.
     */
    orderBy?: Prisma.ProviderOrderByWithRelationInput | Prisma.ProviderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProviderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType;
};
export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProvider[P]> : Prisma.GetScalarType<T[P], AggregateProvider[P]>;
};
export type ProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProviderWhereInput;
    orderBy?: Prisma.ProviderOrderByWithAggregationInput | Prisma.ProviderOrderByWithAggregationInput[];
    by: Prisma.ProviderScalarFieldEnum[] | Prisma.ProviderScalarFieldEnum;
    having?: Prisma.ProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProviderCountAggregateInputType | true;
    _avg?: ProviderAvgAggregateInputType;
    _sum?: ProviderSumAggregateInputType;
    _min?: ProviderMinAggregateInputType;
    _max?: ProviderMaxAggregateInputType;
};
export type ProviderGroupByOutputType = {
    id: string;
    userId: string;
    restaurantName: string;
    branch: string | null;
    description: string | null;
    contactPhone: string;
    contactEmail: string | null;
    address: string | null;
    city: string | null;
    area: string | null;
    isOpen: boolean;
    openingTime: string | null;
    closingTime: string | null;
    weeklyOff: string | null;
    cuisineType: $Enums.CuisineType[];
    deliveryTimeMin: number | null;
    deliveryTimeMax: number | null;
    deliveryFee: number;
    minOrderAmount: number;
    logo: string | null;
    coverImage: string | null;
    isApproved: boolean;
    isFeatured: boolean;
    rating: number;
    totalReviews: number;
    viewCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProviderCountAggregateOutputType | null;
    _avg: ProviderAvgAggregateOutputType | null;
    _sum: ProviderSumAggregateOutputType | null;
    _min: ProviderMinAggregateOutputType | null;
    _max: ProviderMaxAggregateOutputType | null;
};
export type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProviderGroupByOutputType[P]>;
}>>;
export type ProviderWhereInput = {
    AND?: Prisma.ProviderWhereInput | Prisma.ProviderWhereInput[];
    OR?: Prisma.ProviderWhereInput[];
    NOT?: Prisma.ProviderWhereInput | Prisma.ProviderWhereInput[];
    id?: Prisma.StringFilter<"Provider"> | string;
    userId?: Prisma.StringFilter<"Provider"> | string;
    restaurantName?: Prisma.StringFilter<"Provider"> | string;
    branch?: Prisma.StringNullableFilter<"Provider"> | string | null;
    description?: Prisma.StringNullableFilter<"Provider"> | string | null;
    contactPhone?: Prisma.StringFilter<"Provider"> | string;
    contactEmail?: Prisma.StringNullableFilter<"Provider"> | string | null;
    address?: Prisma.StringNullableFilter<"Provider"> | string | null;
    city?: Prisma.StringNullableFilter<"Provider"> | string | null;
    area?: Prisma.StringNullableFilter<"Provider"> | string | null;
    isOpen?: Prisma.BoolFilter<"Provider"> | boolean;
    openingTime?: Prisma.StringNullableFilter<"Provider"> | string | null;
    closingTime?: Prisma.StringNullableFilter<"Provider"> | string | null;
    weeklyOff?: Prisma.StringNullableFilter<"Provider"> | string | null;
    cuisineType?: Prisma.EnumCuisineTypeNullableListFilter<"Provider">;
    deliveryTimeMin?: Prisma.IntNullableFilter<"Provider"> | number | null;
    deliveryTimeMax?: Prisma.IntNullableFilter<"Provider"> | number | null;
    deliveryFee?: Prisma.FloatFilter<"Provider"> | number;
    minOrderAmount?: Prisma.FloatFilter<"Provider"> | number;
    logo?: Prisma.StringNullableFilter<"Provider"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"Provider"> | string | null;
    isApproved?: Prisma.BoolFilter<"Provider"> | boolean;
    isFeatured?: Prisma.BoolFilter<"Provider"> | boolean;
    rating?: Prisma.FloatFilter<"Provider"> | number;
    totalReviews?: Prisma.IntFilter<"Provider"> | number;
    viewCount?: Prisma.IntFilter<"Provider"> | number;
    createdAt?: Prisma.DateTimeFilter<"Provider"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Provider"> | Date | string;
    meals?: Prisma.MealListRelationFilter;
    carts?: Prisma.CartListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
};
export type ProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    branch?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    openingTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    closingTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    weeklyOff?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuisineType?: Prisma.SortOrder;
    deliveryTimeMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    meals?: Prisma.MealOrderByRelationAggregateInput;
    carts?: Prisma.CartOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ProviderWhereInput | Prisma.ProviderWhereInput[];
    OR?: Prisma.ProviderWhereInput[];
    NOT?: Prisma.ProviderWhereInput | Prisma.ProviderWhereInput[];
    restaurantName?: Prisma.StringFilter<"Provider"> | string;
    branch?: Prisma.StringNullableFilter<"Provider"> | string | null;
    description?: Prisma.StringNullableFilter<"Provider"> | string | null;
    contactPhone?: Prisma.StringFilter<"Provider"> | string;
    contactEmail?: Prisma.StringNullableFilter<"Provider"> | string | null;
    address?: Prisma.StringNullableFilter<"Provider"> | string | null;
    city?: Prisma.StringNullableFilter<"Provider"> | string | null;
    area?: Prisma.StringNullableFilter<"Provider"> | string | null;
    isOpen?: Prisma.BoolFilter<"Provider"> | boolean;
    openingTime?: Prisma.StringNullableFilter<"Provider"> | string | null;
    closingTime?: Prisma.StringNullableFilter<"Provider"> | string | null;
    weeklyOff?: Prisma.StringNullableFilter<"Provider"> | string | null;
    cuisineType?: Prisma.EnumCuisineTypeNullableListFilter<"Provider">;
    deliveryTimeMin?: Prisma.IntNullableFilter<"Provider"> | number | null;
    deliveryTimeMax?: Prisma.IntNullableFilter<"Provider"> | number | null;
    deliveryFee?: Prisma.FloatFilter<"Provider"> | number;
    minOrderAmount?: Prisma.FloatFilter<"Provider"> | number;
    logo?: Prisma.StringNullableFilter<"Provider"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"Provider"> | string | null;
    isApproved?: Prisma.BoolFilter<"Provider"> | boolean;
    isFeatured?: Prisma.BoolFilter<"Provider"> | boolean;
    rating?: Prisma.FloatFilter<"Provider"> | number;
    totalReviews?: Prisma.IntFilter<"Provider"> | number;
    viewCount?: Prisma.IntFilter<"Provider"> | number;
    createdAt?: Prisma.DateTimeFilter<"Provider"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Provider"> | Date | string;
    meals?: Prisma.MealListRelationFilter;
    carts?: Prisma.CartListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "userId">;
export type ProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    branch?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    openingTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    closingTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    weeklyOff?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuisineType?: Prisma.SortOrder;
    deliveryTimeMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProviderCountOrderByAggregateInput;
    _avg?: Prisma.ProviderAvgOrderByAggregateInput;
    _max?: Prisma.ProviderMaxOrderByAggregateInput;
    _min?: Prisma.ProviderMinOrderByAggregateInput;
    _sum?: Prisma.ProviderSumOrderByAggregateInput;
};
export type ProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProviderScalarWhereWithAggregatesInput | Prisma.ProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProviderScalarWhereWithAggregatesInput | Prisma.ProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Provider"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Provider"> | string;
    restaurantName?: Prisma.StringWithAggregatesFilter<"Provider"> | string;
    branch?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    contactPhone?: Prisma.StringWithAggregatesFilter<"Provider"> | string;
    contactEmail?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    area?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    isOpen?: Prisma.BoolWithAggregatesFilter<"Provider"> | boolean;
    openingTime?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    closingTime?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    weeklyOff?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    cuisineType?: Prisma.EnumCuisineTypeNullableListFilter<"Provider">;
    deliveryTimeMin?: Prisma.IntNullableWithAggregatesFilter<"Provider"> | number | null;
    deliveryTimeMax?: Prisma.IntNullableWithAggregatesFilter<"Provider"> | number | null;
    deliveryFee?: Prisma.FloatWithAggregatesFilter<"Provider"> | number;
    minOrderAmount?: Prisma.FloatWithAggregatesFilter<"Provider"> | number;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    coverImage?: Prisma.StringNullableWithAggregatesFilter<"Provider"> | string | null;
    isApproved?: Prisma.BoolWithAggregatesFilter<"Provider"> | boolean;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"Provider"> | boolean;
    rating?: Prisma.FloatWithAggregatesFilter<"Provider"> | number;
    totalReviews?: Prisma.IntWithAggregatesFilter<"Provider"> | number;
    viewCount?: Prisma.IntWithAggregatesFilter<"Provider"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Provider"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Provider"> | Date | string;
};
export type ProviderCreateInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    carts?: Prisma.CartCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
};
export type ProviderUncheckedCreateInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type ProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    carts?: Prisma.CartUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
};
export type ProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
export type ProviderCreateManyInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnumCuisineTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.CuisineType[] | Prisma.ListEnumCuisineTypeFieldRefInput<$PrismaModel> | null;
    has?: $Enums.CuisineType | Prisma.EnumCuisineTypeFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.CuisineType[] | Prisma.ListEnumCuisineTypeFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.CuisineType[] | Prisma.ListEnumCuisineTypeFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    openingTime?: Prisma.SortOrder;
    closingTime?: Prisma.SortOrder;
    weeklyOff?: Prisma.SortOrder;
    cuisineType?: Prisma.SortOrder;
    deliveryTimeMin?: Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProviderAvgOrderByAggregateInput = {
    deliveryTimeMin?: Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
};
export type ProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    openingTime?: Prisma.SortOrder;
    closingTime?: Prisma.SortOrder;
    weeklyOff?: Prisma.SortOrder;
    deliveryTimeMin?: Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    restaurantName?: Prisma.SortOrder;
    branch?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    contactPhone?: Prisma.SortOrder;
    contactEmail?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    isOpen?: Prisma.SortOrder;
    openingTime?: Prisma.SortOrder;
    closingTime?: Prisma.SortOrder;
    weeklyOff?: Prisma.SortOrder;
    deliveryTimeMin?: Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProviderSumOrderByAggregateInput = {
    deliveryTimeMin?: Prisma.SortOrder;
    deliveryTimeMax?: Prisma.SortOrder;
    deliveryFee?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    viewCount?: Prisma.SortOrder;
};
export type ProviderScalarRelationFilter = {
    is?: Prisma.ProviderWhereInput;
    isNot?: Prisma.ProviderWhereInput;
};
export type ProviderNullableScalarRelationFilter = {
    is?: Prisma.ProviderWhereInput | null;
    isNot?: Prisma.ProviderWhereInput | null;
};
export type ProviderCreatecuisineTypeInput = {
    set: $Enums.CuisineType[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ProviderUpdatecuisineTypeInput = {
    set?: $Enums.CuisineType[];
    push?: $Enums.CuisineType | $Enums.CuisineType[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ProviderCreateNestedOneWithoutMealsInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutMealsInput, Prisma.ProviderUncheckedCreateWithoutMealsInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutMealsInput;
    connect?: Prisma.ProviderWhereUniqueInput;
};
export type ProviderUpdateOneRequiredWithoutMealsNestedInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutMealsInput, Prisma.ProviderUncheckedCreateWithoutMealsInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutMealsInput;
    upsert?: Prisma.ProviderUpsertWithoutMealsInput;
    connect?: Prisma.ProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProviderUpdateToOneWithWhereWithoutMealsInput, Prisma.ProviderUpdateWithoutMealsInput>, Prisma.ProviderUncheckedUpdateWithoutMealsInput>;
};
export type ProviderCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutOrdersInput, Prisma.ProviderUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.ProviderWhereUniqueInput;
};
export type ProviderUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutOrdersInput, Prisma.ProviderUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.ProviderUpsertWithoutOrdersInput;
    connect?: Prisma.ProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProviderUpdateToOneWithWhereWithoutOrdersInput, Prisma.ProviderUpdateWithoutOrdersInput>, Prisma.ProviderUncheckedUpdateWithoutOrdersInput>;
};
export type ProviderCreateNestedOneWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutCartsInput, Prisma.ProviderUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutCartsInput;
    connect?: Prisma.ProviderWhereUniqueInput;
};
export type ProviderUpdateOneWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.ProviderCreateWithoutCartsInput, Prisma.ProviderUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.ProviderCreateOrConnectWithoutCartsInput;
    upsert?: Prisma.ProviderUpsertWithoutCartsInput;
    disconnect?: Prisma.ProviderWhereInput | boolean;
    delete?: Prisma.ProviderWhereInput | boolean;
    connect?: Prisma.ProviderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProviderUpdateToOneWithWhereWithoutCartsInput, Prisma.ProviderUpdateWithoutCartsInput>, Prisma.ProviderUncheckedUpdateWithoutCartsInput>;
};
export type ProviderCreateWithoutMealsInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    carts?: Prisma.CartCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
};
export type ProviderUncheckedCreateWithoutMealsInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type ProviderCreateOrConnectWithoutMealsInput = {
    where: Prisma.ProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutMealsInput, Prisma.ProviderUncheckedCreateWithoutMealsInput>;
};
export type ProviderUpsertWithoutMealsInput = {
    update: Prisma.XOR<Prisma.ProviderUpdateWithoutMealsInput, Prisma.ProviderUncheckedUpdateWithoutMealsInput>;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutMealsInput, Prisma.ProviderUncheckedCreateWithoutMealsInput>;
    where?: Prisma.ProviderWhereInput;
};
export type ProviderUpdateToOneWithWhereWithoutMealsInput = {
    where?: Prisma.ProviderWhereInput;
    data: Prisma.XOR<Prisma.ProviderUpdateWithoutMealsInput, Prisma.ProviderUncheckedUpdateWithoutMealsInput>;
};
export type ProviderUpdateWithoutMealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: Prisma.CartUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
};
export type ProviderUncheckedUpdateWithoutMealsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    carts?: Prisma.CartUncheckedUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
export type ProviderCreateWithoutOrdersInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    carts?: Prisma.CartCreateNestedManyWithoutProviderInput;
};
export type ProviderUncheckedCreateWithoutOrdersInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
    carts?: Prisma.CartUncheckedCreateNestedManyWithoutProviderInput;
};
export type ProviderCreateOrConnectWithoutOrdersInput = {
    where: Prisma.ProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutOrdersInput, Prisma.ProviderUncheckedCreateWithoutOrdersInput>;
};
export type ProviderUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.ProviderUpdateWithoutOrdersInput, Prisma.ProviderUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutOrdersInput, Prisma.ProviderUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.ProviderWhereInput;
};
export type ProviderUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.ProviderWhereInput;
    data: Prisma.XOR<Prisma.ProviderUpdateWithoutOrdersInput, Prisma.ProviderUncheckedUpdateWithoutOrdersInput>;
};
export type ProviderUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    carts?: Prisma.CartUpdateManyWithoutProviderNestedInput;
};
export type ProviderUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
    carts?: Prisma.CartUncheckedUpdateManyWithoutProviderNestedInput;
};
export type ProviderCreateWithoutCartsInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderCreateNestedManyWithoutProviderInput;
};
export type ProviderUncheckedCreateWithoutCartsInput = {
    id?: string;
    userId: string;
    restaurantName: string;
    branch?: string | null;
    description?: string | null;
    contactPhone: string;
    contactEmail?: string | null;
    address?: string | null;
    city?: string | null;
    area?: string | null;
    isOpen?: boolean;
    openingTime?: string | null;
    closingTime?: string | null;
    weeklyOff?: string | null;
    cuisineType?: Prisma.ProviderCreatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: number | null;
    deliveryTimeMax?: number | null;
    deliveryFee?: number;
    minOrderAmount?: number;
    logo?: string | null;
    coverImage?: string | null;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: number;
    totalReviews?: number;
    viewCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    meals?: Prisma.MealUncheckedCreateNestedManyWithoutProviderInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutProviderInput;
};
export type ProviderCreateOrConnectWithoutCartsInput = {
    where: Prisma.ProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutCartsInput, Prisma.ProviderUncheckedCreateWithoutCartsInput>;
};
export type ProviderUpsertWithoutCartsInput = {
    update: Prisma.XOR<Prisma.ProviderUpdateWithoutCartsInput, Prisma.ProviderUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.ProviderCreateWithoutCartsInput, Prisma.ProviderUncheckedCreateWithoutCartsInput>;
    where?: Prisma.ProviderWhereInput;
};
export type ProviderUpdateToOneWithWhereWithoutCartsInput = {
    where?: Prisma.ProviderWhereInput;
    data: Prisma.XOR<Prisma.ProviderUpdateWithoutCartsInput, Prisma.ProviderUncheckedUpdateWithoutCartsInput>;
};
export type ProviderUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutProviderNestedInput;
};
export type ProviderUncheckedUpdateWithoutCartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    restaurantName?: Prisma.StringFieldUpdateOperationsInput | string;
    branch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    contactEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    area?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isOpen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    openingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closingTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weeklyOff?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuisineType?: Prisma.ProviderUpdatecuisineTypeInput | $Enums.CuisineType[];
    deliveryTimeMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryTimeMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    deliveryFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    minOrderAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    viewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    meals?: Prisma.MealUncheckedUpdateManyWithoutProviderNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutProviderNestedInput;
};
/**
 * Count Type ProviderCountOutputType
 */
export type ProviderCountOutputType = {
    meals: number;
    carts: number;
    orders: number;
};
export type ProviderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meals?: boolean | ProviderCountOutputTypeCountMealsArgs;
    carts?: boolean | ProviderCountOutputTypeCountCartsArgs;
    orders?: boolean | ProviderCountOutputTypeCountOrdersArgs;
};
/**
 * ProviderCountOutputType without action
 */
export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: Prisma.ProviderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProviderCountOutputType without action
 */
export type ProviderCountOutputTypeCountMealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MealWhereInput;
};
/**
 * ProviderCountOutputType without action
 */
export type ProviderCountOutputTypeCountCartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
};
/**
 * ProviderCountOutputType without action
 */
export type ProviderCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type ProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    restaurantName?: boolean;
    branch?: boolean;
    description?: boolean;
    contactPhone?: boolean;
    contactEmail?: boolean;
    address?: boolean;
    city?: boolean;
    area?: boolean;
    isOpen?: boolean;
    openingTime?: boolean;
    closingTime?: boolean;
    weeklyOff?: boolean;
    cuisineType?: boolean;
    deliveryTimeMin?: boolean;
    deliveryTimeMax?: boolean;
    deliveryFee?: boolean;
    minOrderAmount?: boolean;
    logo?: boolean;
    coverImage?: boolean;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: boolean;
    totalReviews?: boolean;
    viewCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    meals?: boolean | Prisma.Provider$mealsArgs<ExtArgs>;
    carts?: boolean | Prisma.Provider$cartsArgs<ExtArgs>;
    orders?: boolean | Prisma.Provider$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.ProviderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provider"]>;
export type ProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    restaurantName?: boolean;
    branch?: boolean;
    description?: boolean;
    contactPhone?: boolean;
    contactEmail?: boolean;
    address?: boolean;
    city?: boolean;
    area?: boolean;
    isOpen?: boolean;
    openingTime?: boolean;
    closingTime?: boolean;
    weeklyOff?: boolean;
    cuisineType?: boolean;
    deliveryTimeMin?: boolean;
    deliveryTimeMax?: boolean;
    deliveryFee?: boolean;
    minOrderAmount?: boolean;
    logo?: boolean;
    coverImage?: boolean;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: boolean;
    totalReviews?: boolean;
    viewCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["provider"]>;
export type ProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    restaurantName?: boolean;
    branch?: boolean;
    description?: boolean;
    contactPhone?: boolean;
    contactEmail?: boolean;
    address?: boolean;
    city?: boolean;
    area?: boolean;
    isOpen?: boolean;
    openingTime?: boolean;
    closingTime?: boolean;
    weeklyOff?: boolean;
    cuisineType?: boolean;
    deliveryTimeMin?: boolean;
    deliveryTimeMax?: boolean;
    deliveryFee?: boolean;
    minOrderAmount?: boolean;
    logo?: boolean;
    coverImage?: boolean;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: boolean;
    totalReviews?: boolean;
    viewCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["provider"]>;
export type ProviderSelectScalar = {
    id?: boolean;
    userId?: boolean;
    restaurantName?: boolean;
    branch?: boolean;
    description?: boolean;
    contactPhone?: boolean;
    contactEmail?: boolean;
    address?: boolean;
    city?: boolean;
    area?: boolean;
    isOpen?: boolean;
    openingTime?: boolean;
    closingTime?: boolean;
    weeklyOff?: boolean;
    cuisineType?: boolean;
    deliveryTimeMin?: boolean;
    deliveryTimeMax?: boolean;
    deliveryFee?: boolean;
    minOrderAmount?: boolean;
    logo?: boolean;
    coverImage?: boolean;
    isApproved?: boolean;
    isFeatured?: boolean;
    rating?: boolean;
    totalReviews?: boolean;
    viewCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "restaurantName" | "branch" | "description" | "contactPhone" | "contactEmail" | "address" | "city" | "area" | "isOpen" | "openingTime" | "closingTime" | "weeklyOff" | "cuisineType" | "deliveryTimeMin" | "deliveryTimeMax" | "deliveryFee" | "minOrderAmount" | "logo" | "coverImage" | "isApproved" | "isFeatured" | "rating" | "totalReviews" | "viewCount" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>;
export type ProviderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meals?: boolean | Prisma.Provider$mealsArgs<ExtArgs>;
    carts?: boolean | Prisma.Provider$cartsArgs<ExtArgs>;
    orders?: boolean | Prisma.Provider$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.ProviderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProviderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Provider";
    objects: {
        meals: Prisma.$MealPayload<ExtArgs>[];
        carts: Prisma.$CartPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        restaurantName: string;
        branch: string | null;
        description: string | null;
        contactPhone: string;
        contactEmail: string | null;
        address: string | null;
        city: string | null;
        area: string | null;
        isOpen: boolean;
        openingTime: string | null;
        closingTime: string | null;
        weeklyOff: string | null;
        cuisineType: $Enums.CuisineType[];
        deliveryTimeMin: number | null;
        deliveryTimeMax: number | null;
        deliveryFee: number;
        minOrderAmount: number;
        logo: string | null;
        coverImage: string | null;
        isApproved: boolean;
        isFeatured: boolean;
        rating: number;
        totalReviews: number;
        viewCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["provider"]>;
    composites: {};
};
export type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProviderPayload, S>;
export type ProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProviderCountAggregateInputType | true;
};
export interface ProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Provider'];
        meta: {
            name: 'Provider';
        };
    };
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     *
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProviderFindManyArgs>(args?: Prisma.SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     *
     */
    create<T extends ProviderCreateArgs>(args: Prisma.SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     *
     */
    delete<T extends ProviderDeleteArgs>(args: Prisma.SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProviderUpdateArgs>(args: Prisma.SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: Prisma.SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__ProviderClient<runtime.Types.Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(args?: Prisma.Subset<T, ProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProviderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Prisma.Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>;
    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: ProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Provider model
     */
    readonly fields: ProviderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Provider.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meals<T extends Prisma.Provider$mealsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Provider$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carts<T extends Prisma.Provider$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Provider$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Provider$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Provider$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Provider model
 */
export interface ProviderFieldRefs {
    readonly id: Prisma.FieldRef<"Provider", 'String'>;
    readonly userId: Prisma.FieldRef<"Provider", 'String'>;
    readonly restaurantName: Prisma.FieldRef<"Provider", 'String'>;
    readonly branch: Prisma.FieldRef<"Provider", 'String'>;
    readonly description: Prisma.FieldRef<"Provider", 'String'>;
    readonly contactPhone: Prisma.FieldRef<"Provider", 'String'>;
    readonly contactEmail: Prisma.FieldRef<"Provider", 'String'>;
    readonly address: Prisma.FieldRef<"Provider", 'String'>;
    readonly city: Prisma.FieldRef<"Provider", 'String'>;
    readonly area: Prisma.FieldRef<"Provider", 'String'>;
    readonly isOpen: Prisma.FieldRef<"Provider", 'Boolean'>;
    readonly openingTime: Prisma.FieldRef<"Provider", 'String'>;
    readonly closingTime: Prisma.FieldRef<"Provider", 'String'>;
    readonly weeklyOff: Prisma.FieldRef<"Provider", 'String'>;
    readonly cuisineType: Prisma.FieldRef<"Provider", 'CuisineType[]'>;
    readonly deliveryTimeMin: Prisma.FieldRef<"Provider", 'Int'>;
    readonly deliveryTimeMax: Prisma.FieldRef<"Provider", 'Int'>;
    readonly deliveryFee: Prisma.FieldRef<"Provider", 'Float'>;
    readonly minOrderAmount: Prisma.FieldRef<"Provider", 'Float'>;
    readonly logo: Prisma.FieldRef<"Provider", 'String'>;
    readonly coverImage: Prisma.FieldRef<"Provider", 'String'>;
    readonly isApproved: Prisma.FieldRef<"Provider", 'Boolean'>;
    readonly isFeatured: Prisma.FieldRef<"Provider", 'Boolean'>;
    readonly rating: Prisma.FieldRef<"Provider", 'Float'>;
    readonly totalReviews: Prisma.FieldRef<"Provider", 'Int'>;
    readonly viewCount: Prisma.FieldRef<"Provider", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Provider", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Provider", 'DateTime'>;
}
/**
 * Provider findUnique
 */
export type ProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter, which Provider to fetch.
     */
    where: Prisma.ProviderWhereUniqueInput;
};
/**
 * Provider findUniqueOrThrow
 */
export type ProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter, which Provider to fetch.
     */
    where: Prisma.ProviderWhereUniqueInput;
};
/**
 * Provider findFirst
 */
export type ProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter, which Provider to fetch.
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Providers to fetch.
     */
    orderBy?: Prisma.ProviderOrderByWithRelationInput | Prisma.ProviderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Providers.
     */
    cursor?: Prisma.ProviderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Providers.
     */
    distinct?: Prisma.ProviderScalarFieldEnum | Prisma.ProviderScalarFieldEnum[];
};
/**
 * Provider findFirstOrThrow
 */
export type ProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter, which Provider to fetch.
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Providers to fetch.
     */
    orderBy?: Prisma.ProviderOrderByWithRelationInput | Prisma.ProviderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Providers.
     */
    cursor?: Prisma.ProviderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Providers.
     */
    distinct?: Prisma.ProviderScalarFieldEnum | Prisma.ProviderScalarFieldEnum[];
};
/**
 * Provider findMany
 */
export type ProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter, which Providers to fetch.
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Providers to fetch.
     */
    orderBy?: Prisma.ProviderOrderByWithRelationInput | Prisma.ProviderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Providers.
     */
    cursor?: Prisma.ProviderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Providers.
     */
    distinct?: Prisma.ProviderScalarFieldEnum | Prisma.ProviderScalarFieldEnum[];
};
/**
 * Provider create
 */
export type ProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Provider.
     */
    data: Prisma.XOR<Prisma.ProviderCreateInput, Prisma.ProviderUncheckedCreateInput>;
};
/**
 * Provider createMany
 */
export type ProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: Prisma.ProviderCreateManyInput | Prisma.ProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Provider createManyAndReturn
 */
export type ProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * The data used to create many Providers.
     */
    data: Prisma.ProviderCreateManyInput | Prisma.ProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Provider update
 */
export type ProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Provider.
     */
    data: Prisma.XOR<Prisma.ProviderUpdateInput, Prisma.ProviderUncheckedUpdateInput>;
    /**
     * Choose, which Provider to update.
     */
    where: Prisma.ProviderWhereUniqueInput;
};
/**
 * Provider updateMany
 */
export type ProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: Prisma.XOR<Prisma.ProviderUpdateManyMutationInput, Prisma.ProviderUncheckedUpdateManyInput>;
    /**
     * Filter which Providers to update
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * Limit how many Providers to update.
     */
    limit?: number;
};
/**
 * Provider updateManyAndReturn
 */
export type ProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * The data used to update Providers.
     */
    data: Prisma.XOR<Prisma.ProviderUpdateManyMutationInput, Prisma.ProviderUncheckedUpdateManyInput>;
    /**
     * Filter which Providers to update
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * Limit how many Providers to update.
     */
    limit?: number;
};
/**
 * Provider upsert
 */
export type ProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: Prisma.ProviderWhereUniqueInput;
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: Prisma.XOR<Prisma.ProviderCreateInput, Prisma.ProviderUncheckedCreateInput>;
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProviderUpdateInput, Prisma.ProviderUncheckedUpdateInput>;
};
/**
 * Provider delete
 */
export type ProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
    /**
     * Filter which Provider to delete.
     */
    where: Prisma.ProviderWhereUniqueInput;
};
/**
 * Provider deleteMany
 */
export type ProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: Prisma.ProviderWhereInput;
    /**
     * Limit how many Providers to delete.
     */
    limit?: number;
};
/**
 * Provider.meals
 */
export type Provider$mealsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: Prisma.MealSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Meal
     */
    omit?: Prisma.MealOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MealInclude<ExtArgs> | null;
    where?: Prisma.MealWhereInput;
    orderBy?: Prisma.MealOrderByWithRelationInput | Prisma.MealOrderByWithRelationInput[];
    cursor?: Prisma.MealWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MealScalarFieldEnum | Prisma.MealScalarFieldEnum[];
};
/**
 * Provider.carts
 */
export type Provider$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: Prisma.CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: Prisma.CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
/**
 * Provider.orders
 */
export type Provider$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Provider without action
 */
export type ProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: Prisma.ProviderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Provider
     */
    omit?: Prisma.ProviderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProviderInclude<ExtArgs> | null;
};

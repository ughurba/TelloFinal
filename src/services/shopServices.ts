import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DetailProduct, Goods, ShopGoods } from "../types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/shop",
  }),
  endpoints: (builder) => ({
    getFilteredMinMaxPrice: builder.query<
      ShopGoods,
      { minPrice: number; maxPrice: number; categoryId: number }
    >({
      query: (arg) =>
        `/filterPrice?minPrice=${arg.minPrice}&maxPrice=${arg.maxPrice}&categoryId=${arg.categoryId}`,
    }),
  }),
});

export const { useGetFilteredMinMaxPriceQuery } = shopApi;

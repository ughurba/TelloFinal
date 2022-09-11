import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Brand, Goods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/product",
  }),
  endpoints: (builder) => ({
    fetchAllGoods: builder.query<Goods[], void>({
      query: () => ``,
    }),
    getBestSellingProduct: builder.query<Goods[], void>({
      query: () => `bestSelling`,
    }),
    getNewArrivalProduct: builder.query<Goods[], void>({
      query: () => `newArrival`,
    }),
  }),
});

export const {
  useGetNewArrivalProductQuery,
  useFetchAllGoodsQuery,
  useGetBestSellingProductQuery,
} = goodsApi;

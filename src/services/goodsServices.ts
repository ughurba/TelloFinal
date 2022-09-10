import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Goods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/",
  }),
  endpoints: (builder) => ({
    fetchAllGoods: builder.query<Goods[], void>({
      query: () => `product`,
    }),
    getBestSellingProduct: builder.query<Goods[], void>({
      query: () => `product/bestSelling`,
    }),
    getNewArrivalProduct: builder.query<Goods[], void>({
      query: () => `product/newArrival`,
    }),
  }),
});

export const {
  useGetNewArrivalProductQuery,
  useFetchAllGoodsQuery,
  useGetBestSellingProductQuery,
} = goodsApi;

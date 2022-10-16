import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DetailProduct, Goods, ShopGoods } from "types";

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
    getAllRelatedProduct: builder.query<ShopGoods[], number>({
      query: (id) => `relatedProducts/${id}`,
    }),
    getOne: builder.query<DetailProduct, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetNewArrivalProductQuery,
  useFetchAllGoodsQuery,
  useGetBestSellingProductQuery,
  useGetOneQuery,
  useGetAllRelatedProductQuery,
} = goodsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DetailProduct, Goods, ShopGoods } from "../types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/shop",
  }),
  endpoints: (builder) => ({
    searchProduct: builder.mutation<ShopGoods, string>({
      query: (search) => `/search?search=${search}`,
    }),
  }),
});

export const { useSearchProductMutation } = shopApi;

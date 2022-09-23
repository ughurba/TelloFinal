import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Basket, DetailProduct, Favorites, Goods, ShopGoods } from "../types";
import { basketApi } from "./basketServices";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/shop",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    setFavorite: builder.mutation<void, Favorites>({
      query: (body) => {
        return {
          url: `/favorite`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});
export const shopExtendedApi = shopApi.injectEndpoints({
  endpoints: (build) => ({
    searchProduct: build.mutation<ShopGoods, string>({
      query: (search) => {
        return {
          url: `/search?search=${search}`,
          method: "POST",
        };
      },
    }),
  }),
});
export const { useSearchProductMutation } = shopExtendedApi;
export const { useSetFavoriteMutation } = shopApi;

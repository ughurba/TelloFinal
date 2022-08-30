import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IGoods } from "../types";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62b19376196a9e9870386a98.mockapi.io/",
  }),
  endpoints: (builder) => ({
    fetchAllGoods: builder.query<IGoods[], void>({
      query: () => `tello`,
    }),
    fetchPagintaion: builder.query<IGoods[], number>({
      query: (page) => `tello?page=${page}&limit=6`,
    }),
    getOnePhone: builder.query<IGoods, string>({
      query: (id) => `tello/${id}`,
    }),
    getSearchingGoods: builder.query<IGoods, string>({
      query: (search) => `tello?search=${search}`,
    }),
  }),
});

export const {
  useFetchPagintaionQuery,
  useFetchAllGoodsQuery,
  useGetOnePhoneQuery,
  useGetSearchingGoodsQuery,
} = goodsApi;

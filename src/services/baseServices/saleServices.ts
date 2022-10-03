import { IOrderItem, IUserPay, IOrder } from "types";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";

export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/sale",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postOrder: builder.mutation<void, Partial<IUserPay>>({
      query: (body) => {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
    }),
    getOrderItem: builder.query<IOrderItem[], string>({
      query: (id) => `/getOrderItemAll?orderId=${id}`,
    }),
  }),
});
export const extendSaleApi = saleApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSaleProduct: build.query<IOrder[], void>({
      query: () => `/getOrderAll`,
    }),
  }),
});
export const { useGetAllSaleProductQuery } = extendSaleApi;
export const { usePostOrderMutation, useGetOrderItemQuery } = saleApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAdminOrder } from "Admin/Pages/Orders/types";
import { IOrderItem } from "types";

export const saleAdminApi = createApi({
  reducerPath: "saleAdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/adminsale",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userAdminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["OrderUpdate"],
  endpoints: (builder) => ({
    getAllOrder: builder.query<IAdminOrder[], void>({
      query: () => `allOrder`,
      providesTags: ["OrderUpdate"],
    }),
    getAllOrderItem: builder.query<IOrderItem[], string>({
      query: (id) => `/OrderItem?orderId=${id}`,
    }),
    updateOrderStatus: builder.mutation<
      void,
      { orderId: number; orderStatus: number }
    >({
      query: (arg) => {
        return {
          url: `?orderId=${arg.orderId}&orderStatus=${arg.orderStatus}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["OrderUpdate"],
    }),
  }),
});
export const {
  useGetAllOrderQuery,
  useGetAllOrderItemQuery,
  useUpdateOrderStatusMutation,
} = saleAdminApi;

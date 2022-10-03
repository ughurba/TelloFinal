import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAdminOrder } from "Admin/Pages/Orders/types";

export const saleAdminApi = createApi({
  reducerPath: "saleAdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/adminsale",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllOrder: builder.query<IAdminOrder[], void>({
      query: () => `allOrder`,
    }),
  }),
});
export const { useGetAllOrderQuery } = saleAdminApi;

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";
import { Basket, CalculationBasket } from "types";
export interface AddProps {
  colorId?: number;
  storageId?: number;
  productId?: number;
}

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/basket",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // getAll: builder.query<Basket, void>({
    //   query: () => `/`,
    // }),
    addItem: builder.mutation<Basket, AddProps>({
      query: (itemId) => {
        return {
          url: `?productId=${itemId?.productId}&colorId=${itemId?.colorId}&storageId=${itemId?.storageId}`,
          method: "POST",
        };
      },
    }),
    deleteItem: builder.mutation<{ total: number }, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),

    incrementPut: builder.mutation<CalculationBasket, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "PUT",
        };
      },
    }),
    decrementPut: builder.mutation<CalculationBasket, number>({
      query: (id) => {
        return {
          url: `/minus/${id}`,
          method: "PUT",
        };
      },
    }),
  }),
});
export const extendedApi = basketApi.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<Basket, void>({
      query: () => `/`,
    }),
  }),
});
export const { useGetAllQuery } = extendedApi;
export const {
  useDeleteItemMutation,
  useIncrementPutMutation,
  useDecrementPutMutation,
  useAddItemMutation,
} = basketApi;

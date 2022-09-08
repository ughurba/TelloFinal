import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBrandAndCategory } from "../Admin/Pages/Product/types";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/product/",
  }),

  endpoints: (builder) => ({
    createProduct: builder.mutation<void, FormData>({
      query: (body) => {
        return {
          url: "createProduct",
          method: "POST",
          body,
        };
      },
    }),
    getBrandAndCategoryId: builder.query<IBrandAndCategory, void>({
      query: () => {
        return {
          url: "brandAndCategoryIds",
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetBrandAndCategoryIdQuery, useCreateProductMutation } =
  adminApi;

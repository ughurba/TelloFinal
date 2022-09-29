import { Goods } from "./../../types.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBrandAndCategory } from "../../Admin/Pages/Product/types";
import { GridRowId } from "@mui/x-data-grid";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/adminProduct/",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userAdminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
    getAllProduct: builder.query<Goods[], void>({
      query: () => `getAll`,
    }),
    getBrandAndCategoryId: builder.query<IBrandAndCategory, void>({
      query: () => {
        return {
          url: "brandAndCategoryIds",
          method: "GET",
        };
      },
    }),
    removeData: builder.mutation<void, GridRowId>({
      query: (id) => {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useRemoveDataMutation,
  useGetAllProductQuery,
  useGetBrandAndCategoryIdQuery,
  useCreateProductMutation,
} = productApi;

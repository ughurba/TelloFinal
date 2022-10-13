import { GridRowId } from "@mui/x-data-grid";
import { ICategoryAndBrand } from "../../Admin/Pages/CategoryAndProduct/types";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/dist/query/react";

export const categoryAndBrandApi = createApi({
  reducerPath: "categoryAndBrandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/CategoryAndBrand/",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("userAdminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["PostCategory", "PostBrand"],

  endpoints: (build) => ({
    getCategoryAndBrandAll: build.query<ICategoryAndBrand, void>({
      query: () => ``,
      providesTags: ["PostCategory", "PostBrand"],
    }),
    removeCategory: build.mutation<void, { id: GridRowId }>({
      query: (arg) => {
        return {
          url: `removeCategory/${arg.id}`,
          method: "DELETE",
        };
      },
    }),
    createCategory: build.mutation<any, { title: string; isActive: boolean }>({
      query: (body) => {
        return {
          url: `createCategory`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["PostCategory"],
    }),
    updateCategory: build.mutation<
      void,
      { id: GridRowId; Title?: string; isActive?: boolean }
    >({
      query: (body) => {
        return {
          url: `categoryUpdate`,
          method: "PUT",
          body,
        };
      },
    }),
    createBrand: build.mutation<any, { name: string }>({
      query: (body) => {
        return {
          url: `createBrand`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["PostBrand"],
    }),
    removeBrand: build.mutation<void, { id: GridRowId }>({
      query: (arg) => {
        return {
          url: `removeBrand/${arg.id}`,
          method: "DELETE",
        };
      },
    }),
    updateBrand: build.mutation<void, { id: GridRowId; name: string }>({
      query: (body) => {
        return {
          url: `brandUpdate`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});
export const {
  useGetCategoryAndBrandAllQuery,
  useCreateCategoryMutation,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
  useCreateBrandMutation,
  useRemoveBrandMutation,
  useUpdateBrandMutation,
} = categoryAndBrandApi;

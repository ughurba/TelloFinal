import { ISpecifications } from "../../Admin/Pages/Specifications/CreateSpecifications/types";
import { Goods } from "./../../types.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBrandAndCategory } from "../../Admin/Pages/Product/types";
import { GridRowId } from "@mui/x-data-grid";
import { IGoodsAdmin } from "Admin/Pages/AddProduct/type";
import { ProductCountByBrand } from "Admin/Pages/Dashboard/types";
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
    updateProduct: builder.mutation<void, FormData>({
      query: (body) => {
        return {
          url: "updateProduct",
          method: "PUT",
          body,
        };
      },
    }),
    getOneProduct: builder.query<IGoodsAdmin, string>({
      query: (id) => `${id}`,
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
    createSpecifications: builder.mutation<void, ISpecifications>({
      query: (body) => {
        return {
          url: "createSpec",
          method: "POST",
          body,
        };
      },
    }),
    getAllSpecifications: builder.query<ISpecifications[], string>({
      query: (productId) => `/getSpecifications/${productId}`,
    }),
    getOneSpecifications: builder.query<
      { name: string; value: string },
      { productId: string; specId: string }
    >({
      query: ({ productId, specId }) => `/${productId}/${specId}`,
    }),

    updateSpecification: builder.mutation<void, Partial<ISpecifications>>({
      query: (body) => {
        return {
          url: "/updateSpec",
          method: "PUT",
          body,
        };
      },
    }),
    removeSpecifications: builder.mutation<
      void,
      { productId: string; specId: GridRowId }
    >({
      query: ({ productId, specId }) => {
        return {
          url: `removeSpec/${productId}/${specId}`,
          method: "DELETE",
        };
      },
    }),

    getProductCountByBrand: builder.query<ProductCountByBrand[], void>({
      query: () => `brandProductsCount`,
    }),
  }),
});

export const extendedGetAllProductAdminApi = productApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query<Goods[], void>({
      query: () => `getAll`,
    }),
  }),
});
export const { useGetAllProductQuery } = extendedGetAllProductAdminApi;
export const {
  useGetProductCountByBrandQuery,
  useCreateSpecificationsMutation,
  useGetOneProductQuery,
  useUpdateProductMutation,
  useRemoveDataMutation,
  useGetBrandAndCategoryIdQuery,
  useCreateProductMutation,
  useGetAllSpecificationsQuery,
  useGetOneSpecificationsQuery,
  useUpdateSpecificationMutation,
  useRemoveSpecificationsMutation,
} = productApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Brand, Category, Goods, ShopGoods } from "../types";

export interface IPagination {
  id: number;
  page: number;
  size: number;
}
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/category",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => `/`,
    }),
    getCategoryProduct: builder.query<ShopGoods, IPagination>({
      query: (Pagination) =>
        `/${Pagination.id}?page=${Pagination.page}&size=${Pagination.size}`,
    }),

    getBrands: builder.query<Brand[], void>({
      query: () => `brand`,
    }),
  }),
});
export const {
  useGetAllCategoriesQuery,
  useGetBrandsQuery,
  useGetCategoryProductQuery,
} = categoriesApi;

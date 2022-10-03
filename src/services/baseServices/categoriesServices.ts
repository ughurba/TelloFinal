import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Brand, Category, ShopGoods } from "types";
import { Links } from "Routes/links";

export interface IProductType {
  id: number;
  brandIds?: number[];
  page: number;
  size: number;
  minPrice?: number;
  maxPrice?: number;
  orderBy: number;
  category?: string;
}

const categoryProduct = (Product: IProductType, url?: string) => {
  const str = `${Product.brandIds?.map((item) => `brandIds=${item}&`)}`
    .split(",")
    .join("");

  const discountStr = Links.app.discounts.split("/").at(-1);

  const discount = `${
    Product.category === discountStr ? `&discount=${true}` : ""
  }`;

  return `/${url ? `${url}/` : ""}${Product.id}?${str}
  &orderBy=${Product.orderBy}&minPrice=${Product?.minPrice}
  &maxPrice=${Product?.maxPrice}${discount}
  &page=${Product.page}
  &size=${Product.size}`;
};
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:33033/api/category",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => `/`,
    }),
    getCategoryProduct: builder.query<ShopGoods, IProductType>({
      query: (Pagination) => categoryProduct(Pagination),
    }),
    getProductIsDiscount: builder.query<ShopGoods, IProductType>({
      query: (Pagination) => categoryProduct(Pagination, `discount`),
    }),
    getBrands: builder.query<Brand[], void>({
      query: () => `brand`,
    }),
  }),
});
export const {
  useGetProductIsDiscountQuery,
  useGetAllCategoriesQuery,
  useGetBrandsQuery,
  useGetCategoryProductQuery,
} = categoriesApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Brand, Category, ShopGoods } from "types";
import { Links } from "Routes/links";

export interface IProductType {
  id: string;
  brandIds?: number[];
  page: number;
  size: number;
  minPrice?: number;
  maxPrice?: number;
  orderBy: number;
  category?: string;
  userId?: string;
}

const categoryProduct = (Product: IProductType, url?: string) => {
  const str = `${Product.brandIds?.map((item) => `brandIds=${item}&`)}`
    .split(",")
    .join("");

  const allBrands = `${Product.id === "allBrands" ? `&allBrand=${true}` : ""}`;

  const discount = `${Product.id === "discount" ? `&discount=${true}` : ""}`;

  const productId = `${
    Product.id === "discount" || Product.id === "allBrands"
      ? ""
      : `id=${Product.id}`
  }`;
  const userId = `${Product.userId ? `&userId=${Product.userId}` : ""} `;

  return `/getProductInShop?${productId}&${str}
  &orderBy=${Product.orderBy}&minPrice=${Product?.minPrice}
  &maxPrice=${Product?.maxPrice}${userId}${discount}${allBrands}
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

import { IBrand, ICategory } from "types";

export interface IBrandAndCategory {
  brand: IBrand[];
  category: ICategory[];
}
export interface ICreateProduct {
  BrandId: string;
  CategoryId: string;
  Description: string;
  NewPrice: number;
  OldPrice: number;
  StockCount: number;
  Title: string;
}

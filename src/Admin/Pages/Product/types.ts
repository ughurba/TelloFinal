export interface IBrand {
  id: number;
  name: string;
}
export interface ICategory {
  id: number;
  title: string;
}

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

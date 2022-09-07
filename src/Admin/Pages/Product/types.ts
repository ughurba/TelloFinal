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

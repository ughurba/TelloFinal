export interface IRegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface IUserPay {
  address: string;
  building: string;
  courier: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  card: boolean;
  cash: boolean;
}

export interface IUser {
  Birthda?: string;
  isOnline: boolean;
  nameid: string;
  Name: string;
  Surname: string;
  Role: [];
  Email?: string;
  unique_name: string;
}

export interface ISlider {
  id: string;
  imgUrl: string;
  title: string;
  paragraph: string;
  type: string;
}
export interface Brand {
  id: number;
  name: string;
}
export interface Color {
  id: number;
  code: string;
}
export interface Goods {
  oldPrice: number;
  newPrice: number;
  title: string;
  id: number;
  inStock: boolean;
  categoryTitle: string;
  categoryId: number;
  description: string;
  photos: Image[];
  brand: Brand;
  colors: Color[];
}

interface ShopGoods {
  result: Goods[];
  totalCount: number;
}
export interface Image {
  path: string;
  isMain: boolean;
}
export interface Category {
  id: number;
  title: string;
}

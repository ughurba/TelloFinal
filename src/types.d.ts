export interface IRegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string | undefined;
  password: string | undefined;
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
  Email: string;
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
export interface Storage {
  id: number;
  value: number;
}
export interface IRating {
  avarge: number;
  fiveStart: number;
  fourStart: number;
  oneStart: number;
  threeStar: number;
  twoStart: number;
}
export interface ProductStorages {
  storage: Storage;
  storageId: number;
}
export interface ProductColors {
  colors: Color;
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
  stockCount: number;
  isFavorite?: boolean;
}
interface ProductDetails {
  id: number;
  name: string;
  value: string;
}
export interface Favorits {
  id: number;
  prdocutId: number;
  appUserId: string;
}
interface DetailProduct {
  id: number;
  brandId: number;
  categoryId: number;
  comments: string[];
  description: string;
  newPrice: number;
  oldPrice: number;
  photos: Image[];
  stockCount: number;
  inStock: boolean;
  title: string;
  productColors: ProductColors[];
  productStorages: ProductStorages[];
  productDetails: ProductDetails[];
  ratings: IRating[];
  basketItems: IBasketItems;
}

interface ShopGoods {
  result: Goods[];
  totalCount: number;
  favorits?: Favorits[];
}
export interface Image {
  path: string;
  isMain: boolean;
}
export interface Category {
  id: number;
  title: string;
}
export interface IBasketItems {
  id: number;
  productId: number;
  product?: Goods;
  sum: number;
  price: number;
  path: string;
  count: number;
  code?: string;
  storage?: string;
}
export interface Basket {
  basketItems: IBasketItems[];
  total: number;
}
export interface IncDecType {
  isExistCount: number;
  isExistSum: number;
  productCount?: number;
}
export interface CalculationBasket {
  frontBaskets: IncDecType[];
  total: number;
}

export interface Favorites {
  productId: number;
  isFavorite: boolean;
}
export interface IOrder {
  id: number;
  date: string;
  orderStatus: number;
  total: number;
  photos: Image[];
}
export interface IOrderItem {
  id: number;
  total: number;
  count: number;
  code: string;
  storage: number;
  title: string;
  photos: Image[];
}

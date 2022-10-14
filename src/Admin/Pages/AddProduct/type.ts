import { Storage, Image, Brand, Color } from "types";

export interface IGoodsAdmin {
  oldPrice: number;
  newPrice: number;
  title: string;
  categoryId: string;
  description: string;
  childPhotos: Image[];
  mainPhoto: Image;
  brandId: number;
  colors: Color[];
  storages: Storage[];
  stockCount: number;
}

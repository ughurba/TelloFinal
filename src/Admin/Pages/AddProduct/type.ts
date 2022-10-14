import { Storage, Image, Brand, Color } from "types";

export interface IGoodsAdmin {
  oldPrice: number;
  newPrice: number;
  title: string;
  categoryTitle: string;
  description: string;
  childPhotos: Image[];
  mainPhoto: Image;
  brand: Brand;
  colors: Color[];
  storages: Storage[];
  stockCount: number;
}

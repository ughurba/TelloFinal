import { Image } from "types";

export interface IAdminOrder {
  id: number;
  date: string;
  orderStatus: number;
  userName: string;
  mobile: string;
  total: number;
  adress: string;
  building: string;
  cash: boolean;
  note: string;
  photos: Image[];
}

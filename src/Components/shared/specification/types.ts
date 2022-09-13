export interface AppUser {
  name: string;
  surname: string;
}
export interface IComment {
  id?: number;
  appUserId: string;
  name?: string;
  surname?: string;
  content: string;
  productId: number;
  appUser?: AppUser;
}

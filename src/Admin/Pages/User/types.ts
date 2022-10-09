export interface IUser {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  email: string;
  userRoles: string[];
}
export interface IRole {
  id: string;
  name: string;
}
export interface IUserAndRoles {
  returnUserDtos: IUser[];
  role: string[];
}

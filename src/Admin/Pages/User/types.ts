export interface IUser {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  email: string;
  userRoles: string[];
}
interface Role {
  id: string;
  name: string;
}
export interface IUserAndRoles {
  returnUserDtos: IUser[];
  role: string[];
}

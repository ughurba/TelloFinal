import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";

interface initialStateTypes {
  user: IUser;
}
const initialState: initialStateTypes = {
  user: {
    isOnline: false,
    nameid: "",
    Name: "",
    Surname: "",
    unique_name: "",
    Role: [],
    Birthda: "",
    Email: "",
  },
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<IUser>) => {
      state.user.nameid = action.payload.nameid;
      state.user.unique_name = action.payload.unique_name;
      state.user.Name = action.payload.Name;
      state.user.Surname = action.payload.Surname;
      state.user.Role = action.payload.Role;
      state.user.Birthda = action.payload.Birthda;
      state.user.Email = action.payload.Email;
      state.user.isOnline = true;
    },
    logoutUser: (state) => {
      state.user.Email = "";
      state.user.nameid = "";
      state.user.unique_name = "";
      state.user.Name = "";
      state.user.Surname = "";
      state.user.Birthda = "";
      state.user.Role = [];
      state.user.isOnline = false;
    },
  },
});
export const { authUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

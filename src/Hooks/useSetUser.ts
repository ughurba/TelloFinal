import { useEffect } from "react";
import decode from "jwt-decode";
import { IUser } from "types";
import { authUser } from "Redux/slices/userSlice";
import { useAppDispatch } from "Redux/hooks";

export const useSetUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      const decodeUser = decode<IUser>(userToken);
      dispatch(authUser(decodeUser));
    }
  }, []);
};

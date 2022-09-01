import { useAppDispatch, useAppSelector } from "Redux/hooks";

import { useSetUser } from "Hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "Redux/slices/userSlice";

export const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useSetUser();
  const naviagte = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
    naviagte("/");
  };
  return (
    <div>
      {user?.Name}
      <button onClick={handleLogout}>Cixiw</button>
    </div>
  );
};

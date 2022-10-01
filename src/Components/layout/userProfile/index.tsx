import { useAppDispatch } from "Redux/hooks";
import { useSetUser } from "Hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "Redux/slices/userSlice";
import { useTranslation } from "react-i18next";
import { Links } from "Routes/links";
import {
  HeartStraight,
  MapPin,
  ShoppingCartSimple,
  SignOut,
  User,
} from "phosphor-react";
import { List, StyledLink, Title, Wrapper, Text, Logout } from "./style";
import { addItem, updateTotal } from "Redux/slices/basketSlice";
import { extendedApi } from "services/basketServices";
import { useBasketUpdate } from "Hooks/basket";
import { useEffect } from "react";

export const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(extendedApi.util.resetApiState());
  }, [dispatch]);

  useSetUser();
  useBasketUpdate();
  const naviagte = useNavigate();
  const handleLogout = () => {
    dispatch(extendedApi.util.resetApiState());
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
    naviagte("/");
    dispatch(addItem([]));
    dispatch(updateTotal(0));
  };

  return (
    <Wrapper>
      <List>
        <Title>{t("ProfileTitle")}</Title>
        <StyledLink to={Links.userProfileApp.MyOrders}>
          <ShoppingCartSimple weight={"bold"} />
          <Text> {t("MyOrders")}</Text>
        </StyledLink>

        <StyledLink to={Links.userProfileApp.MyFavorites}>
          <HeartStraight weight={"bold"} />
          <Text>{t("MyFavorites")}</Text>
        </StyledLink>

        <StyledLink to={Links.userProfileApp.PersonalInformation}>
          <User weight={"bold"} />
          <Text> {t("PersonalInformation")}</Text>
        </StyledLink>

        {/* <StyledLink to={Links.userProfileApp.DeliveryAddress}>
          <MapPin weight={"bold"} />
          <Text> {t("DeliveryAddress")}</Text>
        </StyledLink> */}

        <Logout onClick={handleLogout}>
          <SignOut weight={"bold"} />
          <Text>{t("Logout")}</Text>
        </Logout>
      </List>
    </Wrapper>
  );
};

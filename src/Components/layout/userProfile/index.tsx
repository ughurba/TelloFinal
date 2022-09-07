import { useAppDispatch, useAppSelector } from "Redux/hooks";
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

export const UserProfile = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  useSetUser();
  const naviagte = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
    naviagte("/");
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

        <StyledLink to={Links.userProfileApp.DeliveryAddress}>
          <MapPin weight={"bold"} />
          <Text> {t("DeliveryAddress")}</Text>
        </StyledLink>

        <Logout onClick={handleLogout}>
          <SignOut weight={"bold"} />
          <Text>{t("Logout")}</Text>
        </Logout>
      </List>
    </Wrapper>
  );
};

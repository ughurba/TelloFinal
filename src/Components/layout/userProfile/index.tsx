import { useAppDispatch } from "Redux/hooks";
import { useSetUser } from "Hooks/useSetUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "Redux/slices/userSlice";
import { useTranslation } from "react-i18next";
import { Links } from "Routes/links";
import {
  HeartStraight,
  ShoppingCartSimple,
  SignOut,
  User,
} from "phosphor-react";
import {
  List,
  StyledLink,
  Title,
  Wrapper,
  Text,
  Logout,
  StyledUser,
  WrapperUserProfile,
} from "./style";
import { addItem, updateTotal } from "Redux/slices/basketSlice";
import { extendedApi } from "services/baseServices/basketServices";
import { useBasketUpdate } from "Hooks/basket";
import { useEffect } from "react";
import { Flex } from "Components/shared";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(extendedApi.util.resetApiState());
  }, [dispatch]);
  // const navigate = useNavigate();

  useSetUser();
  useBasketUpdate();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(extendedApi.util.resetApiState());
    localStorage.removeItem("userToken");
    dispatch(logoutUser());
    navigate("/");
    dispatch(addItem([]));
    dispatch(updateTotal(0));
  };
  useEffect(() => {
    navigate(Links.userProfileApp.MyOrders);
  }, []);
  return (
    <Wrapper>
      <Flex>
        <List>
          <Flex AlItems="center">
            <StyledUser>
              <User size={30} color="#40b56d" weight="duotone" />
            </StyledUser>
            <Title>{t("ProfileTitle")}</Title>
          </Flex>

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

          {/* <StyledLink to={Links.userProfileApp.base}>
            <User weight={"bold"} />
            <Text> {t("MyProfile")}</Text>
          </StyledLink> */}

          <Logout onClick={handleLogout}>
            <SignOut weight={"bold"} />
            <Text>{t("Logout")}</Text>
          </Logout>
        </List>
      </Flex>
    </Wrapper>
  );
};
export default UserProfile;

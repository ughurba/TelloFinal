import {
  StyledParentInput,
  StyledParentSvg,
  StyledBasketHeader,
  StyledSize,
} from "./style";
import { Flex, Container } from "../../shared/";
import { SubMenu } from "./components/subMenu";
import { teloicon, Heart, SearchIcon, User, Basket } from "Assets";
import { Search } from "../../shared/search";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { Links } from "Routes/links";
import { useSetUser } from "Hooks/useSetUser";
import { useGetAllQuery } from "services/basketServices";
import { addItem, updateTotal } from "Redux/slices/basketSlice";
import { useEffect } from "react";

export const Header = () => {
  const dispatch = useAppDispatch();
  useSetUser();
  const { user } = useAppSelector((state) => state.user);

  const { data } = useGetAllQuery();

  useEffect(() => {
    if (data) {
      dispatch(addItem(data.basketItems));
      dispatch(updateTotal(data.total));
    }
  }, [data]);

  const { basketItems } = useAppSelector((state) => state.basket.basket);

  return (
    <Container>
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <img src={teloicon} alt={"icon"} />
        <StyledParentInput>
          <Search width={"591px"} height={"40px"} />
          <SearchIcon />
        </StyledParentInput>
        <StyledParentSvg>
          <Link to={!user.isOnline ? Links.app.login : Links.app.userProfile}>
            <User />
          </Link>
          <Heart />
          <StyledBasketHeader>
            <Link to={Links.app.basket}>
              <Basket />
            </Link>
            <StyledSize>{basketItems.length}</StyledSize>
          </StyledBasketHeader>
        </StyledParentSvg>
      </Flex>
      <SubMenu />
    </Container>
  );
};

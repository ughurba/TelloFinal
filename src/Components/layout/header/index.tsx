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
import { useAppSelector } from "Redux/hooks";
import { Links } from "Routes/links";

export const Header = () => {
  const { items } = useAppSelector((state) => state.basket);
  return (
    <Container>
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <img src={teloicon} alt={"icon"} />
        <StyledParentInput>
          <Search width={"591px"} height={"40px"} />
          <SearchIcon />
        </StyledParentInput>
        <StyledParentSvg>
          <Link to={Links.app.login}>
            <User />
          </Link>
          <Heart />
          <StyledBasketHeader>
            <Link to={Links.app.basket}>
              <Basket />
            </Link>
            <StyledSize>{items.length}</StyledSize>
          </StyledBasketHeader>
        </StyledParentSvg>
      </Flex>
      <SubMenu />
    </Container>
  );
};

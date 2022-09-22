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
import { useSetUser } from "Hooks/useSetUser";
import { useBasketUpdate } from "Hooks/basket";
import { FormEvent, useEffect, useState } from "react";
import { useSearchProductMutation } from "services/shopServices";
import { useDebounce } from "Hooks/debounce";

export const Header = () => {
  useSetUser();
  useBasketUpdate();
  const { user } = useAppSelector((state) => state.user);
  const { basketItems } = useAppSelector((state) => state.basket.basket);
  const [search, setSearch] = useState<string>("");
  const handleSearch = (ev: FormEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  };
  const debounceSearch = useDebounce(search, 500);
  const [postSearch, { data }] = useSearchProductMutation();
  console.log(data);

  useEffect(() => {
    if (debounceSearch !== "") {
      postSearch(debounceSearch);
    }
  }, [debounceSearch]);
  return (
    <Container>
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <img src={teloicon} alt={"icon"} />
        <StyledParentInput>
          <Search onChange={handleSearch} width={"591px"} height={"40px"} />
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

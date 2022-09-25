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
import { useBasketUpdate } from "Hooks/basket";
import { FormEvent, useEffect, useState } from "react";
import {
  shopExtendedApi,
  useGetAllFavoriteQuery,
  useSearchProductMutation,
} from "services/shopServices";
import { useDebounce } from "Hooks/debounce";
import { SearchMenu } from "./components/searchMenu";

export const Header = () => {
  const dispatch = useAppDispatch();
  useSetUser();
  useBasketUpdate();
  const { user } = useAppSelector((state) => state.user);
  const { basketItems } = useAppSelector((state) => state.basket.basket);
  const [search, setSearch] = useState<string>("");
  const handleSearch = (ev: FormEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  };
  // const { data: favoriteData } = useGetAllFavoriteQuery();
  const debounceSearch = useDebounce(search, 500);
  const [postSearch, { data }] = useSearchProductMutation();

  // useEffect(() => {
  //   favoriteData?.result.map((item) => dispatch(updateFavoritePhones(item.id)));
  // }, [favoriteData]);
  useEffect(() => {
    if (debounceSearch !== "") {
      postSearch(debounceSearch);
    } else {
      dispatch(shopExtendedApi.util.resetApiState());
    }
  }, [debounceSearch]);
  return (
    <Container>
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <img src={teloicon} alt={"icon"} />
        <StyledParentInput>
          <Search onChange={handleSearch} width={"591px"} height={"40px"} />
          <SearchIcon />
          {data?.result.length !== 0 && data?.result ? (
            <SearchMenu data={data.result} />
          ) : (
            ""
          )}
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

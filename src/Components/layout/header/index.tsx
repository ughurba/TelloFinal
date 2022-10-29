import {
  StyledParentInput,
  StyledParentSvg,
  StyledBasketHeader,
  StyledSize,
  WrapperLang,
  Wrapper,
  StyledSelect,
} from "./style";
import { Flex, Container } from "../../shared/";
import { SubMenu } from "./components/subMenu";
import { teloicon, Heart, SearchIcon, User, Basket } from "Assets";
import { Search } from "../../shared/search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { Links } from "Routes/links";
import { useSetUser } from "Hooks/useSetUser";
import { useBasketUpdate } from "Hooks/basket";
import { FormEvent, useEffect, useState } from "react";
import {
  shopExtendedApi,
  useSearchProductMutation,
} from "services/baseServices/shopServices";
import { useDebounce } from "Hooks/debounce";
import { SearchMenu } from "./components/searchMenu";
import { useLanguage } from "Hooks/useLanguage";
import { setSearch } from "Redux/slices/searchSlice";

export const Header = () => {
  const dispatch = useAppDispatch();

  useSetUser();
  useBasketUpdate();
  const { user } = useAppSelector((state) => state.user);
  const { basketItems } = useAppSelector((state) => state.basket.basket);
  const { searchValue } = useAppSelector((state) => state.search);

  const handleSearch = (ev: FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(ev.currentTarget.value));
  };
  const debounceSearch = useDebounce(searchValue, 500);
  const [postSearch, { data }] = useSearchProductMutation();
  const { handleChangeLang, lang } = useLanguage();
  useEffect(() => {
    if (debounceSearch !== "") {
      postSearch(debounceSearch);
    } else {
      dispatch(shopExtendedApi.util.resetApiState());
    }
  }, [debounceSearch]);

  return (
    <Wrapper>
      <Container>
        <Flex AlItems={"center"} JsContent={"space-between"}>
          <img src={teloicon} alt={"icon"} />
          <StyledParentInput>
            <Search
              value={searchValue}
              onChange={handleSearch}
              width={"591px"}
              height={"40px"}
            />
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
            <Link
              to={
                user.isOnline
                  ? Links.userProfileApp.MyFavorites
                  : Links.app.login
              }
            >
              <Heart />
            </Link>

            <StyledBasketHeader>
              <Link to={Links.app.basket}>
                <Basket />
              </Link>
              <StyledSize>{basketItems.length}</StyledSize>
            </StyledBasketHeader>
            <WrapperLang>
              <FormControl>
                <StyledSelect
                  IconComponent={"noscript"}
                  value={lang}
                  onChange={handleChangeLang}
                >
                  <MenuItem value={"az"}>az</MenuItem>
                  <MenuItem value={"ru"}>ru</MenuItem>
                </StyledSelect>
              </FormControl>
            </WrapperLang>
          </StyledParentSvg>
        </Flex>
        <SubMenu />
      </Container>
    </Wrapper>
  );
};

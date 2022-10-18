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
import { SelectChangeEvent } from "@mui/material/Select";
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
import { useTranslation } from "react-i18next";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
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

  useEffect(() => {
    if (debounceSearch !== "") {
      postSearch(debounceSearch);
    } else {
      dispatch(shopExtendedApi.util.resetApiState());
    }
  }, [debounceSearch]);

  const local = localStorage.getItem("lang");
  const [lang, setLang] = useState<string>(local ? local : "");
  localStorage.setItem("lang", lang);

  const handleChangeLang = (event: SelectChangeEvent<unknown>) => {
    setLang(event.target.value as string);
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Wrapper>
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
            <Link to={Links.userProfileApp.MyFavorites}>
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

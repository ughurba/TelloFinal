import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Brand, Favorites } from "types";
import { SizeProducts, Wrapper, WrapperShop, WrapperSideBar } from "./style";
import * as React from "react";
import { Flex, Container, Products } from "Components/shared";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import {
  IPagination,
  useGetBrandsQuery,
  useGetCategoryProductQuery,
} from "services/categoriesServices";
import { BrandFilter } from "./components/brandFilter";
import { RedesignedPagination, Loader } from "Components/shared";
import {
  setPhonesLoading,
  setPhones,
  setCategoryId,
} from "Redux/slices/goodsSlice";
import { RangeSlider } from "../components/rangeSlide";
import { useDebounce } from "../../../Hooks/debounce";
import { useSetFavoriteMutation } from "../../../services/shopServices";
export const Phone = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState<Brand[]>([]);
  const [value, setValue] = React.useState<number[]>([0, 4300]);

  const id = Number(localStorage.getItem("categoryId"));
  const { phones, phonesLoading } = useAppSelector((state) => state.goods);

  const debounced = useDebounce(value, 1000);
  const { data: brands } = useGetBrandsQuery();
  const Pagination: IPagination = {
    id: id,
    page: page,
    size: 6,
    minPrice: debounced[0],
    maxPrice: debounced[1],
  };
  const { data, isLoading: loading } = useGetCategoryProductQuery(Pagination);
  const [postFavorite] = useSetFavoriteMutation();
  useEffect(() => {
    if (data) {
      dispatch(setCategoryId(id));
      dispatch(setPhones(data));
      dispatch(setPhonesLoading(loading));
    }
  }, [data]);

  useMemo(() => {
    if (brands) {
      setBrand(brands.map((item) => item));
    }
  }, [brands]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeFilteredPrice = (
    event: Event,
    newValue: number | number[]
  ) => {
    setValue(newValue as number[]);
  };

  const handleChangeFavorite = (
    ev: React.FormEvent<HTMLInputElement>,
    id: number
  ) => {
    postFavorite({
      productId: id,
      isFavorite: ev.currentTarget.checked,
    });
  };
  return (
    <Wrapper>
      <Container>
        {phonesLoading && loading ? (
          <Loader />
        ) : (
          <Flex>
            <WrapperSideBar>
              {
                <>
                  <BrandFilter title={t("Brand")} brands={brand} />
                  <RangeSlider
                    value={value}
                    handleChange={handleChangeFilteredPrice}
                  />
                </>
              }
            </WrapperSideBar>
            {phones?.result.length === 0 ? (
              <div>Heç bir nəticə tapılmadı</div>
            ) : (
              <WrapperShop>
                <SizeProducts>
                  {phones?.result.length} {t("ProductFound")}
                </SizeProducts>
                <Products handleChange={handleChangeFavorite} data={phones} />
                {
                  <RedesignedPagination
                    page={page}
                    onChange={handleChange}
                    productCount={phones.totalCount}
                  />
                }
              </WrapperShop>
            )}
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

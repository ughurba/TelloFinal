import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Brand, Favorites } from "types";
import { SizeProducts, WrapperShop, Wrapper } from "./style";
import { Products, Flex, Container } from "Components/shared";
import { useTranslation } from "react-i18next";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import {
  IPagination,
  useGetBrandsQuery,
  useGetCategoryProductQuery,
} from "services/categoriesServices";
import {
  setHeadphonesLoading,
  setHeadphones,
  setCategoryId,
} from "Redux/slices/goodsSlice";
import { BrandFilter } from "../phone/components/brandFilter";
import { Loader, RedesignedPagination } from "Components/shared";
import { RangeSlider } from "../components/rangeSlide";
import { useDebounce } from "../../../Hooks/debounce";
import { useSetFavoriteMutation } from "../../../services/shopServices";

export const Headphone = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState<Brand[]>([]);
  const [value, setValue] = React.useState<number[]>([0, 4300]);

  const id = Number(localStorage.getItem("categoryId"));
  const dispatch = useAppDispatch();
  const debounced = useDebounce(value, 1000);
  const [pag, setPag] = useState<IPagination>({
    id: id,
    page: page,
    size: 6,
    minPrice: value[0],
    maxPrice: value[1],
  });
  const { headphones, headphonesLoading } = useAppSelector(
    (state) => state.goods
  );

  const { data: brands } = useGetBrandsQuery();
  useMemo(() => {
    const Pagination: IPagination = {
      id: id,
      page: page,
      size: 6,
      minPrice: debounced[0],
      maxPrice: debounced[1],
    };
    setPag(Pagination);
  }, [debounced, page, id]);
  const [postFavorite] = useSetFavoriteMutation();

  const { data, isLoading: loading } = useGetCategoryProductQuery(pag);
  useEffect(() => {
    if (data) {
      dispatch(setCategoryId(id));
      dispatch(setHeadphones(data));
      dispatch(setHeadphonesLoading(loading));
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
        {headphonesLoading && loading ? (
          <Loader />
        ) : (
          <Flex>
            <div>
              {
                <>
                  <BrandFilter title="Brand" brands={brand} />
                  <RangeSlider
                    value={value}
                    handleChange={handleChangeFilteredPrice}
                  />
                </>
              }
            </div>
            <WrapperShop>
              <SizeProducts>
                {headphones?.result.length} {t("ProductFound")}
              </SizeProducts>
              <Products handleChange={handleChangeFavorite} data={headphones} />
              {
                <RedesignedPagination
                  page={page}
                  onChange={handleChange}
                  productCount={headphones.totalCount}
                />
              }
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

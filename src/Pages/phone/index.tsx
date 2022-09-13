import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Brand } from "types";
import { SizeProducts, Wrapper, WrapperShop } from "./style";
import * as React from "react";
import { Flex, Container, Products } from "Components/shared";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
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
} from "../../Redux/slices/goodsSlice";

export const Phone = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState<Brand[]>([]);

  const id = Number(localStorage.getItem("categoryId"));
  dispatch(setCategoryId(id));
  const { phones, phonesLoading, categoryId } = useAppSelector(
    (state) => state.goods
  );

  const { data: brands } = useGetBrandsQuery();
  const Pagination: IPagination = {
    id: categoryId,
    page: page,
    size: 6,
  };
  const { data, isLoading: loading } = useGetCategoryProductQuery(Pagination);
  useEffect(() => {
    if (data) {
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
  return (
    <Wrapper>
      <Container>
        {phonesLoading && loading ? (
          <Loader />
        ) : (
          <Flex>
            <div>
              {
                <>
                  <BrandFilter title="Brand" brands={brand} />
                </>
              }
            </div>
            <WrapperShop>
              <SizeProducts>
                {phones?.result.length} {t("ProductFound")}
              </SizeProducts>
              <Products data={phones} />
              {
                <RedesignedPagination
                  page={page}
                  onChange={handleChange}
                  productCount={phones.totalCount}
                />
              }
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

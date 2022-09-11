import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Brand } from "types";
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
import { setHeadphonesLoading, setHeadphones } from "Redux/slices/goodsSlice";
import { BrandFilter } from "../phone/components/brandFilter";
import { Loader, RedesignedPagination } from "Components/shared";

export const Headphone = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState<Brand[]>([]);
  const { headphones, headphonesLoading, categoryId } = useAppSelector(
    (state) => state.goods
  );
  const dispatch = useAppDispatch();
  const { data: brands } = useGetBrandsQuery();
  const Pagination: IPagination = {
    id: categoryId,
    page: page,
    size: 6,
  };
  const { data, isLoading: loading } = useGetCategoryProductQuery(Pagination);

  useEffect(() => {
    if (data) {
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
                </>
              }
            </div>
            <WrapperShop>
              <SizeProducts>
                {headphones?.result.length} {t("ProductFound")}
              </SizeProducts>
              <Products data={headphones} />
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

import { ChangeEvent, useMemo, useState } from "react";
import { Goods, ShopGoods } from "types";
import { SizeProducts, WrapperShop, Wrapper } from "./style";
import { load } from "Assets";
import { Products, Filter, Flex, Container } from "Components/shared";
import { useFetchAllGoodsQuery } from "services/goodsServices";
import { useTranslation } from "react-i18next";
import * as React from "react";
import { useAppSelector } from "../../Redux/hooks";

export const Headphone = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const [headphones, setHeadphones] = useState<ShopGoods>();
  const { goods, isLoading } = useAppSelector((state) => state.goods);

  useMemo(() => {
    setHeadphones(goods);
  }, [goods]);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Wrapper>
      <Container>
        {isLoading ? (
          <img src={load} />
        ) : (
          <Flex>
            <div>
              <Filter />
              <Filter />
            </div>
            <WrapperShop>
              <SizeProducts>
                {headphones?.result.length} {t("ProductFound")}
              </SizeProducts>
              <Products data={goods} />
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

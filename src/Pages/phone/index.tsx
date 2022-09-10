import { ChangeEvent, useMemo, useState } from "react";
import { Goods, ShopGoods } from "types";
import { SizeProducts, Wrapper, WrapperShop } from "./style";
import * as React from "react";
import { load } from "Assets";
import { Flex, Filter, Container, Products } from "Components/shared";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../Redux/hooks";

export const Phone = () => {
  const { t } = useTranslation();
  const [phones, setPhones] = useState<ShopGoods>();
  const [page, setPage] = React.useState(1);
  const { goods, isLoading } = useAppSelector((state) => state.goods);

  useMemo(() => {
    setPhones(goods);
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
                {phones?.result.length} {t("ProductFound")}
              </SizeProducts>
              <Products data={goods} />
              {/*<MyPagintaion page={page} onChange={handleChange} data={phones} />*/}
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

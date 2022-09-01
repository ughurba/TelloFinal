import {
  useFetchAllGoodsQuery,
  useFetchPagintaionQuery,
} from "services/goodsServices";
import { ChangeEvent, useMemo, useState } from "react";
import { IGoods } from "types";
import { SizeProducts, Wrapper, WrapperShop } from "./style";
import * as React from "react";
import { load } from "Assets";
import {
  MyPagintaion,
  Flex,
  Filter,
  Container,
  Products,
} from "../../Components/shared";
import { useDataSet } from "../../Hooks/pagination";

export const Phone = () => {
  const [phonesPagintaion, setPhonesPagintaion] = useState<IGoods[]>([]);
  const [phones, setPhones] = useState<IGoods[]>([]);
  const [page, setPage] = React.useState(1);
  const { data: goods } = useFetchAllGoodsQuery();
  const { isError, data, isLoading } = useFetchPagintaionQuery(page);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useMemo(() => {
    if (data) {
      setPhonesPagintaion(data.filter((p) => p.name === "phone"));
    }
    if (goods) {
      setPhones(goods.filter((p) => p.name === "phone"));
    }
  }, [data, goods]);

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
              <SizeProducts>{phones?.length} məhsul tapıldı</SizeProducts>
              <Products data={phonesPagintaion} />
              <MyPagintaion page={page} onChange={handleChange} data={phones} />
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

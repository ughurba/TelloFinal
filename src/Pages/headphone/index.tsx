import { ChangeEvent, useMemo, useState } from "react";
import { IGoods } from "../../types";
import { SizeProducts, WrapperShop, Wrapper } from "./style";
import { load } from "../../Assets";
import {
  Products,
  Filter,
  Flex,
  Container,
  MyPagintaion,
} from "../../Components/shared";
import {
  useFetchAllGoodsQuery,
  useFetchPagintaionQuery,
} from "../../services/goodsServices";

export const Headphone = () => {
  const [page, setPage] = useState(1);
  const [headphonesPagination, setHeadphonesPagination] = useState<IGoods[]>(
    []
  );
  const [headphone, setHeadphone] = useState<IGoods[]>([]);
  const { data: goods, isLoading } = useFetchAllGoodsQuery();
  const { data } = useFetchPagintaionQuery(page);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useMemo(() => {
    if (data) {
      setHeadphonesPagination(data.filter((p) => p.name === "qulaqliq"));
    }
    if (goods) {
      setHeadphone(goods.filter((p) => p.name === "qulaqliq"));
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
              <SizeProducts>{headphone?.length} məhsul tapıldı</SizeProducts>
              <Products data={headphone} />
              <MyPagintaion
                page={page}
                onChange={handleChange}
                data={headphone}
              />
            </WrapperShop>
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};

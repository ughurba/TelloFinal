import { ChangeEvent, FC, useMemo, useState } from "react";
import { IGoods } from "types";
import {
  useFetchAllGoodsQuery,
  useFetchPagintaionQuery,
} from "../services/goodsServices";
import * as React from "react";

interface Props {
  name: string;
}
export const useDataSet = (name: string) => {
  const [productPagintaion, setProductPagintaion] = useState<IGoods[]>([]);
  const [product, setProduct] = useState<IGoods[]>([]);
  const [page, setPage] = React.useState(1);
  const { data: goods } = useFetchAllGoodsQuery();
  const { data, isLoading } = useFetchPagintaionQuery(page);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useMemo(() => {
    if (data) {
      setProductPagintaion(data.filter((p) => p.name === name));
    }
    if (goods) {
      setProduct(goods.filter((p) => p.name === name));
    }
  }, [data, goods]);

  return { productPagintaion, product };
};

import { Flex, Loader } from "Components/shared";
import {
  useGetProductCountByBrandQuery,
  useGetProductDateAddQuery,
} from "services/adminServices/productServices";
import styled from "styled-components";
import { CountGoodsChart } from "./components/CountGoodsChart";
import { DateAddProductChart } from "./components/DateAddProductChart";

export const Wrapper = styled.div``;
const ChartCustom = () => {
  const { data: productCountByMonth, isLoading: loadProductDateAdd } =
    useGetProductDateAddQuery();
  const { data: products, isLoading: loadProductCountByBrand } =
    useGetProductCountByBrandQuery();
  return (
    <Wrapper>
      {loadProductDateAdd && loadProductCountByBrand ? (
        <Loader />
      ) : (
        <Flex AlItems="center" JsContent="space-evenly">
          <CountGoodsChart products={products ? products : []} />
          <DateAddProductChart
            productCountByMonth={productCountByMonth ? productCountByMonth : []}
          />
        </Flex>
      )}
    </Wrapper>
  );
};
export default ChartCustom;

import { FC, useState } from "react";

import {
  Azn,
  Color,
  Line,
  Name,
  Price,
  Title,
  Wrapper,
  WrapperColor,
  WrapperStorage,
  Storage,
  StyledButton,
  WrapperLink,
} from "./style";
import { IncDecCount, Flex } from "Components/shared/";
import { IncDecWrapper } from "Pages/detailProduct/style";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { useTranslation } from "react-i18next";
import { Goods } from "types";

export interface IProps {
  product?: Goods;
}

export const FullInfoProductContent: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  // const handleAddItems = () => {
  //   if (product) {
  //     dispatch(addItem(product));
  //   }
  // };

  // const handleIncrement = () => {
  //   if (product) {
  //     dispatch(plusItem(product));
  //   }
  // };
  // const handleDecrement = () => {
  //   if (product) {
  //     dispatch(minusItem(product));
  //   }
  // };

  return (
    <Wrapper>
      <Title>{product?.title}</Title>
      <Price>
        {product?.newPrice}
        <Azn />
      </Price>
      <Line />
      <WrapperColor>
        {/*<Flex AlItems={"center"}>*/}
        {/*  <Name>{t("Rəng")}:</Name>*/}
        {/*  {product?.color.map((color, index) => (*/}
        {/*    <Color key={color} colors={color} />*/}
        {/*  ))}*/}
        {/*</Flex>*/}
      </WrapperColor>
      <WrapperStorage>
        {/*<Flex AlItems={"center"}>*/}
        {/*  <Name>{t("Storage")}:</Name>*/}
        {/*  {product?.storage.map((storage, index) => (*/}
        {/*    <Storage key={index}>{storage}</Storage>*/}
        {/*  ))}*/}
        {/*</Flex>*/}
      </WrapperStorage>
      <Line />
      {/*<IncDecWrapper>*/}
      {/*  <IncDecCount*/}
      {/*    count={product?.count}*/}
      {/*    handleIncrement={handleIncrement}*/}
      {/*    handleDecrement={handleDecrement}*/}
      {/*  />*/}
      {/*</IncDecWrapper>*/}

      <WrapperLink>
        {/*<StyledButton onClick={handleAddItems}>{t("AddToCart")}</StyledButton>*/}
      </WrapperLink>
    </Wrapper>
  );
};

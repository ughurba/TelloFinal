import { IGoods } from "types";
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
import {
  addItem,
  minusItem,
  plusItem,
} from "../../../../Redux/slices/basketSlice";

export interface IProps {
  product?: IGoods;
}

export const FullInfoProductContent: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.basket);

  const handleAddItems = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  const handleIncrement = () => {
    if (product) {
      dispatch(plusItem(product));
    }
  };
  const handleDecrement = () => {
    if (product) {
      dispatch(minusItem(product));
    }
  };

  return (
    <Wrapper>
      <Title>{product?.title}</Title>
      <Price>
        {product?.price}
        <Azn />
      </Price>
      <Line />
      <WrapperColor>
        <Flex AlItems={"center"}>
          <Name>Rəng:</Name>
          {product?.color.map((color, index) => (
            <Color key={color} colors={color} />
          ))}
        </Flex>
      </WrapperColor>
      <WrapperStorage>
        <Flex AlItems={"center"}>
          <Name>Yaddaş:</Name>
          {product?.storage.map((storage, index) => (
            <Storage key={index}>{storage}</Storage>
          ))}
        </Flex>
      </WrapperStorage>
      <Line />
      <IncDecWrapper>
        <IncDecCount
          count={product?.count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </IncDecWrapper>

      <WrapperLink>
        <StyledButton onClick={handleAddItems}>Səbətə at</StyledButton>
      </WrapperLink>
    </Wrapper>
  );
};

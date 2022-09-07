import { Flex, IncDecCount } from "../../../../Components/shared";
import { FC, useState } from "react";
import {
  Wrapper,
  StyledTrash,
  StyledImg,
  Title,
  NameColor,
  Color,
  StockPrice,
  Discount,
  ProductContent,
} from "./style";
import { useTranslation } from "react-i18next";

interface Props {
  imgUrl: string;
  title: string;
  color: string[];
  price: number;
  discount: number;
  count: number;
}

export const BasketItems: FC<Props> = ({
  imgUrl,
  title,
  color,
  price,
  discount,
  count,
}) => {
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Flex JsContent={"space-between"} AlItems={"center"}>
        <StyledImg src={imgUrl} />
        <ProductContent>
          <Title>{title}</Title>
          <Flex AlItems={"flex-end"}>
            <Color>
              {t("Color")}: <NameColor>{color}</NameColor>
            </Color>

            <Discount>{discount} ₼</Discount>
            <StockPrice>{price} ₼</StockPrice>
          </Flex>
        </ProductContent>
        <IncDecCount
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <StyledTrash />
      </Flex>
    </Wrapper>
  );
};

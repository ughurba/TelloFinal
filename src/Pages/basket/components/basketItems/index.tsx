import { Flex, IncDecCount } from "Components/shared";
import { FC, useState } from "react";
import {
  Wrapper,
  StyledTrash,
  StyledImg,
  Title,
  StockPrice,
  Discount,
  ProductContent,
  Color,
  NameColor,
} from "./style";
import { useTranslation } from "react-i18next";
import { IBasketItems } from "types";
import {
  useDecrementPutMutation,
  useIncrementPutMutation,
} from "services/basketServices";

interface Props extends IBasketItems {}

export const BasketItems: FC<Props> = ({
  product,
  productId,
  price,
  path,
  count,
  code,
}) => {
  const [decrement] = useDecrementPutMutation();
  const [increment] = useIncrementPutMutation();
  const { t } = useTranslation();
  const [value, setValue] = useState<number>(count);
  const handleIncrement = (id: number) => {
    setValue(value + 1);
    increment(id);
  };
  const handleDecrement = (id: number) => {
    setValue(value - 1);
    decrement(id);
  };

  return (
    <Wrapper>
      <Flex JsContent={"space-between"} AlItems={"center"}>
        <Flex AlItems={"center"}>
          <StyledImg src={path} />
          <ProductContent>
            <Title>{product?.title}</Title>
            <Flex AlItems={"flex-end"}>
              <Color>
                {t("Color")}: <NameColor>{code}</NameColor>
              </Color>
              <StockPrice>{price} ₼</StockPrice>
            </Flex>
          </ProductContent>
        </Flex>

        <IncDecCount
          count={value}
          handleDecrement={() => handleDecrement(productId)}
          handleIncrement={() => handleIncrement(productId)}
        />
        <StyledTrash />
      </Flex>
    </Wrapper>
  );
};

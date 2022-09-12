import { FC, useEffect, useState } from "react";

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
import { Flex, IncDecCount } from "Components/shared/";
import { useTranslation } from "react-i18next";
import { DetailProduct, IRating } from "types";

import HoverRating from "../customRating";
import styled from "styled-components";
import { IncDecWrapper } from "Pages/detailProduct/style";

export interface IProps {
  product?: DetailProduct;
}

export const StyledRating = styled.div`
  margin-top: 16px;
`;

export const FullInfoProductContent: FC<IProps> = ({ product }) => {
  const { t } = useTranslation();
  // const [rating, setRating] = useState<IRating>({
  //   avarge: 0,
  //   fiveStart: 0,
  //   fourStart: 0,
  //   oneStart: 0,
  //   threeStar: 0,
  //   twoStart: 0,
  // });
  //
  // useEffect(() => {
  //   product?.ratings.map((item) => {
  //     setRating({ ...item });
  //   });
  // }, [product]);

  return (
    <Wrapper>
      <Title>{product?.title}</Title>
      <StyledRating>
        <HoverRating />
      </StyledRating>

      <Price>
        {product?.newPrice}
        <Azn />
      </Price>
      <Line />
      <WrapperColor>
        <Flex AlItems={"center"}>
          <Name>{t("Color")}:</Name>
          {product?.productColors.map((c) => (
            <Color key={c.colors.id} colors={c.colors.code} />
          ))}
        </Flex>
      </WrapperColor>
      <WrapperStorage>
        <Flex AlItems={"center"}>
          <Name>{t("Storage")}:</Name>
          {product?.productStorages?.map((s, i) => (
            <Storage key={i}>{s.storage.value}</Storage>
          ))}
        </Flex>
      </WrapperStorage>
      <Line />
      <IncDecWrapper>
        <IncDecCount count={product?.stockCount} />
      </IncDecWrapper>

      <WrapperLink>
        <StyledButton>{t("AddToCart")}</StyledButton>
      </WrapperLink>
    </Wrapper>
  );
};

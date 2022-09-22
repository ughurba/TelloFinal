import React, { FC } from "react";
import { Goods } from "types";
import {
  Content,
  ContentWrapper,
  NoStock,
  OldPrice,
  Price,
  Stock,
  StyledImg,
  Title,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
import { StyledLink } from "Components/shared/products/style";

interface Props {
  data: Goods[];
}
export const SearchMenu: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item) => (
        <StyledLink key={item.id} to={`/FullInfoProduct/${item.id}`}>
          <ContentWrapper>
            <StyledImg src={item?.photos[0]?.path} />
            <Content>
              <Title>{item.title}</Title>
              <OldPrice>{item.oldPrice}₼</OldPrice>
              <Price>{item.newPrice}₼</Price>
              {item.inStock ? (
                <Stock>InStock</Stock>
              ) : (
                <NoStock>NoStock</NoStock>
              )}
            </Content>
          </ContentWrapper>
        </StyledLink>
      ))}
    </Wrapper>
  );
};

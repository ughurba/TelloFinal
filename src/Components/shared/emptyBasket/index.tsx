import styled from "styled-components";
import { Flex } from "../flex";
import { FC } from "react";

export const Wrapper = styled.div``;
export const Paragraph = styled.p`
  margin-top: 40px;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray4};
`;
export const BasketIcon = styled.img`
  width: 200px;
`;
interface Props {
  text: string;
}
export const EmptyBasket: FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <Flex JsContent={"center"} AlItems={"center"} FlexColumn={"column"}>
        <BasketIcon src="https://static.eldorado.ru/static/css/images/empty-basket.svg" />
        <Paragraph>{text}</Paragraph>
      </Flex>
    </Wrapper>
  );
};

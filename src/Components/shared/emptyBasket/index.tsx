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
export const BigBasketParagraph = styled.p`
  text-align: center;
  width: 450px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  color: #262626;
  line-height: 20px;
`;
export const Title = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #262626;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
`;
export const BasketIcon = styled.img<{ iconWidth: string }>`
  width: ${(props) => props.iconWidth};
`;
interface Props {
  text: string;
  styleParagraph?: boolean;
  title?: string;
  iconWidth?: string;
}
export const EmptyBasket: FC<Props> = ({
  title,
  text,
  styleParagraph = false,
  iconWidth,
}) => {
  return (
    <Wrapper>
      <Flex JsContent={"center"} AlItems={"center"} FlexColumn={"column"}>
        <BasketIcon
          iconWidth={iconWidth ? iconWidth : "200px"}
          src="https://static.eldorado.ru/static/css/images/empty-basket.svg"
        />
        {!styleParagraph ? (
          <Paragraph>{text}</Paragraph>
        ) : (
          <>
            <Title>{title}</Title>
            <BigBasketParagraph>{text}</BigBasketParagraph>
          </>
        )}
      </Flex>
    </Wrapper>
  );
};

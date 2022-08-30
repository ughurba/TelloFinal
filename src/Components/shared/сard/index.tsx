import {
  StyledWrapper,
  StyledBox,
  StyledImg,
  StyledTitle,
  StyledPrice,
  StyledImgBox,
} from "./style";
import { azn } from "../../../Assets";
import { FC } from "react";
import { Flex } from "../";

interface Props {
  MainImgUrl?: Array<string>;
  title: string;
  price: number;
  imgUrl: string;
}

export const Card: FC<Props> = ({ MainImgUrl, imgUrl, title, price }) => {
  return (
    <StyledWrapper>
      <StyledBox>
        <Flex FlexColumn={"column"} AlItems={"center"} JsContent={"center"}>
          <StyledImgBox>
            <StyledImg src={MainImgUrl ? MainImgUrl[1] : imgUrl} />
          </StyledImgBox>
        </Flex>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>
          {price} <img src={azn} />
        </StyledPrice>
      </StyledBox>
    </StyledWrapper>
  );
};

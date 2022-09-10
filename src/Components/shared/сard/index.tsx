import {
  StyledWrapper,
  StyledBox,
  StyledImg,
  StyledTitle,
  StyledPrice,
  StyledImgBox,
} from "./style";
import { azn } from "Assets";
import { FC } from "react";
import { Flex } from "../";
import { Goods } from "types";

export const Card: FC<Goods> = ({
  newPrice,
  oldPrice,
  photos,
  inStock,
  title,
  description,
}) => {
  return (
    <StyledWrapper>
      <StyledBox>
        <Flex FlexColumn={"column"} AlItems={"center"} JsContent={"center"}>
          <StyledImgBox>
            {photos?.map((img) =>
              img.isMain ? <StyledImg key={img.path} src={img.path} /> : ""
            )}
          </StyledImgBox>
        </Flex>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>
          {newPrice} <img src={azn} />
        </StyledPrice>
      </StyledBox>
    </StyledWrapper>
  );
};

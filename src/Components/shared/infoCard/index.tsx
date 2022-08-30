import { Container, Flex } from "../";

import { watching } from "../../../Assets";
import {
  GoodsCount,
  GoodsPath,
  ImageBoxFon,
  ImageBoxMask,
  ImageBoxWatch,
  ImageBoxXiaomi,
  StyledBox,
  StyledChevron,
  StyledImage,
  Title,
} from "./style";

import { FC } from "react";

import { IGoods } from "../../../types";
interface Props {
  phones: IGoods[];
  headphones: IGoods[];
}
export const InfoCard: FC<Props> = ({ phones, headphones }) => {
  return (
    <Container>
      <Flex JsContent={"space-between"}>
        <Flex FlexColumn={"column"}>
          <ImageBoxFon>
            <Title>Telefon</Title>
            <GoodsCount>Məhsul sayı: {phones.length}</GoodsCount>
            <GoodsPath>
              Məhsullara keçid <StyledChevron />
            </GoodsPath>
          </ImageBoxFon>
          <ImageBoxXiaomi></ImageBoxXiaomi>
        </Flex>
        <StyledBox>
          <Flex FlexColumn={"column"}>
            <ImageBoxWatch>
              <Title>Smart Saat</Title>
              <GoodsCount>Məhsul sayı: 46</GoodsCount>
              <GoodsPath>
                Məhsullara keçid <StyledChevron />
              </GoodsPath>
              <StyledImage src={watching} />
            </ImageBoxWatch>
            <ImageBoxMask>
              <Title>Aksesuar</Title>
              <GoodsCount>Məhsul sayı: {headphones.length}</GoodsCount>
              <GoodsPath>
                Məhsullara keçid <StyledChevron />
              </GoodsPath>
            </ImageBoxMask>
          </Flex>
        </StyledBox>
      </Flex>
    </Container>
  );
};

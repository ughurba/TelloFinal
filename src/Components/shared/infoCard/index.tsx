import { Container, Flex } from "../";
import { watching } from "Assets";
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
import { Goods } from "types";
import { useTranslation } from "react-i18next";
interface Props {
  phones: Goods[];
  headphones: Goods[];
}
export const InfoCard: FC<Props> = ({ phones, headphones }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Flex JsContent={"space-between"}>
        <Flex FlexColumn={"column"}>
          <ImageBoxFon>
            <Title>{t("Phone")}</Title>
            <GoodsCount>
              {t("ProductCount")}: {phones?.length}
            </GoodsCount>
            <Flex AlItems="center">
              <GoodsPath>{t("SkipToProducts")}</GoodsPath>
              <StyledChevron />
            </Flex>
          </ImageBoxFon>
          <ImageBoxXiaomi></ImageBoxXiaomi>
        </Flex>
        <StyledBox>
          <Flex FlexColumn={"column"}>
            <ImageBoxWatch>
              <Title>{t("SmartClock")}</Title>
              <GoodsCount>{t("ProductCount")}: 8</GoodsCount>
              <Flex AlItems="center">
                <GoodsPath>{t("SkipToProducts")}</GoodsPath>
                <StyledChevron />
              </Flex>

              <StyledImage src={watching} />
            </ImageBoxWatch>
            <ImageBoxMask>
              <Title>{t("Headphones")}</Title>
              <GoodsCount>
                {t("ProductCount")}: {headphones.length}
              </GoodsCount>
              <Flex AlItems="center">
                <GoodsPath>{t("SkipToProducts")}</GoodsPath>
                <StyledChevron />
              </Flex>
            </ImageBoxMask>
          </Flex>
        </StyledBox>
      </Flex>
    </Container>
  );
};

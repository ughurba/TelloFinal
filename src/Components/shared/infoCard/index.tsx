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
import { useNavigate } from "react-router-dom";
interface Props {
  phones: Goods[];
  headphones: Goods[];
}
export const InfoCard: FC<Props> = ({ phones, headphones }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <Flex JsContent={"space-between"}>
        <Flex FlexColumn={"column"}>
          <ImageBoxFon>
            <Title>{t("Phone")}</Title>
            <GoodsCount>
              {t("ProductCount")}: {phones?.length}
            </GoodsCount>
            <GoodsPath onClick={() => navigate("/phones")}>
              {t("SkipToProducts")} <StyledChevron />
            </GoodsPath>
          </ImageBoxFon>
          <ImageBoxXiaomi></ImageBoxXiaomi>
        </Flex>
        <StyledBox>
          <Flex FlexColumn={"column"}>
            <ImageBoxWatch>
              <Title>{t("SmartClock")}</Title>
              <GoodsCount>{t("ProductCount")}: 46</GoodsCount>
              <GoodsPath>
                {t("SkipToProducts")} <StyledChevron />
              </GoodsPath>
              <StyledImage src={watching} />
            </ImageBoxWatch>
            <ImageBoxMask>
              <Title>{t("Headphones")}</Title>
              <GoodsCount>
                {t("ProductCount")}: {headphones.length}
              </GoodsCount>
              <GoodsPath onClick={() => navigate("/Headphones")}>
                {t("SkipToProducts")} <StyledChevron />
              </GoodsPath>
            </ImageBoxMask>
          </Flex>
        </StyledBox>
      </Flex>
    </Container>
  );
};

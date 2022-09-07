import { FC } from "react";
import {
  StyledChevronRight,
  StyledGlobal,
  StyledLink,
  StyledMore,
  StyledTitle,
  StyledWrapper,
} from "./style";
import { Grid } from "@mui/material";
import { Card, Flex, Container } from "Components/shared";
import { IGoods } from "types";
import { useTranslation } from "react-i18next";
interface Props {
  title: string;
  phonesRating: IGoods[];
  headphones: IGoods[];
}

export const ProductsHome: FC<Props> = ({
  title,
  phonesRating,
  headphones,
}) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <Container>
        <StyledGlobal />
        <Flex JsContent={"space-between"}>
          <StyledTitle>{title}</StyledTitle>
          <StyledMore>
            {t("Hamısına")}
            <StyledChevronRight />
          </StyledMore>
        </Flex>

        <Grid container spacing={3}>
          {title !== t("NewArrivalAccessories") &&
            phonesRating.map((obj) => (
              <Grid key={obj.id} item xs={3}>
                <StyledLink to={`/FullInfoProduct/${obj.id}`}>
                  <Card {...obj} />
                </StyledLink>
              </Grid>
            ))}

          {title === t("NewArrivalAccessories") &&
            headphones.map((obj) => (
              <Grid key={obj.id} item xs={2.3}>
                <Card {...obj} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

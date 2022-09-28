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
import { CustomCard, Flex, Container } from "Components/shared";
import { Goods } from "types";
import { useTranslation } from "react-i18next";
import * as React from "react";
interface Props {
  title: string;
  ratingGoods?: Goods[];
  headphones?: Goods[];
  handleChange: (ev: React.FormEvent<HTMLInputElement>, id: number) => void;
}

export const ProductsHome: FC<Props> = ({
  title,
  ratingGoods,
  handleChange,
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
          {ratingGoods?.map((obj) => (
            <Grid key={obj.id} item xs={3}>
              <CustomCard handleChange={handleChange} {...obj} />
            </Grid>
          ))}

          {/*  {title === t("NewArrivalAccessories") &&*/}
          {/*    headphones?.map((obj) => (*/}
          {/*      <Grid item xs={2.3}>*/}
          {/*        <Card {...obj} />*/}
          {/*      </Grid>*/}
          {/*    ))}*/}
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

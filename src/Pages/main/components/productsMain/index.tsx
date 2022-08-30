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
import { Card, Flex, Container } from "../../../../Components/shared";

import { load } from "../../../../Assets";
import { IGoods } from "../../../../types";

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
  return (
    <StyledWrapper>
      <Container>
        <StyledGlobal />
        <Flex JsContent={"space-between"}>
          <StyledTitle>{title}</StyledTitle>
          <StyledMore>
            Hamısına bax
            <StyledChevronRight />
          </StyledMore>
        </Flex>

        <Grid container spacing={3}>
          {title !== "Yeni gələn aksessuarlar" &&
            phonesRating.map((obj) => (
              <Grid key={obj.id} item xs={3}>
                <StyledLink to={`/FullInfoProduct/${obj.id}`}>
                  <Card {...obj} />
                </StyledLink>
              </Grid>
            ))}

          {title === "Yeni gələn aksessuarlar" &&
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

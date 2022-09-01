import { FC } from "react";
import { IGoods } from "types";
import { StyledGlobal } from "Pages/main/components/productsMain/style";
import { Grid } from "@mui/material";
import { Card } from "../сard";
import { CustomCheck, StyledGrid, StyledLink, Wrapper } from "./style";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

interface Props {
  data: IGoods[];
}
export const Products: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={3}>
        {data.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <StyledLink to={`/FullInfoProduct/${obj.id}`}>
              <Card {...obj} />
            </StyledLink>
            <CustomCheck icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

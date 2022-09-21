import { FC } from "react";
import { StyledGlobal } from "Pages/main/components/productsMain/style";
import { Grid } from "@mui/material";
import { CustomCard } from "../сard";
import { StyledGrid, Wrapper } from "./style";

import { ShopGoods } from "types";

interface Props {
  data: ShopGoods;
}
export const Products: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={5}>
        {data?.result.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <CustomCard {...obj} />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

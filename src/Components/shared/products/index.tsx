import { FC } from "react";
import { StyledGlobal } from "Pages/main/components/productsMain/style";
import { Grid } from "@mui/material";
import { CustomCard } from "../сard";
import { StyledGrid, Wrapper } from "./style";

import { ShopGoods } from "types";
import * as React from "react";

interface Props {
  data: ShopGoods;
  handleChange: (ev: React.FormEvent<HTMLInputElement>, id: number) => void;
}
export const Products: FC<Props> = ({ data, handleChange }) => {
  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={5}>
        {data?.result.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <CustomCard handleChange={handleChange} {...obj} />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

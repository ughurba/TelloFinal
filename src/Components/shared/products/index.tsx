import { FC, useState } from "react";
import { StyledGlobal } from "Pages/main/components/productsMain/style";
import { Grid } from "@mui/material";
import { CustomCard } from "../сard";
import { StyledGrid, Wrapper } from "./style";

import { ShopGoods } from "types";
import * as React from "react";
import { useAppSelector } from "../../../Redux/hooks";

interface Props {
  data: ShopGoods;
  handleNoCheckFavorite: (id: number) => void;
  checked?: boolean;
}
export const Products: FC<Props> = ({ data, handleNoCheckFavorite }) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={5}>
        {data?.result.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <CustomCard
              favorites={data.productIdFavorite?.includes(obj.id)}
              handleNoCheckFavorite={handleNoCheckFavorite}
              {...obj}
            />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

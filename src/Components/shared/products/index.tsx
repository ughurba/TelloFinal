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
  handleChangeFavorite: (
    ev: React.FormEvent<HTMLInputElement>,
    id: number
  ) => void;
  checked?: boolean;
}
export const Products: FC<Props> = ({ data, handleChangeFavorite }) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={5}>
        {data?.result.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <CustomCard
              favorites={data.productIdFavorite?.includes(obj.id)}
              handleChangeFavorite={handleChangeFavorite}
              {...obj}
            />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

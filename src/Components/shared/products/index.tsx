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
  handleChange: (ev: React.FormEvent<HTMLInputElement>, id: number) => void;
}
export const Products: FC<Props> = ({ data, handleChange }) => {
  const [fav, setFav] = useState<number[]>();
  const { user } = useAppSelector((state) => state.user);
  
  return (
    <Wrapper>
      <StyledGlobal />
      <Grid container spacing={5}>
        {data?.result.map((obj) => (
          <StyledGrid key={obj.id} item xs={4}>
            <CustomCard
              favorites={data?.favorits?.filter((item) => {
                if (
                  item.appUserId === user.nameid &&
                  item.prdocutId === obj.id
                ) {
                  return item.prdocutId;
                }
              })}
              handleChange={handleChange}
              {...obj}
            />
          </StyledGrid>
        ))}
      </Grid>
    </Wrapper>
  );
};

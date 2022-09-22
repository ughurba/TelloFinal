import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Flex } from "Components/shared";
import { useTranslation } from "react-i18next";
import { From, MaxPrice, MinPrice, Title, To, Wrapper } from "./style";
import { useGetFilteredMinMaxPriceQuery } from "services/shopServices";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { FC, useEffect } from "react";
import { setPhones } from "Redux/slices/goodsSlice";

function valuetext(value: number) {
  return `${value}$`;
}

interface Props {
  value: number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
}
export const RangeSlider: FC<Props> = ({ value, handleChange }) => {
  const { t } = useTranslation();

  // const { data } = useGetFilteredMinMaxPriceQuery({
  //   minPrice: value[0],
  //   maxPrice: value[1],
  //   categoryId: categoryId,
  // });
  //
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setPhones(data));
  //   }
  // }, [data]);
  return (
    <Wrapper>
      <Title>{t("Price")}</Title>

      <Box sx={{ width: 270 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={0}
          max={4300}
        />
      </Box>
      <Flex FlexWrap={"wrap"} AlItems={"flex-end"}>
        <MinPrice>{value[0]} $</MinPrice>
        <From>{t("From")}</From>
        <MaxPrice>{value[1]} $</MaxPrice>
        <To>{t("To")}</To>
      </Flex>
    </Wrapper>
  );
};

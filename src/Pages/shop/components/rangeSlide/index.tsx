import * as React from "react";
import Box from "@mui/material/Box";
import { Flex } from "Components/shared";
import { useTranslation } from "react-i18next";
import {
  From,
  MaxPrice,
  MinPrice,
  PrettoSlider,
  Title,
  To,
  Wrapper,
} from "./style";

import { FC } from "react";

function valuetext(value: number) {
  return `${value}$`;
}

interface Props {
  value: number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
}
export const RangeSlider: FC<Props> = ({ value, handleChange }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("Price")}</Title>

      <Box sx={{ width: 270 }}>
        <PrettoSlider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={0}
          max={4300}
          defaultValue={20}
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

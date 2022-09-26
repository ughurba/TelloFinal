import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FC } from "react";
export const StyledBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 80px;
`;
interface Props {
  handleValue: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const NativeSelectDemo: FC<Props> = ({ handleValue }) => {
  const { t } = useTranslation();

  return (
    <StyledBox sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {t("OrderBy")}
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: t("OrderBy"),
            id: "uncontrolled-native",
          }}
          onChange={handleValue}
        >
          <option value={0}>{t("FirstOfAllCheap")}</option>
          <option value={1}>{t("FirstOfAllExpensive")}</option>
        </NativeSelect>
      </FormControl>
    </StyledBox>
  );
};

import styled from "styled-components";
import { styled as MuiStyled, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

export const StyledLabel = styled.label`
  display: block;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px 0;
`;

export const StyledInput = MuiStyled(TextField)`
  width: 80%;
  margin-top:10px;
  border-radius: 8px;
 
  outline: none;
`;
export const StyledSelect = MuiStyled(Select)``;
export const StyledMenuItem = MuiStyled(MenuItem)``;

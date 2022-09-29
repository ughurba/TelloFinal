import styled from "styled-components";
import Button from "@mui/material/Button";

import { styled as MuiStyled, TextField } from "@mui/material";

export const StyledLabel = styled.label`
  display: block;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const StyledInput = MuiStyled(TextField)`
  width: 80%;
  margin-top:20px;
  border-radius: 8px;
  outline: none;
`;

export const StyledSelect = styled.select`
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`;
export const WrapperSelect = styled.div`
  margin-top: 20px;
`;
export const StyledButton = MuiStyled(Button)`
margin-top:20px;

`;
export const WrapperUpload = styled.div`
  margin-top: 20px;
`;

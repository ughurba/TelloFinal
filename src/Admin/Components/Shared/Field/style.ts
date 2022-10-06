import { styled as MuiStyled, TextField } from "@mui/material";
import styled from "styled-components";
export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.space[4]} 0px;
`;
export const StyledField = MuiStyled(TextField)`
width: 279px;
height: 48px;
background: #f2f2f2;
border-radius: 8px;
border: none;
outline: none;
`;
export const StyledErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  color: red;
`;
export const Label = styled.label`
  display: block;
`;

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
export const ColorInput = styled.input`
  margin-left: 20px;
`;
export const StyledErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  color: red;
`;
export const StyledSpan = styled.span``;
export const WrapperMultiFile = styled.div`
  display: flex;
  width: 260px;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 12px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(206, 212, 218);
  overflow-y: scroll;
  max-height: 200px;
`;

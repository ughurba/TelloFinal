import styled from "styled-components";
import Button from "@mui/material/Button";

import { styled as MuiStyled, TextField } from "@mui/material";

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
export const WrapperSelect = styled.div`
  margin-top: 20px;
`;
export const StyledButton = MuiStyled(Button)`
margin-top:20px;

`;
export const WrapperUpload = styled.div`
  margin-top: 50px;
`;

export const StyledErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  color: red;
`;

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

export const WrapperImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 65px;
  height: 50px;
  margin-left: 10px;
`;
export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

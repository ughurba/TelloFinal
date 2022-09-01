// import styled, { css } from "styled-components";
// import { styled as MuiStyled } from "@material-ui/styles";
import { Eye, EyeSlash } from "phosphor-react";
import { LoadingButton } from "@mui/lab";
import { Button, styled as MuiStyled } from "@mui/material";
import styled, { css } from "styled-components";

const StyleEye = css`
  top: 40px;
  right: 40px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.oldSilver}};
`;

export const Wrapper = styled.div`
  width: 300px;
`;
export const Password = styled.div`
  position: relative;
`;
export const StyledEyeSlash = styled(EyeSlash)`
  ${StyleEye}
`;
export const StyledEye = styled(Eye)`
  ${StyleEye}
`;
export const StyledButton = MuiStyled(Button)`
  width: 279px;
  height: 48px;
  background: #2DD06E;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  color: white;
  margin-bottom: 13px;
  &:hover{
    background: #2DD06E;
  }

`;

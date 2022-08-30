import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";

export const SubFilterWrapper = styled.div``;
export const CheckBoxWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[3]};
`;
export const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.space[3]};
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: ${({ theme }) => theme.fontStyle.size.large};
`;
export const StyledCheckBox = MuiStyled(Checkbox)`
padding:0;
background: rgba(0, 214, 143, 0.16);
color:#2DD06E;
width:18px;
height:18px;
&.Mui-checked{
color:#2DD06E ;
}
`;

import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MaximizeIcon from "@mui/icons-material/Maximize";

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
  padding: 14px 0px;
  margin-left: 24px;
`;
export const Box = styled.div`
  width: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px;
  background: #f1f1f1;
  border-radius: 8px;
  margin-bottom: 16px;
`;
export const SubParagraph = styled.p`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
  width: 700px;
  margin: 32px 0px 30px 40px;
`;
export const Plus = MuiStyled(AddIcon)`
cursor:pointer;
margin-right:24px;
`;
export const Minus = MuiStyled(MaximizeIcon)`
cursor:pointer;
margin-right:24px;
position:absolute;
top:20px;
right:0px;
`;

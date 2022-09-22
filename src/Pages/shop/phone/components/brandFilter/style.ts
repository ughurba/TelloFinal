import { styled as MuiStyled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MaximizeIcon from "@mui/icons-material/Maximize";
import styled from "styled-components";

export const Plus = MuiStyled(AddIcon)`
cursor:pointer;
`;
export const Minus = MuiStyled(MaximizeIcon)`
position: absolute;
cursor:pointer;
top:8px;
right:0;
`;
export const Wrapper = styled.div``;
export const Box = styled.div`
  width: 280px;
  position: relative;
  margin-top: 10px;
`;

export const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray4};
  margin-top: 25px;
`;
export const Title = styled.h5`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
  margin: 0 0 16px;
`;

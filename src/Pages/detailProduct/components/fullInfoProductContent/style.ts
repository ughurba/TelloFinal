import styled, { css } from "styled-components";
import { RedAzn } from "../../../../Assets";
import { Button, styled as MuiStyled } from "@mui/material";

interface colorProps {
  colors: string;
}
export const StyledRating = styled.div`
  margin-top: 16px;
`;

export const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray4};
  width: 100%;
  height: 1px;
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  margin-left: 136px;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
export const Price = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #db2c66;
  margin-top: 40px;
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: #4f4f4f;
`;

export const Color = styled.p<colorProps>`
  border: 1px solid
    ${({ colors }) => (colors === "#FFFFFF" ? "#E0E0E0" : colors)};
  background: ${(props) => props.colors};
  border-radius: 50px;
  width: 32px;
  height: 32px;
  margin-left: 22px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const WrapperColor = styled.div`
  margin-top: 37px;
`;
export const Azn = styled(RedAzn)`
  position: relative;
  top: 4px;
  left: 5px;
`;
export const WrapperLink = styled.div`
  margin-top: 28px;
`;
export const StyledButton = MuiStyled(Button)`
  background: #2dd06e;
  border-radius: 8px;
  padding: 14px 48px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  border: none;
  cursor: pointer;
  &:hover{
    background:#2dd06e;
  }
`;
export const Storage = styled.p`
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(even) {
    background: #4f4f4f;
    color: white;
  }
  background: #f2f2f2;
  color: black;
  margin-left: 16px;
`;
export const WrapperStorage = styled.div`
  margin-top: 24px;
`;

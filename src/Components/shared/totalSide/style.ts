import styled, { css } from "styled-components";
import { styled as MuiStyled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  max-width: 344px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 32px rgba(130, 130, 130, 0.08);
  padding: 32px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.green};
`;
const FontStyle = css`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.medium}
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray31};
`;
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.titleBlack};
`;
export const List = styled.ul``;
export const WrapperLink = styled.div`
  margin-top: ${({ theme }) => theme.space[3]};
`;
export const Link = styled.li`
  list-style: none;
  ${FontStyle}
`;
export const Price = styled.span`
  margin-right: 8px;
  ${FontStyle}
`;
export const Line = styled.div`
  margin: ${({ theme }) => theme.space[3]} 0px;
  border-top: 1px solid black;
`;
export const Total = styled.p`
  list-style: none;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.medium}
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray31};`;

export const StyledButton = MuiStyled(Button)`
  background: #2dd06e;
  border-radius: 8px;
  padding: 13px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  border: none;
  cursor: pointer;
  &:hover{
    background:#2dd06e;
  }
  margin-top:30px;
`;

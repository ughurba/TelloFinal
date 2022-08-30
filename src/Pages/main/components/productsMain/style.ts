import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "../../../../Theme";
import { ChevronRight } from "../../../../Assets";
import { NavLink } from "react-router-dom";

interface ITheme {
  theme: Theme;
}
export const StyledGlobal = createGlobalStyle<ITheme>`
div{
  color: ${(props) => props.theme.colors.gray};
  font-weight:${(props) => props.theme.fontStyle.fontWeight.medium};
}
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
export const StyledChevronRight = styled(ChevronRight)`
  position: absolute;
  top: 1px;
  right: -28px;
`;
export const StyledTitle = styled.h5`
  font-size: ${(props) => props.theme.fontStyle.size.large};
  margin-bottom: ${(props) => props.theme.space[6]};
  line-height: 1.5;
`;

export const StyledMore = styled.span`
  font-size: ${(props) => props.theme.fontStyle.size.medium};
  line-height: 1.6;
  cursor: pointer;
  margin-right: ${(props) => props.theme.space[8]};
  position: relative;
`;

export const StyledWrapper = styled.div`
  padding-bottom: ${(props) => props.theme.space[6]}; ;
`;

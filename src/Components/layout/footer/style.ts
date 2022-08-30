import styled, { css } from "styled-components";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
import { styled as MuiStyled } from "@mui/material";
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;
export const StyledInstagramIcon = MuiStyled(InstagramIcon)`
color:white;
`;
export const FacebookIcon = MuiStyled(FacebookTwoToneIcon)`
color:white;
`;
export const StyledYouTubeIcon = MuiStyled(YouTubeIcon)`
color:white;
`;
export const StyledTwitterIcon = MuiStyled(TwitterIcon)`
color:white;
`;
export const Wrapper = styled.div`
  background: black;
  padding-top: ${(props) => props.theme.space[7]};
`;
export const ColorStyle = css`
  color: ${(props) => props.theme.colors.white};
`;
export const IconTitle = styled.ul`
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.medium};
  font-size: 32px;
  line-height: 41px;
  ${ColorStyle}
  &:after {
    content: "X";
    color: green;
    margin-left: 9px;
  }
`;
export const Title = styled.h5`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  ${ColorStyle}
`;
export const List = styled.li`
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: ${(props) => props.theme.space[4]};
  ${ColorStyle}
  &:nth-child(2) {
    margin-top: ${(props) => props.theme.space[6]};
  }
`;
export const StyledIcon = styled.li`
  list-style: none;
  margin-left: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[5]};
  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const Span = styled.span`
  margin-left: 20px;
  position: relative;
  bottom: 7px;
  ${ColorStyle}
`;

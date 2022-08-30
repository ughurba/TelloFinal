import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { styled as MuiStyled } from "@mui/material/styles";
import { Checkbox, Grid } from "@mui/material";

export const Wrapper = styled.div``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
`;
export const StyledGrid = MuiStyled(Grid)`
position:relative;
`;
export const CustomCheck = MuiStyled(Checkbox)`
  position: absolute;
  top:30px;
  right:50px;
`;

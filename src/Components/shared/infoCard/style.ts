import styled, { css } from "styled-components";
import { Box, Grid, css as MuiCss, styled as MuiStyled } from "@mui/material";
import { fon, xiaomi, watch, mask, ChevronBlue } from "../../../Assets";

export const FontStyle = css`
  font-style: normal;
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.light};
  font-size: ${(props) => props.theme.space[3]};
  line-height: 1.5;
`;
export const ImageBoxStyle = MuiCss`
  background-repeat: no-repeat;
  background-size: cover;
  height: 356px;
  width: 592px;
  padding: 70px;
`;
export const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.space[4]};
`;
export const GoodsCount = styled.span`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.space[4]};
  ${FontStyle}
`;
export const GoodsPath = styled.p`
  position: relative;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${FontStyle}
`;
export const StyledBox = MuiStyled(Box)`
    margin-right:60px;
`;
export const ImageBoxFon = MuiStyled(Box)`
   background-image:url(${fon}); 
    ${ImageBoxStyle}
`;
export const ImageBoxWatch = MuiStyled(Box)`
   background-image:url(${watch}); 
   margin-bottom:50px;
   position:relative;
    ${ImageBoxStyle};
`;
export const ImageBoxXiaomi = MuiStyled(Box)`
   background-image:url(${xiaomi}); 
   height:405px !important;
    ${ImageBoxStyle};
`;
export const ImageBoxMask = MuiStyled(Box)`
   background-image:url(${mask}); 
     ${ImageBoxStyle};
     
`;
export const StyledChevron = styled(ChevronBlue)`
  position: absolute;
  top: 6px;
  right: 320px;
`;
export const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 30px;
`;

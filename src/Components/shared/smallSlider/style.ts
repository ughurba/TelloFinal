import styled from "styled-components";
import { Box, styled as MuiStyled } from "@mui/material";
export const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.space[8]};
  padding-top: 50px;
  background: #f5f5f7;
  & .swiper-pagination-bullets {
    bottom: 0px;
  }
  & .swiper-wrapper {
    height: 180px;
  }
`;
export const StyledBox = MuiStyled(Box)`
  border: 1px solid white;
  width: 200px;
  border-radius: 10px;
   background: white;
  
`;

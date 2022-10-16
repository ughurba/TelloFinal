import styled, { css } from "styled-components";
import { styled as MuiStyled } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const FontStyles = css`
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.medium};
  font-size: 20px;
  line-height: 1.5;
`;
export const StyledTypographyPrices = MuiStyled(Typography)`
margin-top:15px;
`;
export const StyledCardContent = MuiStyled(CardContent)`
padding:8px;
`;
export const Title = MuiStyled(Typography)`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
position:relative;
top:4px;
color: #333333;
`;
export const StockNoStock = css`
  display: block;
  position: relative;
  top: 10px;
  font-size: 16px;
`;
export const Stock = styled.span`
  color: green;
  ${StockNoStock}
`;
export const NoStock = styled.span`
  color: red;
  ${StockNoStock}
`;

export const NewPrice = styled.span`
  color: ${(props) => props.theme.colors.cerise};

  ${FontStyles}
`;
export const OldPrice = styled.del`
  color: ${(props) => props.theme.colors.oldSilver};
  margin-right: 15px;
  ${FontStyles}
`;
export const StyledCardActions = MuiStyled(CardActions)`
padding:0px;
`;

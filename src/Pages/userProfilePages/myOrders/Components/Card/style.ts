import { styled as MuiStyled, css } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

const OrderStatusStyled = css`
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  border-radius: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 25px;
  color: white;
`;
export const StyledSuccsess = MuiStyled(Typography)`
background-color: green;
padding:0px 20px;
${OrderStatusStyled}
`;
export const StyledReject = MuiStyled(Typography)`
background-color: red;
${OrderStatusStyled}
`;
export const StyledPending = MuiStyled(Typography)`
background-color: #ffcc00;
${OrderStatusStyled}
`;
export const Price = MuiStyled(Typography)`
  color:#DB2C66;
  margin-top:5px;
`;
export const StyledCard = MuiStyled(Card)`
background-color: white;
border-color:white;
margin-left: 20px;
margin-top: 10px; 

`;
export const StyledTypography = MuiStyled(Typography)`
color:black;
`;

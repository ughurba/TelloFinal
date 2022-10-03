import { styled as MuiStyled } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
export const SuccsessStatus = MuiStyled(Typography)`

font-size:13px;
font-weight:500;
color:green;
margin-top:5px;
`;
export const BadStatus = MuiStyled(Typography)`
color:red;
font-size:13px;
font-weight:500;
width:100px;
margin-top:5px;
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

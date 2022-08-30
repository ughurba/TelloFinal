import {
  Box,
  Button,
  Card,
  Typography,
  styled,
  TypographyProps,
} from "@mui/material";
import styledComp from "styled-components";
export const StyledCardMui = styled(Card)`
  display: flex;
  width: 592px;
  margin: ${(props) => props.theme.spacing(6)} 0;
  background: #f6f5f8;
`;

export const StyledBoxMui = styled(Box)`
  height: 280px;
  display: flex;
  padding: ${(props) => props.theme.spacing(2)};
`;
export const SpanInfoPrice = styledComp.span`
  fontsize: 15px;
  fontweight: 500;
  margin-left: 5px;
`;
export const StartPrice = styledComp.p`
  color: black;
  fontweight: 700;
  fontsize: 20px;
  margin-top: 30px;
`;
export const DiscountPrice = styled(Typography)`
  color: #9e9e9e;
  component: div;
  variant: span;
`;
export const PriceTypography = styled(Typography)`
  color: black;
  fontweight: 700;
  component: div;
  variant: span;
  fontsize: 20px;
  margin-top: 20px;
`;
export const StyledTypography = styled(Typography)<
  TypographyProps<"h4", { component: "h4" }>
>`
  font-size: ${(props) => props.theme.spacing(4)};
  color: black;
  font-weight: 600;
`;
export const StyledButton = styled(Button)`
  border-radius: ${(props) => props.theme.spacing(2)};
  padding: ${(props) => props.theme.spacing(0.4, 3)};
  margin-top: ${(props) => props.theme.spacing(2)};
  color: #808080;
  border-color: #808080;
  &:hover {
    background: blueviolet;
    color: white;
  }
`;

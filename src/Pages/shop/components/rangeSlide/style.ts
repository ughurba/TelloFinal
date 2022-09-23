import styled from "styled-components";
import Slider from "@mui/material/Slider";

export const Wrapper = styled.div`
  margin-top: 40px;
`;
export const From = styled.span`
  color: #02030380;
  font-size: 12px;
  margin: 0 10px 0 8px;
`;
export const To = styled.span`
  color: #02030380;
  font-size: 12px;
  margin: 0 10px 0 8px;
`;
export const MinPrice = styled.span`
  font-size: 14px;
  border-bottom: 1px solid rgba(157, 163, 179, 0.5);
  padding: 0 5px 0;
  color: #db2c66;
`;
export const MaxPrice = styled.span`
  font-size: 14px;
  border-bottom: 1px solid rgba(157, 163, 179, 0.5);
  padding: 0 5px 0;
  color: #db2c66;
`;

export const Title = styled.h6`
  font-size: 16px;
  margin: 0 0 16px;
  color: #f6861f;
`;
export const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#52af77",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "3px solid #52af77",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

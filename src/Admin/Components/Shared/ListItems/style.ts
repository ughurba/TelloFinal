import styled from "styled-components";
import { Link } from "react-router-dom";
import { Select } from "@mui/material";
export const StyledLinks = styled(Link)`
  text-decoration: none;
  color: #000000de;
`;
export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    padding: 5px 7px !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23) !important;
  }
`;
export const WrapperLang = styled.div`
  width: 30px;

  display: inline-block;
`;

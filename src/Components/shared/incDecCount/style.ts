import styled, { css } from "styled-components";
import { Minus, Plus } from "phosphor-react";
const IncDecStyle = css`
  background: #f2f2f2;
  border-radius: 50%;
  font-weight: 700;
  font-size: 27px;
  padding: 5px 5px;
  cursor: pointer;
`;
export const Value = styled.span`
  padding: 0 25px;
  font-weight: 500;
`;
export const IncDec = styled.div``;
export const StyledPlus = styled(Plus)`
  ${IncDecStyle}
`;
export const StyledMinus = styled(Minus)`
  ${IncDecStyle};
`;

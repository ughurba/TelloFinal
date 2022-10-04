import styled, { css } from "styled-components";
import { Check, X } from "phosphor-react";
export const Wrapper = styled.div``;
const StyleOrderStatus = css`
  color: white;
  border-radius: 5px;
  padding: 13px;
  font-weight: 500;
`;

export const StyledCheck = styled(Check)`
  color: green;
  font-size: 30px;
  margin-right: 5px;
  cursor: pointer;
`;
export const StyledRejectIcon = styled(X)`
  color: red;
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
`;
export const StyledImg = styled.img`
  width: 60px;
`;
export const StyledPending = styled.span`
  background-color: ${({ theme }) => theme.colors.yellow};
  ${StyleOrderStatus}
  padding: 13px 17px;
`;
export const StyledSuccsess = styled.span`
  background-color: ${({ theme }) => theme.colors.green};
  ${StyleOrderStatus}
`;
export const StyledReject = styled.span`
  background-color: red;
  ${StyleOrderStatus}
`;
export const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
`;

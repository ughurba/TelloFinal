import styled, { css } from "styled-components";
import { Check, X } from "phosphor-react";
export const Wrapper = styled.div``;
const StyleOrderStatus = css`
  color: white;
  border-radius: 5px;
  font-weight: 700;
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const StyledCheck = styled(Check)`
  color: green;
  font-size: 30px;
`;
export const StyledRejectIcon = styled(X)`
  color: red;
  font-size: 30px;
`;
export const StyledImg = styled.img`
  width: 60px;
  object-fit: contain;
`;
export const StyledPending = styled.span`
  background-color: ${({ theme }) => theme.colors.yellow};
  ${StyleOrderStatus}
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

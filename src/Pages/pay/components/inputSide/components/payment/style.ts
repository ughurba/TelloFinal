import styled from "styled-components";

export const Text = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.titleBlack};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
`;
interface CheckButton {
  cash?: boolean;
  card?: boolean;
}

export const StyledButton = styled.button<CheckButton>`
  padding: 10px 40px 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(1) {
    background: ${({ card }) => (card ? "#e5e5e5" : "white")};
    border: 1px solid ${({ card }) => (card ? "black" : "#c9c7c7")};
  }

  &:nth-child(2) {
    background: ${({ cash }) => (cash ? "#e5e5e5" : "white")};
    border: 1px solid ${({ cash }) => (cash ? "black" : "#c9c7c7")};
  }
`;

export const StyledConfirmButton = styled.button`
  padding: ${({ theme }) => theme.space[3]} 62px;
  margin-top: ${({ theme }) => theme.space[6]};
  border: none;
  background: #2dd06e;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[9]};
`;

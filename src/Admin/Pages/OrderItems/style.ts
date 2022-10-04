import styled from "styled-components";

export const StyledColor = styled.div<{ color: string }>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 5px;
`;

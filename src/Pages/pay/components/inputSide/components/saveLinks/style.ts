import styled from "styled-components";

export const StyledSaveLink = styled.span`
  font-weight: 700;
  padding-right: 4px;
`;
export const SaveLink = styled.li`
  list-style: none;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.titleBlack};
  margin-top: ${({ theme }) => theme.space[2]};
`;

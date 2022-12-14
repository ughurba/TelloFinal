import styled from "styled-components";

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.titleBlack};
  padding-bottom: 40px;
  margin-top: 20px;
`;
export const Wrapper = styled.div`
  padding-bottom: 200px;
  /* margin-top: 10px; */
  background: #f1f1f1;
`;

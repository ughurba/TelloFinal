import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 0;
`;
export const RegisterSide = styled.div`
  position: relative;
`;
export const RegisterImg = styled.img`
  position: relative;
  z-index: 10;
`;
export const RegisterFon = styled.img`
  position: absolute;
  top: -40px;
  right: -84px;
  z-index: 0;
`;
export const StyledRegisterText = styled.p`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  margin-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray31};
`;
export const StyledToRegister = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.14;
  color: #2d9cdb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

import styled, { css } from "styled-components";
import { Eye, EyeSlash } from "phosphor-react";

const StyleEye = css`
  top: 40px;
  right: 40px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.oldSilver}};
`;

export const Wrapper = styled.div`
  width: 300px;
`;
export const Password = styled.div`
  position: relative;
`;
export const StyledEyeSlash = styled(EyeSlash)`
  ${StyleEye}
`;
export const StyledEye = styled(Eye)`
  ${StyleEye}
`;
export const StyledButton = styled.button`
  width: 279px;
  height: 48px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  border: none;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.14;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 13px;
  cursor: pointer;
`;

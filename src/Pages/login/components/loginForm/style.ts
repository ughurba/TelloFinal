import styled, { css } from "styled-components";
import { Eye, EyeSlash } from "phosphor-react";
import { Facebook, Google } from "Assets";

const StyleEye = css`
  top: 48px;
  right: 40px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.oldSilver}};
`;
const StyleIcon = css`
  border-radius: 20px;
  padding: 8px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const StyledFacebook = styled(Facebook)`
  background: #4267b2;
  ${StyleIcon}
`;
export const StyledGoogle = styled(Google)`
  background: #db4437;
  margin-left: 56px;
  ${StyleIcon}
`;
export const Text = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.gray31};
  margin-left: 8px;
`;
export const WrapperTitle = styled.div`
  margin-bottom: 32px;
`;
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray31};
  margin-bottom: 32px;
`;

export const SubText = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 18px;
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.gray4};
`;
export const Wrapper = styled.div`
  width: 300px;
`;
export const Password = styled.div`
  position: relative;
  margin-top: 30px;
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
  margin-top: 35px;
`;

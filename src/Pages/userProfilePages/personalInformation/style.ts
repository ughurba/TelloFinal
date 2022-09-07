import styled from "styled-components";
import { MyField } from "Components/shared";
import { PencilSimpleLine } from "phosphor-react";

export const WrapperForm = styled.div`
  padding: 32px;
  background: white;
  border-radius: 8px;
`;
export const Wrapper = styled.div`
  width: 720px;
  height: 420px;
`;
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
  margin-bottom: 16px;
`;
export const StyledDate = styled(MyField)`
  padding-right: 20px;
`;
export const StyledPencil = styled(PencilSimpleLine)`
  margin-right: 10px;
`;

import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.space[4]} 0px;
`;
export const StyledField = styled(Field)`
  width: 279px;
  height: 48px;
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: ${({ theme }) => theme.space[0]} 0px;
  padding-left: ${({ theme }) => theme.space[3]};
`;
export const StyledErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  color: red;
`;
export const Label = styled.label`
  display: block;
`;

import styled from "styled-components";
import { FC, ReactNode } from "react";

const StyledContainer = styled.div`
  margin: 0px 75px;
  padding-top: 20px;
`;

interface IProps {
  children?: ReactNode;
}
export const Container: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

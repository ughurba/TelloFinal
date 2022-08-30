import styled from "styled-components";
import { FC, ReactNode } from "react";

interface IProps {
  JsContent?: string;
  AlItems?: string;
  FlexWrap?: string;
  FlexColumn?: string;
  children?: ReactNode;
}
const StyledFlex = styled.div<IProps>`
  display: flex;
  justify-content: ${(props) => props.JsContent || "flex-start"};
  align-items: ${(props) => props.AlItems || "flex-start"};
  flex-wrap: ${(props) => props.FlexWrap || "nowrap"};
  flex-direction: ${(props) => props.FlexColumn || "row"};
`;

export const Flex: FC<IProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

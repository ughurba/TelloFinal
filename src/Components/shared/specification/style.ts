import styled, { css } from "styled-components";

interface TitleProps {
  specification: boolean;
}
export const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray4};
  width: 100%;
  height: 2px;
  margin-top: 14px;
`;
export const Title = styled.h4<TitleProps>`
  font-weight: ${(props) => (props.specification ? "500" : "700")};
  font-size: 20px;
  line-height: 1.4;
  color: ${({ specification }) => (specification ? "#BDBDBD" : "black")};
  margin-left: 200px;
  cursor: pointer;
  &:nth-child(1) {
    margin-left: 0px;
    font-weight: ${({ specification }) => (specification ? "700" : "500")};
    color: ${(props) => (props.specification === true ? "black" : "#BDBDBD")};
  }
`;
export const Wrapper = styled.div`
  margin-top: 100px;
`;
const StyleSpecification = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  margin-top: 32px;
  color: #4f4f4f;
`;
export const List = styled.ul`
  ${StyleSpecification}
  &:nth-child(2) {
    margin-top: 60px;
  }
`;
export const InfoProduct = styled.h4`
  ${StyleSpecification}
`;
const StyleParagrpah = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #828282;
  list-style: none;
  margin-top: 16px;
`;
export const Paragraph = styled.p`
  width: 456px;
  ${StyleParagrpah}
`;
export const Link = styled.li`
  ${StyleParagrpah}
  &:nth-child(1) {
    margin-top: 28px;
  }
`;

import styled, { css } from "styled-components";
import { MyField } from "../../../../Components/shared/field";
import { X } from "phosphor-react";

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
const StyleColorDate = css`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  color: ${({ theme }) => theme.colors.gray31};
  display: inline-block;
  margin-top: 8px;
  line-height: 1.33;
`;
export const List = styled.ul`
  ${StyleSpecification}
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
`;
export const Paragraph = styled.p`
  width: 456px;

  ${StyleParagrpah}
`;
export const Link = styled.li`
  ${StyleParagrpah}
  margin-top: 15px;
  &:nth-child(1) {
    margin-top: 28px;
  }
`;
export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  color: ${({ theme }) => theme.colors.gray31};
  line-height: 1.5;
  margin-top: 16px;
  width: 1000px;
`;
export const WrapperComment = styled.div`
  margin-top: 38px;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
  position: relative;
`;
export const StyledTextArea = styled(MyField).attrs({
  component: "textarea",
  id: "comment",
  name: "comment",
  placeholder: "Rətinizi buraya yazın",
  label: "Rəyinizi yazın",
})`
  width: 100%;
  height: 144px;
  padding-left: 20px;
  padding-top: 15px;
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  outline: none;
  resize: none;
  margin-top: 10px;
`;
export const FullName = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
`;
export const StorageColor = styled.span`
  ${StyleColorDate}
`;
export const StyledDateTime = styled.span`
  padding-top: 0px;
  ${StyleColorDate}
`;
export const WrapperReviews = styled.div``;

export const Close = styled(X)`
  right: 10px;
  top: -20px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

import { FC } from "react";
import {
  CheckBoxWrapper,
  StyledCheckBox,
  StyledLabel,
  SubFilterWrapper,
} from "./style";

export const SubFilter: FC = () => {
  return (
    <SubFilterWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox id={"Iphone"} />
        <StyledLabel htmlFor={"Iphone"}>Iphone</StyledLabel>
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox id={"Samsung"} />
        <StyledLabel htmlFor={"Samsung"}>Samsung</StyledLabel>
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox id={"Honor"} />
        <StyledLabel htmlFor={"Honor"}>Honor</StyledLabel>
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox id={"Xiaomi"} />
        <StyledLabel htmlFor={"Xiaomi"}>Xiaomi</StyledLabel>
      </CheckBoxWrapper>
    </SubFilterWrapper>
  );
};

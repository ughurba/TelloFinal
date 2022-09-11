import { FC } from "react";
import {
  CheckBoxWrapper,
  StyledCheckBox,
  StyledLabel,
  SubFilterWrapper,
} from "./style";

interface Props {
  name: string;
  id: number;
}
export const SubFilter: FC<Props> = ({ name, id }) => {
  return (
    <SubFilterWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox id={name} />
        <StyledLabel htmlFor={name}>{name}</StyledLabel>
      </CheckBoxWrapper>
    </SubFilterWrapper>
  );
};

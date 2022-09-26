import { FC, FormEvent } from "react";
import {
  CheckBoxWrapper,
  StyledCheckBox,
  StyledLabel,
  SubFilterWrapper,
} from "./style";

interface Props {
  name: string;
  id: number;
  handleChange?: (ev: FormEvent<HTMLInputElement>) => void;
}
export const SubFilter: FC<Props> = ({ name, id, handleChange }) => {
  return (
    <SubFilterWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox
          onChange={handleChange}
          name={id.toString()}
          id={name}
        />
        <StyledLabel htmlFor={name}>{name}</StyledLabel>
      </CheckBoxWrapper>
    </SubFilterWrapper>
  );
};

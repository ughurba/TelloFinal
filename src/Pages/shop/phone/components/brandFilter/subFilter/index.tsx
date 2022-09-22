import { FC, FormEvent, useState } from "react";
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
  const [brands, setBrands] = useState<Record<string, boolean>>();
  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    setBrands({ ...brands, [ev.currentTarget.name]: ev.currentTarget.checked });
  };
  return (
    <SubFilterWrapper>
      <CheckBoxWrapper>
        <StyledCheckBox onChange={handleChange} name={name} id={name} />
        <StyledLabel htmlFor={name}>{name}</StyledLabel>
      </CheckBoxWrapper>
    </SubFilterWrapper>
  );
};

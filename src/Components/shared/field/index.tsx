import { ErrorMessage, Field } from "formik";

import { FC } from "react";
import { Label, StyledErrorMessage, StyledField } from "./style";

export const MyField: FC<Record<string, string>> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <StyledField id={name} name={name} {...rest} />
      <StyledErrorMessage>
        <ErrorMessage name={name} />
      </StyledErrorMessage>
    </div>
  );
};

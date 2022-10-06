import { ErrorMessage } from "formik";

import { FC } from "react";
import { Label, StyledErrorMessage, StyledField, Wrapper } from "./style";

export const Field: FC<Record<string, string>> = ({ name, label, ...rest }) => {
  return (
    <Wrapper>
      <StyledField label={label} name={name} />
      <StyledErrorMessage>
        <ErrorMessage name={name} />
      </StyledErrorMessage>
    </Wrapper>
  );
};

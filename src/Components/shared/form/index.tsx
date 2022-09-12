import { Formik, Form } from "formik";
import { FC, ReactNode, useMemo, useState } from "react";
import { BaseSchema } from "yup";

interface Props {
  validationScheme?: BaseSchema;
  children: ReactNode;
  onClick: (value: Record<string, string>) => void;
  rest?: Record<string, string>;
}
export const MyForm: FC<Props> = ({
  validationScheme,
  children,
  onClick,
  rest,
}) => {
  const [value, setValue] = useState<Record<string, string>>({});
  useMemo(() => {
    setValue({
      ...value,
      firstName: rest?.firstName || "",
      lastName: rest?.lastName || "",
      mobile: rest?.mobile || "",
      email: rest?.email || "",
      password: "",
      address: "",
      building: "",
      courier: "",
      comment: "",
      Birthda: rest?.Birthda || "",
    });
  }, [rest]);

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={value}
        validationSchema={validationScheme}
        onSubmit={(values: Record<string, string>) => onClick(values)}
      >
        <Form>
          <div>{children}</div>
        </Form>
      </Formik>
    </div>
  );
};

import { Formik, Form } from "formik";
import { FC, ReactNode } from "react";
import { BaseSchema } from "yup";

interface Props {
  validationScheme?: BaseSchema;
  children: ReactNode;
  onClick: (value: Record<string, string>) => void;
}
export const MyForm: FC<Props> = ({ validationScheme, children, onClick }) => {
  const initialValues: Record<string, string> = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    building: "",
    courier: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
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

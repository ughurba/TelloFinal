import { Form, Formik } from "formik";
import { Field } from "../../Components/Shared/Field";
import { useMemo, useState } from "react";

export const CreateSpecifications = () => {
  const [value, setValue] = useState<Record<string, string>>({});
  useMemo(() => {
    setValue({});
  }, []);

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={value}
        onSubmit={(values: Record<string, string>) => {}}
      >
        <Form>
          <Field name="key" label="Key" />
          <Field name="value" label="Value" />
          <Field name="key" />
        </Form>
      </Formik>
    </div>
  );
};

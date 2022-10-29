import { Button } from "Admin/Components/Shared/Button";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useCreateFagMutation } from "services/adminServices/adminFagServices";
import * as yup from "yup";
import { StyledField } from "./style";

const AddFag = () => {
  const [postFag, { isSuccess, isLoading }] = useCreateFagMutation();
  const { t } = useTranslation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("WasAdded"));
      formik.resetForm();
    }
  }, [isSuccess]);

  const validationSchema = yup.object({
    value: yup.string().required("value is required"),
    key: yup.string().required("Key is required"),
  });
  const formik = useFormik({
    initialValues: {
      value: "",
      key: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postFag({
        key: values.key,
        value: values.value,
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <StyledField
          id="key"
          name="key"
          label="Key"
          value={formik.values.key}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.key && Boolean(formik.errors.key)}
          helperText={formik.touched.key && formik.errors.key}
        />
        <StyledField
          id="value"
          name="value"
          label="Value"
          value={formik.values.value}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.value && Boolean(formik.errors.value)}
          helperText={formik.touched.value && formik.errors.value}
        />

        <Button isLoading={isLoading} btnName={t("AddTo")} />
      </form>
    </div>
  );
};
export default AddFag;

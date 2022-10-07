import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "Admin/Components/Shared/Button";
import { StyledField } from "./style";
import { useCreateSpecificationsMutation } from "services/adminServices/productServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ISpecifications } from "./types";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";

export const CreateSpecifications = () => {
  const [postSpecifications, { isSuccess, isLoading }] =
    useCreateSpecificationsMutation();
  const { t } = useTranslation();
  const { productId } = useParams();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("WasAdded"));
      formik.resetForm();
    }
  }, [isSuccess]);

  const validationSchema = yup.object({
    value: yup.string().required("Key is required"),
    key: yup.string().required("Key is required"),
  });
  const formik = useFormik({
    initialValues: {
      value: "",
      key: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postSpecifications({
        key: values.key,
        value: values.value,
        productId: productId,
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

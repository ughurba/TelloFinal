import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "Admin/Components/Shared/Button";
import { StyledField } from "./style";
import {
  useGetOneSpecificationsQuery,
  useUpdateSpecificationMutation,
} from "services/adminServices/productServices";

import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const UpdateSpecifications = () => {
  const { t } = useTranslation();
  const { productId = "", specId = "" } = useParams();
  const [putSpecification, { isSuccess, isLoading }] =
    useUpdateSpecificationMutation();
  const { data } = useGetOneSpecificationsQuery({
    productId: productId,
    specId: specId,
  });

  const formik = useFormik({
    initialValues: {
      key: data?.name,
      value: data?.value,
    },

    onSubmit: (values) => {
      putSpecification({
        id: specId,
        key: values.key,
        value: values.value,
        productId: productId,
      });
    },
    enableReinitialize: true,
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("nice");
    }
  }, [isSuccess]);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <StyledField
          id="key"
          name="key"
          label="Key"
          InputLabelProps={{ shrink: true }}
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
          InputLabelProps={{ shrink: true }}
          value={formik.values.value}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.value && Boolean(formik.errors.value)}
          helperText={formik.touched.value && formik.errors.value}
        />

        <Button isLoading={isLoading} btnName={t("UpdateInformation")} />
      </form>
    </div>
  );
};

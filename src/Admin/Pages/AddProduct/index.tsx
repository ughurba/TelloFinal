import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import Button from "@mui/material/Button";

import {
  StyledInput,
  StyledLabel,
  StyledSelect,
  Wrapper,
  WrapperSelect,
  WrapperUpload,
} from "./style";
import {
  useUpdateProductMutation,
  useCreateProductMutation,
  useGetBrandAndCategoryIdQuery,
  useGetOneProductQuery,
  extendedGetAllProductAdminApi,
} from "services/adminServices/productServices";
import { toFormData } from "Helper";
import { toast } from "react-toastify";
import { Loader } from "Components/shared";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "Redux/hooks";
import { useTranslation } from "react-i18next";
import { Button as StyledButton } from "Admin/Components/Shared/Button";
import { GitHubLabel } from "./components/colors";
import { useValidator } from "Hooks/validator";

export const AddProduct = () => {
  const [pendingValue, setPendingValue] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { id } = useParams<{ id: any }>();
  const { t } = useTranslation();
  const [setAddProduct, { isSuccess, isLoading }] = useCreateProductMutation();
  const [
    updateProduct,
    { isSuccess: successUpdate, isLoading: updateLoading },
  ] = useUpdateProductMutation();
  const { data } = useGetBrandAndCategoryIdQuery();
  const { data: product } = useGetOneProductQuery(id, {
    skip: id === "create",
  });
  const { addProductValidate } = useValidator();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id !== "create" ? id : 0,
      Title: product?.title || "",
      Description: product?.description || "",
      NewPrice: product?.newPrice || 0,
      OldPrice: product?.oldPrice || 0,
      BrandId: product?.brand || "",
      CategoryId: product?.categoryTitle || "",
      StockCount: product?.stockCount || 0,
      Photos: [],
      ChildPhotos: [],
      colors: [],
      storage: [],
    },
    validationSchema: addProductValidate,

    onSubmit: (values) => {
      console.log(values);
      if (id === "create") {
        setAddProduct(
          toFormData({
            ...values,
            ChildPhotos: Array.from(values.ChildPhotos),
            Photos: Array.from(values.Photos),
          })
        );
      } else {
        updateProduct(
          toFormData({
            ...values,
            ChildPhotos: Array.from(values.ChildPhotos),
            Photos: Array.from(values.Photos),
          })
        );
      }
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success(t("ProductAdded"));
      formik.resetForm();
      console.log(isSuccess);
      dispatch(extendedGetAllProductAdminApi.util.resetApiState());
      setValue([]);
    }
    if (successUpdate) {
      toast.success(t("InformationHasBeenUpdated"));
      dispatch(extendedGetAllProductAdminApi.util.resetApiState());
    }
  }, [isSuccess, successUpdate]);

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };
  const handleChangeColor = (e: any, value: any, reason: any) => {
    if (
      e.type === "keydown" &&
      (e as React.KeyboardEvent).key === "Backspace" &&
      reason === "removeOption"
    ) {
      return;
    }
    setPendingValue(value);
  };
  useEffect(() => {
    formik.setFieldValue("colors", value);
  }, [value]);

  return (
    <Wrapper>
      {isLoading || updateLoading ? (
        <Loader />
      ) : (
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div>
            <StyledInput
              onChange={formik.handleChange}
              value={formik.values.Title}
              id="title"
              name="Title"
              label="Title"
            />
            {formik.touched.Title && formik.errors.Title ? (
              <p className="error">{formik.errors.Title}</p>
            ) : null}
          </div>
          <div>
            <StyledInput
              label="Description"
              id="Description"
              name="Description"
              onChange={formik.handleChange}
              value={formik.values.Description}
            />
            {formik.touched.Description && formik.errors.Description ? (
              <p className="error">{formik.errors.Description}</p>
            ) : null}
          </div>
          <div>
            <StyledInput
              label="NewPrice"
              id="NewPrice"
              type="number"
              name="NewPrice"
              onChange={formik.handleChange}
              value={formik.values.NewPrice}
            />
            {formik.touched.NewPrice && formik.errors.NewPrice ? (
              <p>{formik.errors.NewPrice}</p>
            ) : null}
          </div>
          <div>
            <StyledInput
              label="OldPrice"
              id="OldPrice"
              name="OldPrice"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.OldPrice}
            />
            {formik.touched.OldPrice && formik.errors.OldPrice ? (
              <p>{formik.errors.OldPrice}</p>
            ) : null}
          </div>
          <div>
            <StyledInput
              label="StockCount"
              id="StockCount"
              type="number"
              name="StockCount"
              onChange={formik.handleChange}
              value={formik.values.StockCount}
            />
            {formik.touched.StockCount && formik.errors.StockCount ? (
              <p>{formik.errors.StockCount}</p>
            ) : null}
          </div>
          <WrapperSelect>
            <StyledLabel>Brand</StyledLabel>
            <StyledSelect name="BrandId" onChange={formik.handleChange}>
              {data?.brand.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </StyledSelect>
            {formik.touched.BrandId && formik.errors.BrandId ? (
              <p>{formik.errors.BrandId}</p>
            ) : null}
          </WrapperSelect>
          <WrapperSelect>
            <StyledLabel>CategoryId</StyledLabel>
            <StyledSelect onChange={formik.handleChange} name="CategoryId">
              {data?.category.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </StyledSelect>
            {formik.touched.CategoryId && formik.errors.CategoryId ? (
              <p>{formik.errors.CategoryId}</p>
            ) : null}
          </WrapperSelect>

          <WrapperUpload>
            <Button variant="contained" component="label">
              Main photo Upload
              <input
                hidden
                id="file"
                name="Photos"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  formik.setFieldValue("Photos", e.currentTarget.files)
                }
              />
              <PhotoCamera sx={{ marginLeft: "10px" }} />
            </Button>

            {formik.touched.Photos && formik.errors.Photos ? (
              <p>{formik.errors.Photos}</p>
            ) : null}
          </WrapperUpload>

          <WrapperUpload>
            <Button variant="contained" component="label">
              Child Photo Upload
              <input
                hidden
                id="file"
                name="ChildPhotos"
                type="file"
                multiple={true}
                accept="image/*"
                onChange={(e) =>
                  formik.setFieldValue("ChildPhotos", e.currentTarget.files)
                }
              />
              <PhotoCamera sx={{ marginLeft: "10px" }} />
            </Button>

            {formik.touched.ChildPhotos && formik.errors.ChildPhotos ? (
              <p>{formik.errors.ChildPhotos}</p>
            ) : null}
          </WrapperUpload>
          <div>
            <GitHubLabel
              pendingValue={pendingValue}
              anchorEl={anchorEl}
              handleClick={handleClick}
              handleClose={handleClose}
              value={value}
              onChange={handleChangeColor}
            />
            {formik.touched.colors && formik.errors.colors ? (
              <p>{formik.errors.colors}</p>
            ) : null}
          </div>
          <Autocomplete
            multiple
            id="storage"
            options={["8", "16", "32", "64", "128", "256"]}
            defaultValue={["8"]}
            getOptionLabel={(option) => option}
            onChange={(e, value) => formik.setFieldValue("storage", value)}
            renderInput={(params) => (
              <StyledInput
                {...params}
                id="storage"
                name="storage"
                variant="standard"
                label={t("Storage")}
              />
            )}
          />
          {formik.touched.storage && formik.errors.storage ? (
            <p>{formik.errors.storage}</p>
          ) : null}
          <StyledButton
            isLoading={isLoading || updateLoading}
            btnName={id !== "create" ? t("UpdateInformation") : t("AddProduct")}
          />
        </form>
      )}
    </Wrapper>
  );
};

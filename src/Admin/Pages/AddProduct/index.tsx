import { useFormik } from "formik";
import { FormEvent, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@mui/material/Button";
import {
  StyledInput,
  Wrapper,
  WrapperSelect,
  WrapperUpload,
  StyledErrorMessage,
  WrapperMultiFile,
  StyledImage,
  WrapperImages,
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
import { Flex, Loader } from "Components/shared";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "Redux/hooks";
import { useTranslation } from "react-i18next";
import { Button as StyledButton } from "Admin/Components/Shared/Button";
import { GitHubLabel } from "./components/colors";
import { useValidator } from "Hooks/validator";
import { PhotoUpload } from "./components/photoUpload";
import { TextField } from "@mui/material";

export const AddProduct = () => {
  const [pendingValue, setPendingValue] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [multiFileName, setMultiFileName] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [storage, setStorage] = useState<string[]>([]);
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
  useEffect(() => {
    if (product?.colors) {
      setValue(product?.colors.map((x) => x.code));
    }
    if (product?.storages) {
      setStorage(product?.storages.map((x) => x.value.toString()));
    }
  }, [product]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id !== "create" ? id : 0,
      Title: product?.title || "",
      Description: product?.description || "",
      NewPrice: product?.newPrice || "",
      OldPrice: product?.oldPrice || "",
      BrandId: product?.brandId || "",
      CategoryId: product?.categoryId || "",
      StockCount: product?.stockCount || "",
      Photos: [],
      ChildPhotos: [],
      colors: [],
      storage: storage || [],
    },
    validationSchema: id === "create" ? addProductValidate : "",

    onSubmit: (values) => {
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

  const handleChangeFile = (ev: FormEvent<HTMLInputElement>) => {
    let files = ev.currentTarget.files;

    if (files) {
      if (files["length"] === 0) {
        setFileName("");
      }
      Array.from(files).map((item) => setFileName(item.name));
      formik.setFieldValue("Photos", files);
    }
  };
  const handleChangeMultiFile = (ev: FormEvent<HTMLInputElement>) => {
    let files = ev.currentTarget.files;

    if (files) {
      if (files["length"] === 0) {
        setMultiFileName([]);
      }
      Array.from(files).map((item) => multiFileName.push(item.name));
      formik.setFieldValue("ChildPhotos", files);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(t("ProductAdded"));
      formik.resetForm();
      dispatch(extendedGetAllProductAdminApi.util.resetApiState());
      setMultiFileName([]);
      setFileName("");
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
              error={formik.touched.Title && Boolean(formik.errors.Title)}
              helperText={formik.touched.Title && formik.errors.Title}
              onChange={formik.handleChange}
              value={formik.values.Title}
              id="title"
              name="Title"
              label="Title"
            />
          </div>
          <div>
            <StyledInput
              error={
                formik.touched.Description && Boolean(formik.errors.Description)
              }
              helperText={
                formik.touched.Description && formik.errors.Description
              }
              label="Description"
              id="Description"
              name="Description"
              onChange={formik.handleChange}
              value={formik.values.Description}
            />
          </div>
          <div>
            <StyledInput
              error={formik.touched.NewPrice && Boolean(formik.errors.NewPrice)}
              helperText={formik.touched.NewPrice && formik.errors.NewPrice}
              label="NewPrice"
              id="NewPrice"
              type="text"
              name="NewPrice"
              onChange={formik.handleChange}
              value={formik.values.NewPrice}
            />
          </div>
          <div>
            <StyledInput
              error={formik.touched.OldPrice && Boolean(formik.errors.OldPrice)}
              helperText={formik.touched.OldPrice && formik.errors.OldPrice}
              label="OldPrice"
              id="OldPrice"
              name="OldPrice"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.OldPrice}
            />
          </div>
          <div>
            <StyledInput
              error={
                formik.touched.StockCount && Boolean(formik.errors.StockCount)
              }
              helperText={formik.touched.StockCount && formik.errors.StockCount}
              label="StockCount"
              id="StockCount"
              type="number"
              name="StockCount"
              onChange={formik.handleChange}
              value={formik.values.StockCount}
            />
          </div>
          <WrapperSelect>
            <TextField
              select
              style={{ width: "200px" }}
              id="demo-simple-select"
              error={formik.touched.BrandId && Boolean(formik.errors.BrandId)}
              helperText={formik.touched.BrandId && formik.errors.BrandId}
              variant="outlined"
              name="BrandId"
              label="Brand"
              value={formik.values.BrandId}
              onChange={formik.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data?.brand.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </WrapperSelect>
          <WrapperSelect>
            <TextField
              select
              error={
                formik.touched.CategoryId && Boolean(formik.errors.CategoryId)
              }
              helperText={formik.touched.CategoryId && formik.errors.CategoryId}
              style={{ width: "200px" }}
              variant="outlined"
              name="CategoryId"
              label="Category"
              value={formik.values.CategoryId}
              onChange={formik.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data?.category.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          </WrapperSelect>

          <WrapperUpload>
            <Flex AlItems="center">
              <Button variant="contained" component="label">
                Main photo Upload
                <input
                  hidden
                  id="file"
                  name="Photos"
                  type="file"
                  accept="image/*"
                  onChange={handleChangeFile}
                />
                <PhotoCamera sx={{ marginLeft: "10px" }} />
              </Button>
              {product?.mainPhoto && (
                <WrapperImages>
                  <StyledImage src={product?.mainPhoto.path} />
                </WrapperImages>
              )}
            </Flex>

            {fileName.length !== 0 && (
              <WrapperMultiFile>
                <PhotoUpload item={fileName} />
              </WrapperMultiFile>
            )}
            {formik.touched.Photos && formik.errors.Photos ? (
              <StyledErrorMessage>{formik.errors.Photos}</StyledErrorMessage>
            ) : null}
          </WrapperUpload>

          <WrapperUpload>
            <Flex AlItems="center">
              <Button variant="contained" component="label">
                Child Photo Upload
                <input
                  hidden
                  id="file"
                  name="ChildPhotos"
                  type="file"
                  multiple={true}
                  accept="image/*"
                  onChange={handleChangeMultiFile}
                />
                <PhotoCamera sx={{ marginLeft: "10px" }} />
              </Button>

              {product?.childPhotos.map((img) => (
                <WrapperImages>
                  <StyledImage src={img.path} />
                </WrapperImages>
              ))}
            </Flex>

            {multiFileName.length !== 0 && (
              <WrapperMultiFile>
                {multiFileName.map((item) => (
                  <PhotoUpload key={item} item={item} />
                ))}
              </WrapperMultiFile>
            )}

            {formik.touched.ChildPhotos && formik.errors.ChildPhotos ? (
              <StyledErrorMessage>
                {formik.errors.ChildPhotos}
              </StyledErrorMessage>
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
              <StyledErrorMessage>{formik.errors.colors}</StyledErrorMessage>
            ) : null}
          </div>
          <Autocomplete
            multiple
            id="storage"
            options={["8", "16", "32", "64", "128", "256", "512"]}
            getOptionLabel={(option) => option}
            onChange={(e, value) => formik.setFieldValue("storage", value)}
            value={formik.values.storage}
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
            <StyledErrorMessage>{formik.errors.storage}</StyledErrorMessage>
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

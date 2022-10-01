import { useFormik } from "formik";
import { FC, useEffect } from "react";

import { IBrandAndCategory } from "Admin/Pages/Product/types";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  StyledButton,
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

// interface Props {
//   data?: IBrandAndCategory;
// }
export const AddProduct = () => {
  const { id } = useParams<{ id: any }>();
  const [setAddProduct, { isSuccess, isLoading }] = useCreateProductMutation();
  const [updateProduct, { isSuccess: successUpdate }] =
    useUpdateProductMutation();
  const { data } = useGetBrandAndCategoryIdQuery();
  const { data: product } = useGetOneProductQuery(id, {
    skip: id === "create",
  });

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
      color: "",
      storage: "",
    },
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
  useEffect(() => {
    if (isSuccess) {
      toast.success("mal elave olundu");
      formik.resetForm();
      dispatch(extendedGetAllProductAdminApi.util.resetApiState());
    }
    if (successUpdate) {
      toast.success("mal update olundu");
      dispatch(extendedGetAllProductAdminApi.util.resetApiState());
    }
  }, [isSuccess, successUpdate]);

  return (
    <Wrapper>
      {isLoading ? (
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
          </div>
          <div>
            <StyledInput
              label="Description"
              id="Description"
              name="Description"
              onChange={formik.handleChange}
              value={formik.values.Description}
            />
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
          </div>
          <div>
            <StyledInput
              label="OldPrice"
              id="OldPrice"
              type="number"
              name="OldPrice"
              onChange={formik.handleChange}
              value={formik.values.OldPrice}
            />
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
          </WrapperSelect>

          <WrapperUpload>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
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
              <PhotoCamera />
            </IconButton>
            Main photo
          </WrapperUpload>

          <WrapperUpload>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
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
              <PhotoCamera />
            </IconButton>
            Child Photo
          </WrapperUpload>
          <div>
            <input
              id="color"
              name="color"
              type="color"
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <div>Storage</div>
            <input
              id="storage"
              name="storage"
              type="number"
              onChange={formik.handleChange}
            />
          </div>

          <StyledButton variant="contained" type={"submit"}>
            Mali elave etmek
          </StyledButton>
        </form>
      )}
    </Wrapper>
  );
};

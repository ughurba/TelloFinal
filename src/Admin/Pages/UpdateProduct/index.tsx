import { useFormik } from "formik";
import { FC } from "react";
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
  useGetBrandAndCategoryIdQuery,
  useUpdateProductMutation,
} from "services/adminServices/productServices";
import { toFormData } from "Helper";
import { toast } from "react-toastify";
import { Loader } from "Components/shared";

interface Props {
  data?: IBrandAndCategory;
}
export const AddProduct: FC<Props> = () => {
  const [setAddProduct, { isSuccess, isLoading }] = useUpdateProductMutation();
  const { data } = useGetBrandAndCategoryIdQuery();

  const formik = useFormik({
    initialValues: {
      Title: "",
      Description: "",
      NewPrice: 0,
      OldPrice: 0,
      BrandId: "",
      CategoryId: "",
      StockCount: 0,
      Photos: [],
      ChildPhotos: [],
      color: "",
      storage: "",
    },
    onSubmit: (values) => {
      setAddProduct(
        toFormData({
          ...values,
          ChildPhotos: Array.from(values.ChildPhotos),
          Photos: Array.from(values.Photos),
        })
      );
    },
  });
  if (isSuccess) {
    toast.success("mail elave olundu");
    formik.resetForm();
  }
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
            Yenile
          </StyledButton>
        </form>
      )}
    </Wrapper>
  );
};

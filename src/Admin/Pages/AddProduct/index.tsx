import { useFormik } from "formik";
import { FC } from "react";

import { IBrandAndCategory } from "Admin/Pages/Product/types";
import { StyledInput, StyledLabel, Wrapper } from "./style";
import {
  useCreateProductMutation,
  useGetBrandAndCategoryIdQuery,
} from "services/adminServices/productServices";
import { toFormData } from "Helper";

interface Props {
  data?: IBrandAndCategory;
}
export const AddProduct: FC<Props> = () => {
  const [setAddProduct, { isSuccess }] = useCreateProductMutation();
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

  return (
    <Wrapper>
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
        <div>
          <StyledLabel>Brand</StyledLabel>
          <select name="BrandId" onChange={formik.handleChange}>
            {data?.brand.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <StyledLabel>CategoryId</StyledLabel>
          <select onChange={formik.handleChange} name="CategoryId">
            {data?.category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <label>IsMain</label>
        <div>
          <input
            id="file"
            name="Photos"
            type="file"
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("Photos", e.currentTarget.files)
            }
          />
        </div>

        <div>
          <input
            id="file"
            name="ChildPhotos"
            type="file"
            multiple={true}
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("ChildPhotos", e.currentTarget.files)
            }
          />
        </div>
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

        <button type={"submit"}>submit</button>
      </form>
    </Wrapper>
  );
};

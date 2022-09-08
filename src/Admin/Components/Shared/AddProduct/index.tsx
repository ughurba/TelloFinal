import { useFormik } from "formik";
import { FC, useEffect, useState } from "react";

import { IBrandAndCategory } from "Admin/Pages/Product/types";
import { StyledLabel, Wrapper } from "./style";
import { useCreateProductMutation } from "services/adminServices";
import { toFormData } from "Helper";

interface Props {
  data?: IBrandAndCategory;
}
export const AddProduct: FC<Props> = ({ data }) => {
  const [setAddProduct, result] = useCreateProductMutation();
  const [photos, setPhotos] = useState([]);
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
      ChildPhoto: [],
    },
    onSubmit: (values) => {
      setAddProduct(
        toFormData({ ...values, Photos: Array.from(values.Photos) })
      );
      setPhotos(values.Photos);
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div>
          <StyledLabel>Title</StyledLabel>
          <input
            onChange={formik.handleChange}
            value={formik.values.Title}
            id={"Title"}
            name={"Title"}
          />
        </div>
        <div>
          <StyledLabel>Description</StyledLabel>
          <input
            id={"Description"}
            name={"Description"}
            onChange={formik.handleChange}
            value={formik.values.Description}
          />
        </div>
        <div>
          <StyledLabel>NewPrice</StyledLabel>
          <input
            id={"NewPrice"}
            type={"number"}
            name={"NewPrice"}
            onChange={formik.handleChange}
            value={formik.values.NewPrice}
          />
        </div>
        <div>
          <StyledLabel>OldPrice</StyledLabel>
          <input
            id="OldPrice"
            type="number"
            name="OldPrice"
            onChange={formik.handleChange}
            value={formik.values.OldPrice}
          />
        </div>
        <div>
          <StyledLabel>StockCount</StyledLabel>
          <input
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
            multiple={true}
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("Photos", e.currentTarget.files)
            }
          />
        </div>

        <div>
          <input
            id="file"
            name="Photos"
            type="file"
            multiple={true}
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("ChildPhoto", e.currentTarget.files)
            }
          />
        </div>

        <button type={"submit"}>submit</button>
      </form>
    </Wrapper>
  );
};

import { Field, Form, Formik } from "formik";
import { ChangeEvent, FC, useState } from "react";

import { IBrandAndCategory } from "../../../Pages/Product/types";
import { StyledLabel, Wrapper } from "./style";

interface IAddProductData {
  Title: string;
  Description: string;
  NewPrice: string;
  OldPrice: string;
  BrandId: number;
  CategoryId: number;
  StockCount: number;
}
interface Props {
  data: IBrandAndCategory;
}
export const AddProduct: FC<Props> = ({ data }) => {
  const [files, setFiles] = useState({});

  const handleFileUpload = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.currentTarget.files) {
      setFiles(ev.currentTarget.value);
    }
  };
  console.log(files);
  const value = {
    Title: "",
    Description: "",
    NewPrice: "",
    OldPrice: "",
    BrandId: 0,
    CategoryId: 0,
    StockCount: 0,
    file: files,
  };
  return (
    <Wrapper>
      <Formik
        initialValues={value}
        onSubmit={(values: IAddProductData) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <StyledLabel>Title</StyledLabel>
            <Field id={"Title"} name={"Title"} />
          </div>
          <div>
            <StyledLabel>Description</StyledLabel>
            <Field id={"Description"} name={"Description"} />
          </div>
          <div>
            <StyledLabel>NewPrice</StyledLabel>
            <Field id={"NewPrice"} type={"number"} name={"NewPrice"} />
          </div>
          <div>
            <StyledLabel>OldPrice</StyledLabel>
            <Field id={"OldPrice"} type={"number"} name={"OldPrice"} />
          </div>
          <div>
            <StyledLabel>StockCount</StyledLabel>
            <Field id={"StockCount"} type={"number"} name={"StockCount"} />
          </div>
          <div>
            <StyledLabel>Brand</StyledLabel>
            <Field as="select" name="BrandId">
              {data.brand.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <StyledLabel>CategoryId</StyledLabel>
            <Field as="select" name="CategoryId">
              {data.category.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <input
              id="file"
              name="file"
              type="file"
              multiple={true}
              accept="image/*"
              onChange={handleFileUpload}
            />
          </div>
          <button type={"submit"}>submit</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

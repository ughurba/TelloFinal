import * as Yup from "yup";

export const useValidator = () => {
  const deliveryValidator = Yup.object({
    address: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .required("Required"),
    building: Yup.string().max(15, "15-den yuxari olmaz").required("Required"),
    courier: Yup.string().required("Required"),
  });
  const PersonalInfoValidate = Yup.object({
    firstName: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .min(3, "3-den az ola bilmez")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .min(3, "3-den az ola bilmez")
      .required("Required"),
    mobile: Yup.string()
      .max(20, "20-den yuxari olmaz")
      .min(3, "3-den az ola bilmez")
      .required("Required"),
    email: Yup.string().email("Invalid mail").required("Required"),
  });
  const LoginValidate = Yup.object({
    email: Yup.string().email("Invalid mail").required("Required"),
    password: Yup.string()
      .min(8, "Şifrə çox qısadır. Minimal şifrənin uzunluğu: 8 simvol")
      .required("Required"),
  });
  const RegisterValidate = Yup.object({
    firstName: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .min(3, "3-den az ola bilmez")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "15-den yuxari ola bilmez")
      .min(3, "3-den az ola bilmez")
      .required("Required"),
    email: Yup.string().email("Invalid mail").required("Required"),
    password: Yup.string()
      .min(8, "Şifrə çox qısadır. Minimal şifrənin uzunluğu: 8 simvol")
      .required("Required"),
  });
  const addProductValidate = Yup.object({
    Title: Yup.string().min(5, "5-den az ola bilmez").required("Required"),
    Description: Yup.string().required("Required"),
    NewPrice: Yup.string().required(),
    OldPrice: Yup.string().required(),
    BrandId: Yup.string().required("Required"),
    CategoryId: Yup.string().required("Required"),
    StockCount: Yup.number().required("Required"),
    Photos: Yup.array().nullable().min(1, "min 1 items"),
    ChildPhotos: Yup.array().nullable().min(1, "min 1 items"),
    colors: Yup.array().nullable().min(1, "min 1 items"),
    storage: Yup.array().nullable().min(1, "min 1 items"),
  });
  return {
    addProductValidate,
    deliveryValidator,
    PersonalInfoValidate,
    LoginValidate,
    RegisterValidate,
  };
};

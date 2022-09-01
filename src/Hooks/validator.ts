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
      .min(3, "3-den az ola bilmez")
      .max(20, "20-den yuxari olmaz")
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
      .min(3, "3-den az ola bilmez")
      .max(15, "15-den yuxari olmaz")
      .required("Required"),
  });
  return {
    deliveryValidator,
    PersonalInfoValidate,
    LoginValidate,
    RegisterValidate,
  };
};

import { lazy } from "react";

const SignIn = lazy(() => import("../Pages/Auth"));
const AddProduct = lazy(() => import("Admin/Pages/AddProduct"));
const Orders = lazy(() => import("Admin/Pages/Orders"));
const OrderItems = lazy(() => import("Admin/Pages/OrderItems"));
const ChartCustom = lazy(() => import("Admin/Pages/Dashboard"));
const CreateSpecifications = lazy(
  () => import("./Specifications/CreateSpecifications")
);
const UpdateSpecifications = lazy(
  () => import("./Specifications/updateSpecifications")
);
const EditSpecifications = lazy(
  () => import("./Specifications/Specifications")
);
const Users = lazy(() => import("./User"));
const Product = lazy(() => import("Admin/Pages/Product"));
const Fag = lazy(() => import("./Fag"));
const AddFag = lazy(() => import("./AddFag"));
const CategoryAndBrand = lazy(() => import("Admin/Pages/CategoryAndBrand"));
const RemoveRoleModal = lazy(
  () => import("Admin/Pages/User/components/removeModalRole")
);

export {
  RemoveRoleModal,
  CategoryAndBrand,
  ChartCustom,
  Product,
  Users,
  UpdateSpecifications,
  EditSpecifications,
  SignIn,
  AddProduct,
  CreateSpecifications,
  Orders,
  OrderItems,
  Fag,
  AddFag,
};

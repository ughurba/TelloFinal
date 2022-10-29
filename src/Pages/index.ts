import { lazy } from "react";

const DetailProduct = lazy(() => import("./detailProduct"));
const MainPage = lazy(() => import("./main"));
const Question = lazy(() => import("./question"));
const Basket = lazy(() => import("./basket"));
const Register = lazy(() => import("./auth/register"));
const Login = lazy(() => import("./auth/login"));
const Pay = lazy(() => import("./pay"));
const UserProfile = lazy(() => import("../Components/layout/userProfile"));
const MyFavorites = lazy(() => import("./userProfilePages/myFavorites"));

const MyOrders = lazy(() => import("./userProfilePages/myOrders"));
const PersonalInformation = lazy(
  () => import("./userProfilePages/personalInformation")
);
const Product = lazy(() => import("./shop/product"));
const OrderItems = lazy(() => import("./orderItems"));

export {
  OrderItems,
  Product,
  PersonalInformation,
  MyOrders,
  MyFavorites,
  UserProfile,
  Pay,
  Login,
  Register,
  Basket,
  DetailProduct,
  MainPage,
  Question,
};

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { Suspense } from "react";

import {
  Question,
  DetailProduct,
  MainPage,
  Basket,
  Login,
  Register,
  Pay,
  MyOrders,
  PersonalInformation,
  MyFavorites,
  Product,
  OrderItems,
} from "../Pages";
import { Links } from "./links";
import { UserProfileLayout } from "Layouts/UserProfileLayout";
import { Loader } from "Components/shared";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={Links.app.main} element={<AppLayout />}>
            <Route path={Links.app.main} element={<MainPage />} />
            <Route
              path={Links.app.product}
              element={<Navigate to={Links.app.main} />}
            />
            <Route
              path={`${Links.app.product}/:category`}
              element={<Product />}
            />
            <Route path={Links.app.detail} element={<DetailProduct />} />
            <Route path={Links.app.basket} element={<Basket />} />
            <Route path={Links.app.question} element={<Question />} />
            <Route path={Links.app.login} element={<Login />} />
            <Route path={Links.app.register} element={<Register />} />
            <Route path={Links.app.userProfile} element={<UserProfileLayout />}>
              <Route
                path={Links.userProfileApp.MyOrders}
                element={<MyOrders />}
              />
              <Route
                path={Links.userProfileApp.MyFavorites}
                element={<MyFavorites />}
              />
              <Route
                path={Links.userProfileApp.PersonalInformation}
                element={<PersonalInformation />}
              />
              <Route
                path={`${Links.userProfileApp.OrderItems}/:orderId`}
                element={<OrderItems />}
              />
            </Route>
          </Route>
          <Route path={Links.app.pay} element={<Pay />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

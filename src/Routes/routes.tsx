import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import {
  Question,
  Headphone,
  Phone,
  DetailProduct,
  MainPage,
  Basket,
  Login,
  Register,
  Pay,
} from "../Pages";

import { Links } from "./links";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.app.main} element={<AppLayout />}>
          <Route path={Links.app.main} element={<MainPage />} />
          <Route path={Links.app.phone} element={<Phone />} />
          <Route path={Links.app.headphone} element={<Headphone />} />
          <Route path={Links.app.detail} element={<DetailProduct />} />
          <Route path={Links.app.basket} element={<Basket />} />
          <Route path={Links.app.question} element={<Question />} />
          <Route path={Links.app.login} element={<Login />} />
          <Route path={Links.app.register} element={<Register />} />
        </Route>
        <Route path={Links.app.pay} element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
};

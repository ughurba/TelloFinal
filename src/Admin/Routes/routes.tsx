import { Product } from "Admin/Pages/Product";
// import {lazy} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { AdminLinks } from "./AdminLinks";
import { SignIn } from "../Pages/Auth";
import { AddProduct } from "Admin/Pages/AddProduct";

// const AddProduct = lazy(() => import("admin/Components/Shared/AddProduct")).then((module) => module.AddProduct)

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AdminLinks.base} element={<AppLayout />}>
          <Route path={AdminLinks.addProduct} element={<AddProduct />} />
          <Route path={AdminLinks.product} element={<Product />} />
        </Route>
        <Route path={AdminLinks.login} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

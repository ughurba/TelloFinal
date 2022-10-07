import {
  CreateSpecifications,
  AddProduct,
  Orders,
  SignIn,
  OrderItems,
  EditSpecifications,
  UpdateSpecifications,
} from "Admin/Pages";
import { Product } from "Admin/Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { AdminLinks } from "./AdminLinks";

// const AddProduct = lazy(() => import("admin/Components/Shared/AddProduct")).then((module) => module.AddProduct)

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AdminLinks.base} element={<AppLayout />}>
          <Route
            path={`${AdminLinks.addProduct}/:id`}
            element={<AddProduct />}
          />
          <Route
            path={`${AdminLinks.editSpecifications}/:productId`}
            element={<EditSpecifications />}
          />
          <Route
            path={`${AdminLinks.updateSpecifications}/:productId/:specId`}
            element={<UpdateSpecifications />}
          />
          <Route
            path={`${AdminLinks.createSpecifications}/:productId`}
            element={<CreateSpecifications />}
          />
          <Route path={AdminLinks.product} element={<Product />} />
          <Route
            path={`${AdminLinks.orderItems}/:orderId`}
            element={<OrderItems />}
          />
          <Route path={AdminLinks.order} element={<Orders />} />
        </Route>
        <Route path={AdminLinks.login} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

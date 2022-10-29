import {
  CreateSpecifications,
  AddProduct,
  Orders,
  SignIn,
  OrderItems,
  EditSpecifications,
  UpdateSpecifications,
  Users,
  Product,
  Fag,
  AddFag,
  ChartCustom,
  CategoryAndBrand,
  RemoveRoleModal,
} from "Admin/Pages";

import { Loader } from "Components/shared";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { AdminLinks } from "./AdminLinks";

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={AdminLinks.base} element={<AppLayout />}>
            <Route path={AdminLinks.base} element={<ChartCustom />} />
            <Route path="/admin/modal" element={<RemoveRoleModal />} />
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
            <Route path={AdminLinks.user} element={<Users />} />
            <Route
              path={AdminLinks.categoryAndBrand}
              element={<CategoryAndBrand />}
            />
            <Route path={AdminLinks.fagAdd} element={<AddFag />} />
            <Route path={AdminLinks.fag} element={<Fag />} />
          </Route>
          <Route path={AdminLinks.login} element={<SignIn />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

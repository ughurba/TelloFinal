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
} from "Admin/Pages";
import { CategoryAndBrand } from "Admin/Pages/CategoryAndBrand";
import { RemoveRoleModal } from "Admin/Pages/User/components/removeModalRole";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { AdminLinks } from "./AdminLinks";

// const AddProduct = lazy(() => import("admin/Components/Shared/AddProduct")).then((module) => module.AddProduct)

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

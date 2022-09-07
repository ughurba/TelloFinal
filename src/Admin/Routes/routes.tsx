import { Product } from "Admin/Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AppLayout />}>
          <Route path="AddProduct" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import { Product } from "Admin/Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { AdminLinks } from "./AdminLinks";
import { SignIn} from "../Pages/Auth";

export const AppRoutesAdmin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AdminLinks.app.main} element={<AppLayout />}>

          <Route path={AdminLinks.app.addProduct} element={<Product />} />
        </Route>
        <Route path={AdminLinks.login} element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
};

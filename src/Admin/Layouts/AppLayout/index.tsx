import { Outlet } from "react-router-dom";
import { Header } from "Admin/Components/Layout/Header";
import { Footer } from "Admin/Components/Layout/Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

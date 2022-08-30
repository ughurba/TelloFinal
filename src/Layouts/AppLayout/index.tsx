import { Outlet } from "react-router-dom";
import { Header } from "../../Components/layout/header";
import { Footer } from "../../Components/layout/footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

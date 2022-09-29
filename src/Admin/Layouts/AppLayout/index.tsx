import { AdminLinks } from "Admin/Routes/AdminLinks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DashboardContent } from "../../Components/Layout/Header";

const StyledFlex = styled.div`
  display: flex;
`;
const StyledOutlet = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  width: 100%;
`;
export const AppLayout = () => {
  const token = localStorage.getItem("userAdminToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(AdminLinks.login);
    }
  }, [navigate]);

  return (
    <StyledFlex>
      <DashboardContent />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledFlex>
  );
};

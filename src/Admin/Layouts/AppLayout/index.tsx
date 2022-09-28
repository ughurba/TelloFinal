import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DashboardContent } from "../../Components/Layout/Header";

const StyledFlex = styled.div`
  display: flex;
`;
const StyledOutlet = styled.div`
  margin-left: 50px;
`;
export const AppLayout = () => {
  return (
    <StyledFlex>
      <DashboardContent />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledFlex>
  );
};

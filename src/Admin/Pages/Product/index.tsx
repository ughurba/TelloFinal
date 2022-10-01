import { DataTable } from "Admin/Components/Shared/DataTable";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { NavLink } from "react-router-dom";

import { useGetAllProductQuery } from "services/adminServices/productServices";
import { StyledButton, Wrapper } from "./style";

export const Product = () => {
  const { data: Goods } = useGetAllProductQuery();
  return (
    <Wrapper>
      <NavLink to={`${AdminLinks.addProduct}/create`}>
        <StyledButton>Create Product</StyledButton>
      </NavLink>
      {Goods && <DataTable product={Goods} />}
    </Wrapper>
  );
};

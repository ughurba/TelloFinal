import { DataTable } from "Admin/Components/Shared/DataTable";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { Link, NavLink } from "react-router-dom";
import {
  useGetAllProductQuery,
  useGetBrandAndCategoryIdQuery,
} from "services/adminServices/productServices";
import styled from "styled-components";

const Wrapper = styled.div``;
export const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const Product = () => {
  const { data: Goods } = useGetAllProductQuery();
  return (
    <Wrapper>
      <NavLink to={AdminLinks.addProduct}>
        <StyledButton>Create Product</StyledButton>
      </NavLink>

      {Goods && <DataTable product={Goods} />}
    </Wrapper>
  );
};

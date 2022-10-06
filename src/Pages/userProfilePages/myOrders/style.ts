import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div``;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
export const StyledEmptyBasket = styled.div`
  width: 904px;
  height: 371px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

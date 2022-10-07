import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
`;
export const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  margin: 50% 0;
  background-color: #2196f3;
  border-color: #2196f3;
  color: white;
  font-weight: 500;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

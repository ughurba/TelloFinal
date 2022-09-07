import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  .active {
    color: ${({ theme }) => theme.colors.green};
  }

  padding-bottom: 300px;
`;
export const List = styled.ul`
  width: 280px;
  height: 372px;
  padding: 32px 18px;
  background: #ffffff;
  border-radius: 8px;
`;
export const Text = styled.span`
  margin-left: 16px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-top: 32px;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray31};
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray31};
`;
export const Logout = styled.li`
  margin-top: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

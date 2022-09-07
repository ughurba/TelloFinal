import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenuList = styled(NavLink)`
  text-decoration: none;
  margin-left: ${(props) => props.theme.space[8]};
  margin-top: ${(props) => props.theme.space[4]};
  font-size: ${(props) => props.theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: #333333;

  &:nth-child(1) {
    margin-left: 0;
  }
`;
export const Wrapper = styled.div`
  padding-bottom: 12px;
  .active {
    color: ${({ theme }) => theme.colors.green};
  }
`;

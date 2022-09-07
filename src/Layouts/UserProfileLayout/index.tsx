import { Container, Flex } from "Components/shared";
import { UserProfile } from "Components/layout/userProfile";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #e5e5e5;
`;
export const WrapperOutlet = styled.div`
  margin-left: ${({ theme }) => theme.space[5]};
`;
export const UserProfileLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <UserProfile />
          <WrapperOutlet>
            <Outlet />
          </WrapperOutlet>
        </Flex>
      </Container>
    </Wrapper>
  );
};

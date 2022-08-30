import { LoginForm } from "./components/loginForm";
import { Container, Flex } from "../../Components/shared";
import {
  RegisterFon,
  RegisterImg,
  RegisterSide,
  StyledRegisterText,
  StyledToRegister,
  Wrapper,
} from "./style";
import { registerFon, registerImg } from "Assets";

export const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <LoginForm />
          <RegisterSide>
            <RegisterImg src={registerImg} />
            <RegisterFon src={registerFon} />
            <StyledRegisterText>
              Hesabınız yoxdur?
              <StyledToRegister> Qeydiyyatdan keçin</StyledToRegister>
            </StyledRegisterText>
          </RegisterSide>
        </Flex>
      </Container>
    </Wrapper>
  );
};

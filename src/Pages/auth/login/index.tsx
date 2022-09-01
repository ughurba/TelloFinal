import { LoginForm } from "../components/loginForm";
import { Container, Flex } from "Components/shared";
import {
  RegisterFon,
  RegisterImg,
  RegisterSide,
  StyledRegisterText,
  StyledToRegister,
  Wrapper,
} from "./style";
import { load, registerFon, registerImg } from "Assets";
import { Links } from "Routes/links";
import { useEffect, useState } from "react";
import { ILogin } from "types";
import { useFetchLoginMutation } from "../../../services/authServices";
import swal from "sweetalert";
import { Loading } from "../register";
import { useSetToken } from "../../../Hooks/setGetToken";

export const Login = () => {
  const [loginData, setLoginData] = useState<ILogin>();
  const [loginPost, result] = useFetchLoginMutation();
  const { error, data, isLoading, isSuccess } = result;

  const handleGetDataFromLogin = (value: Record<string, string>) => {
    setLoginData({
      ...loginData,
      email: value.email,
      password: value.password,
    });
  };

  useEffect(() => {
    if (loginData) {
      loginPost(loginData);
    }
  }, [loginData]);

  if (isSuccess) {
  }
  if (isLoading) {
    return (
      <Loading>
        <div>
          <img src={load} />
        </div>
      </Loading>
    );
  }
  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <LoginForm onClick={handleGetDataFromLogin} />
          <RegisterSide>
            <RegisterImg src={registerImg} />
            <RegisterFon src={registerFon} />
            <StyledRegisterText>
              Hesabınız yoxdur?
              <StyledToRegister to={Links.app.register}>
                Qeydiyyatdan keçin
              </StyledToRegister>
            </StyledRegisterText>
          </RegisterSide>
        </Flex>
      </Container>
    </Wrapper>
  );
};

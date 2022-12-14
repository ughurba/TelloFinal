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
import { registerFon, registerImg } from "Assets";
import { Links } from "Routes/links";
import { ReactNode, useEffect, useState } from "react";
import { ILogin } from "types";
import { useFetchLoginMutation } from "services/baseServices/authServices";
import { StyledError } from "../register/style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<ILogin>();
  const [loginPost, result] = useFetchLoginMutation();
  const { error, data, isLoading, isSuccess } = result;
  const { t } = useTranslation();
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

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("userToken", data?.token);
      navigate("/UserProfile");
    }
  }, [isSuccess]);

  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <div>
            <LoginForm isLoading={isLoading} onClick={handleGetDataFromLogin} />
            {error && "data" in error ? (
              <StyledError>{error.data as ReactNode}</StyledError>
            ) : (
              ""
            )}
          </div>

          <RegisterSide>
            <RegisterImg src={registerImg} />
            <RegisterFon src={registerFon} />
            <StyledRegisterText>
              {t("YouDontHaveAnAccount")}{" "}
              <StyledToRegister to={Links.app.register}>
                {t("SignUp")}
              </StyledToRegister>
            </StyledRegisterText>
          </RegisterSide>
        </Flex>
      </Container>
    </Wrapper>
  );
};
export default Login;

import {
  RegisterFon,
  RegisterImg,
  RegisterSide,
  StyledRegisterText,
  StyledToRegister,
  Wrapper,
} from "../login/style";
import { Container, Flex } from "Components/shared";
import { load, registerFon, registerImg } from "Assets";
import { Links } from "Routes/links";
import { RegisterForm } from "../components/registerForm";
import { ReactNode, useEffect, useState } from "react";
import { IRegisterData } from "types";
import { useFetchRegistersMutation } from "services/baseServices/authServices";
import { StyledError } from "./style";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState<IRegisterData>();
  const [registerPost, result] = useFetchRegistersMutation();
  const { error, isLoading, isSuccess } = result;

  const handleGetDataFromRegister = (value: Record<string, string>) => {
    setRegisterData({
      ...registerData,
      name: value.firstName,
      email: value.email,
      password: value.password,
      surname: value.lastName,
    });
  };
  useEffect(() => {
    if (registerData) {
      registerPost(registerData);
    }
  }, [registerData]);

  if (isSuccess) {
    swal({
      title: "Qeydiyatdan kecdiniz",
      icon: "success",
    }).then((res) => {
      if (res) {
        navigate("/login");
      }
    });
  }

  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <div>
            <RegisterForm
              isLoading={isLoading}
              onClick={handleGetDataFromRegister}
            />
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
              {t("YouAlreadyHaveAnAccount")}

              <StyledToRegister to={Links.app.login}>
                {" "}
                {t("Enter")}
              </StyledToRegister>
            </StyledRegisterText>
          </RegisterSide>
        </Flex>
      </Container>
    </Wrapper>
  );
};

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
import { useFetchRegistersMutation } from "services/authServices";
import { StyledError } from "./style";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Loading = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Register = () => {
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
          <div>
            <RegisterForm onClick={handleGetDataFromRegister} />
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
              Artıq hesabınız var?
              <StyledToRegister to={Links.app.login}>
                {" "}
                Daxil olun
              </StyledToRegister>
            </StyledRegisterText>
          </RegisterSide>
        </Flex>
      </Container>
    </Wrapper>
  );
};

import { MyForm, MyField, Flex } from "../../../../Components/shared";
import { useValidator } from "../../../../Hooks/validator";
import {
  Password,
  StyledButton,
  StyledEye,
  StyledEyeSlash,
  Wrapper,
  Text,
  StyledFacebook,
  StyledGoogle,
  WrapperTitle,
  Title,
  SubText,
} from "./style";
import { useState } from "react";

export const LoginForm = () => {
  const { LoginValidate } = useValidator();
  const [show, setShow] = useState<boolean>(false);
  const handleGetDataFromLogin = (value: Record<string, string>) => {
    console.log(value);
  };

  return (
    <Wrapper>
      <WrapperTitle>
        <Title>Daxil ol</Title>
        <Flex JsContent={"center"} AlItems={"center"}>
          <StyledFacebook />
          <Text>Facebook ilə</Text>
          <StyledGoogle />
          <Text>Google ilə</Text>
        </Flex>
        <SubText>və ya</SubText>
      </WrapperTitle>
      <MyForm onClick={handleGetDataFromLogin} validationScheme={LoginValidate}>
        <MyField
          name={"email"}
          label={"E-mail"}
          placeholder={"nümunə@gmail.com"}
          type={"email"}
        />
        <Password>
          <MyField
            type={show ? "text" : "password"}
            name={"password"}
            label={"Şifrə"}
            placeholder={"Şifrənizi daxil edin"}
          />
          {show ? (
            <StyledEye onClick={() => setShow(!show)} />
          ) : (
            <StyledEyeSlash onClick={() => setShow(!show)} />
          )}
        </Password>

        <StyledButton type={"submit"}>Daxil ol</StyledButton>
      </MyForm>
    </Wrapper>
  );
};

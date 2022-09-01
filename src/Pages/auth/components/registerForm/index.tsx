import { useValidator } from "Hooks/validator";
import { FC, ReactNode, useState } from "react";
import {
  Password,
  StyledButton,
  StyledEye,
  StyledEyeSlash,
  Wrapper,
} from "../loginForm/style";
import { AnotherLogin } from "../anotherLogin";
import { MyField, MyForm } from "Components/shared";

import { buttonLoader } from "Assets";

interface Props {
  onClick: (value: Record<string, string>) => void;
  isLoading: boolean;
}

export const RegisterForm: FC<Props> = ({ onClick, isLoading }) => {
  const { RegisterValidate } = useValidator();
  const [show, setShow] = useState<boolean>(false);

  return (
    <Wrapper>
      <AnotherLogin />
      <MyForm onClick={onClick} validationScheme={RegisterValidate}>
        <MyField
          name={"firstName"}
          label={"Ad"}
          placeholder={"Adınızı daxil edin"}
        />
        <MyField
          name={"lastName"}
          label={"Soyad"}
          placeholder={"Soyadınızı daxil edin"}
        />
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

        <StyledButton
          startIcon={isLoading ? <img width={40} src={buttonLoader} /> : ""}
          type={"submit"}
        >
          Qeydiyyat
        </StyledButton>
      </MyForm>
    </Wrapper>
  );
};

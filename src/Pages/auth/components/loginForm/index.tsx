import { MyForm, MyField } from "../../../../Components/shared";
import { useValidator } from "../../../../Hooks/validator";
import {
  Password,
  StyledButton,
  StyledEye,
  StyledEyeSlash,
  Wrapper,
} from "./style";
import { FC, useState } from "react";
import { AnotherLogin } from "../anotherLogin";

interface Props {
  onClick: (value: Record<string, string>) => void;
}

export const LoginForm: FC<Props> = ({ onClick }) => {
  const { LoginValidate } = useValidator();
  const [show, setShow] = useState<boolean>(false);

  return (
    <Wrapper>
      <AnotherLogin />
      <MyForm onClick={onClick} validationScheme={LoginValidate}>
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

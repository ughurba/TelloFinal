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
import { useTranslation } from "react-i18next";

interface Props {
  onClick: (value: Record<string, string>) => void;
  isLoading: boolean;
}

export const RegisterForm: FC<Props> = ({ onClick, isLoading }) => {
  const { RegisterValidate } = useValidator();
  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <AnotherLogin title="SignUp" subTitle="CreateYourAccountFirst" />
      <MyForm onClick={onClick} validationScheme={RegisterValidate}>
        <MyField
          name={"firstName"}
          label={t("Name")}
          placeholder={t("EnterYourName")}
        />
        <MyField
          name={"lastName"}
          label={t("Surname")}
          placeholder={t("EnterYourSurname")}
        />
        <MyField
          name={"email"}
          label={t("EMail")}
          placeholder={t("Example")}
          type={"email"}
        />
        <Password>
          <MyField
            type={show ? "text" : "password"}
            name={"password"}
            label={"Password"}
            placeholder={"EnterYourPassword"}
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
          {t("Registration")}
        </StyledButton>
      </MyForm>
    </Wrapper>
  );
};

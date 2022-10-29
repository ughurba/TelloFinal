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
import { buttonLoader } from "../../../../Assets";
import { useTranslation } from "react-i18next";

interface Props {
  onClick: (value: Record<string, string>) => void;
  isLoading: boolean;
}

export const LoginForm: FC<Props> = ({ onClick, isLoading }) => {
  const { t } = useTranslation();
  const { LoginValidate } = useValidator();
  const [show, setShow] = useState<boolean>(false);

  return (
    <Wrapper>
      <AnotherLogin title="Insert" subTitle={t("EnterYourEmailAndPassword")} />
      <MyForm onClick={onClick} validationScheme={LoginValidate}>
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
            label={t("Password")}
            placeholder={t("EnterYourPassword")}
          />
          {show ? (
            <StyledEye onClick={() => setShow(!show)} />
          ) : (
            <StyledEyeSlash onClick={() => setShow(!show)} />
          )}
        </Password>

        <StyledButton
          startIcon={
            isLoading ? <img width={40} src={buttonLoader} alt={""} /> : ""
          }
          type={"submit"}
        >
          {t("Insert")}
        </StyledButton>
      </MyForm>
    </Wrapper>
  );
};

import { StyledButton, WrapperBoxInput, WrapperInput } from "../../style";
import { Record } from "phosphor-react";
import { FC } from "react";
import { useValidator } from "Hooks/validator";
import styled from "styled-components";
import { PhoneInputField, MyField, MyForm, Flex } from "Components/shared";
import { useTranslation } from "react-i18next";

interface Props {
  handleClickPersonalValue: (value: Record<string, string>) => void;
}

export const Phone = styled(PhoneInputField)``;

export const PersonalForm: FC<Props> = ({ handleClickPersonalValue }) => {
  const { PersonalInfoValidate } = useValidator();
  const { t } = useTranslation();
  return (
    <MyForm
      onClick={handleClickPersonalValue}
      validationScheme={PersonalInfoValidate}
    >
      <WrapperBoxInput>
        <Flex JsContent={"space-between"}>
          <WrapperInput>
            <MyField
              label={t("Name")}
              name={"firstName"}
              placeholder={t("EnterYourName")}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={t("Surname")}
              name={"lastName"}
              placeholder={t("EnterYourSurname")}
            />
          </WrapperInput>
        </Flex>
      </WrapperBoxInput>
      <WrapperBoxInput>
        <Flex JsContent={"space-between"}>
          <WrapperInput>
            <MyField
              label={t("MobileNumber")}
              name="mobile"
              component={Phone}
              country={"az"}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={t("EMail")}
              name={"email"}
              type={"email"}
              placeholder={t("Example")}
            />
          </WrapperInput>
        </Flex>
      </WrapperBoxInput>
      <div>
        <StyledButton type={"submit"}>{t("Remember")} </StyledButton>
      </div>
    </MyForm>
  );
};

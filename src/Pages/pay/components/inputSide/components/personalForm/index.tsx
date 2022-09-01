import { StyledButton, WrapperBoxInput, WrapperInput } from "../../style";
import { Record } from "phosphor-react";
import { FC } from "react";
import { useValidator } from "Hooks/validator";
import styled from "styled-components";
import { PhoneInputField, MyField, MyForm, Flex } from "Components/shared";

interface Props {
  handleClickPersonalValue: (value: Record<string, string>) => void;
}

export const Phone = styled(PhoneInputField)``;

export const PersonalForm: FC<Props> = ({ handleClickPersonalValue }) => {
  const { PersonalInfoValidate } = useValidator();

  return (
    <MyForm
      onClick={handleClickPersonalValue}
      validationScheme={PersonalInfoValidate}
    >
      <WrapperBoxInput>
        <Flex JsContent={"space-between"}>
          <WrapperInput>
            <MyField
              label={"Ad"}
              name={"firstName"}
              placeholder={"Adınızı daxil edin"}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={"Soyad"}
              name={"lastName"}
              placeholder={"Soyadınızı daxil edin"}
            />
          </WrapperInput>
        </Flex>
      </WrapperBoxInput>
      <WrapperBoxInput>
        <Flex JsContent={"space-between"}>
          <WrapperInput>
            <MyField
              label={"Mobil nömrə"}
              name="mobile"
              component={Phone}
              country={"az"}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={"E-mail"}
              name={"email"}
              type={"email"}
              placeholder={"nümunə@gmail.com"}
            />
          </WrapperInput>
        </Flex>
      </WrapperBoxInput>
      <div>
        <StyledButton type={"submit"}>Yadda saxla </StyledButton>
      </div>
    </MyForm>
  );
};

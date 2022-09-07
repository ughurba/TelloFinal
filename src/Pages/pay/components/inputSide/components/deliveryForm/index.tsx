import {
  StyledButton,
  StyledTextArea,
  WrapperBoxInput,
  WrapperInput,
} from "../../style";
import { Flex, MyField, MyForm } from "Components/shared";
import { Record } from "phosphor-react";
import { FC } from "react";
import { useValidator } from "Hooks/validator";
import { useTranslation } from "react-i18next";

interface Props {
  handleClickDeliveryValue: (value: Record<string, string>) => void;
}
export const DeliveryForm: FC<Props> = ({ handleClickDeliveryValue }) => {
  const { t } = useTranslation();
  const { deliveryValidator } = useValidator();
  return (
    <MyForm
      onClick={handleClickDeliveryValue}
      validationScheme={deliveryValidator}
    >
      <WrapperBoxInput>
        <Flex JsContent={"space-between"}>
          <WrapperInput>
            <MyField
              label={t("Address")}
              name={"address"}
              placeholder={t("EnterTheAddress")}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={t("BuildingApartment")}
              name={"building"}
              placeholder={t("InsertPlease")}
            />
          </WrapperInput>
        </Flex>
      </WrapperBoxInput>

      <WrapperBoxInput>
        <WrapperInput>
          <StyledTextArea />
        </WrapperInput>
      </WrapperBoxInput>
      <div>
        <StyledButton type={"submit"}>{t("Remember")}</StyledButton>
      </div>
    </MyForm>
  );
};

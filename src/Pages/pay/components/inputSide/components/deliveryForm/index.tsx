import { MyForm } from "../../../../../../Components/shared/form";
import {
  StyledButton,
  StyledTextArea,
  WrapperBoxInput,
  WrapperInput,
} from "../../style";
import { Flex } from "../../../../../../Components/shared";
import { MyField } from "../../../../../../Components/shared/field";
import { Record } from "phosphor-react";
import { FC } from "react";
import { useValidator } from "../../../../../../Hooks/validator";

interface Props {
  handleClickDeliveryValue: (value: Record<string, string>) => void;
}
export const DeliveryForm: FC<Props> = ({ handleClickDeliveryValue }) => {
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
              label={"Ünvan"}
              name={"address"}
              placeholder={"Ünvanı daxil edin"}
            />
          </WrapperInput>
          <WrapperInput>
            <MyField
              label={"Bina/Mənzil"}
              name={"building"}
              placeholder={"Daxil edin"}
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
        <StyledButton type={"submit"}>Yadda saxla</StyledButton>
      </div>
    </MyForm>
  );
};

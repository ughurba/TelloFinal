import { FC } from "react";
import {
  Title,
  Wrapper,
  List,
  Link,
  WrapperLink,
  StyledCheckGreen,
  StyledCheckWhite,
  SaveList,
} from "./style";
import { Flex } from "../../../../Components/shared";
import { Confirm } from "../../index";
import { Record } from "phosphor-react";
import { PersonalForm } from "./components/personalForm";
import { SaveLinks } from "./components/saveLinks";
import { DeliveryForm } from "./components/deliveryForm";
import { Payment } from "./components/payment";

interface Props {
  handleClickPersonalValue: (value: Record<string, string>) => void;
  handleClickDeliveryValue: (value: Record<string, string>) => void;
  handleClickConfirm: (value: Record<string, boolean>) => void;
  confirmation: Confirm;
  personalInfo?: Record<string, string>;
  delivering?: Record<string, string>;
}
export const InputSide: FC<Props> = ({
  handleClickPersonalValue,
  handleClickDeliveryValue,
  handleClickConfirm,
  confirmation,
  personalInfo,
  delivering,
}) => {
  const { personal, delivery, payments } = confirmation;
  return (
    <Wrapper>
      <Title>Ödəmə</Title>
      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>1. Şəxsi məlumatlar</Link>
            {personal ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>

          {!personal ? (
            <PersonalForm handleClickPersonalValue={handleClickPersonalValue} />
          ) : (
            <SaveList>
              <SaveLinks title={"Ad"} info={personalInfo?.firstName} />
              <SaveLinks title={"Soyad"} info={personalInfo?.lastName} />
              <SaveLinks title={"E-mail"} info={personalInfo?.email} />
              <SaveLinks title={"Nomre"} phone={personalInfo?.mobile} />
            </SaveList>
          )}
        </WrapperLink>

        <WrapperLink personal={personal}>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>2. Çatdırılma</Link>
            {delivery ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>
          {personal &&
            (!delivery ? (
              <DeliveryForm
                handleClickDeliveryValue={handleClickDeliveryValue}
              />
            ) : (
              <SaveList>
                <SaveLinks title={"Ünvan"} info={delivering?.address} />
                <SaveLinks title={"Bina/Mənzil"} info={delivering?.building} />
              </SaveList>
            ))}
        </WrapperLink>
        <WrapperLink delivery={delivery}>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>3. Ödəmə üsulu</Link>
            {payments ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>
          {delivery && <Payment handleClickConfirm={handleClickConfirm} />}
        </WrapperLink>
      </List>
    </Wrapper>
  );
};

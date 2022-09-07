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
import { Flex } from "Components/shared";
import { Confirm } from "../../index";
import { Record } from "phosphor-react";
import { PersonalForm } from "./components/personalForm";
import { SaveLinks } from "./components/saveLinks";
import { DeliveryForm } from "./components/deliveryForm";
import { Payment } from "./components/payment";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { personal, delivery, payments } = confirmation;
  return (
    <Wrapper>
      <Title>{t("Payment")}</Title>
      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>1. {t("PersonalInformation")}</Link>
            {personal ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>

          {!personal ? (
            <PersonalForm handleClickPersonalValue={handleClickPersonalValue} />
          ) : (
            <SaveList>
              <SaveLinks title={t("Name")} info={personalInfo?.firstName} />
              <SaveLinks title={t("Surname")} info={personalInfo?.lastName} />
              <SaveLinks title={t("EMail")} info={personalInfo?.email} />
              <SaveLinks title={t("Number")} phone={personalInfo?.mobile} />
            </SaveList>
          )}
        </WrapperLink>

        <WrapperLink personal={personal}>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>2. {t("Delivery")}</Link>
            {delivery ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>
          {personal &&
            (!delivery ? (
              <DeliveryForm
                handleClickDeliveryValue={handleClickDeliveryValue}
              />
            ) : (
              <SaveList>
                <SaveLinks title={t("Address")} info={delivering?.address} />
                <SaveLinks
                  title={t("BuildingApartment")}
                  info={delivering?.building}
                />
              </SaveList>
            ))}
        </WrapperLink>
        <WrapperLink delivery={delivery}>
          <Flex JsContent={"space-between"} AlItems={"center"}>
            <Link>3. {t("PaymentMethod")}</Link>
            {payments ? <StyledCheckGreen /> : <StyledCheckWhite />}
          </Flex>
          {delivery && <Payment handleClickConfirm={handleClickConfirm} />}
        </WrapperLink>
      </List>
    </Wrapper>
  );
};

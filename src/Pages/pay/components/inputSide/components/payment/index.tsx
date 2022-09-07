import { CreditCard, Money, Record } from "phosphor-react";

import { FC, useState } from "react";
import { StyledButton, Wrapper, Text, StyledConfirmButton } from "./style";
import { Flex } from "Components/shared";
import { useTranslation } from "react-i18next";

interface Props {
  handleClickConfirm: (value: Record<string, boolean>) => void;
}
export const Payment: FC<Props> = ({ handleClickConfirm }) => {
  const [clickPay, setClickPay] = useState<Record<string, boolean>>({
    cash: false,
    card: false,
  });
  const { t } = useTranslation();

  const handleClickCardPay = () => {
    setClickPay({ ...clickPay, card: (clickPay.card = true) });
    setClickPay({ ...clickPay, cash: (clickPay.cash = false) });
  };
  const handleClickCashPay = () => {
    setClickPay({ ...clickPay, card: (clickPay.card = false) });
    setClickPay({ ...clickPay, cash: (clickPay.cash = true) });
  };

  const { card, cash } = clickPay;

  return (
    <Wrapper>
      <Flex JsContent={"space-around"}>
        <StyledButton card={card} onClick={handleClickCardPay}>
          <Flex JsContent={"center"} AlItems={"center"}>
            <CreditCard size={20} color="black" />
            <Text>{t("OnlineCardPayment")}</Text>
          </Flex>
        </StyledButton>
        <StyledButton cash={cash} onClick={handleClickCashPay}>
          <Flex JsContent={"center"} AlItems={"center"}>
            <Money size={21} color="black" />
            <Text>{t("CashPaymentTheDoor")}</Text>
          </Flex>
        </StyledButton>
      </Flex>

      <Flex JsContent={"center"}>
        <StyledConfirmButton onClick={() => handleClickConfirm(clickPay)}>
          {t("Confirm")}
        </StyledConfirmButton>
      </Flex>
    </Wrapper>
  );
};

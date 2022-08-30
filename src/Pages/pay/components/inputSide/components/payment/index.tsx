import { CreditCard, Money, Record } from "phosphor-react";

import { FC, useState } from "react";
import { StyledButton, Wrapper, Text, StyledConfirmButton } from "./style";
import { Flex } from "../../../../../../Components/shared";

interface Props {
  handleClickConfirm: (value: Record<string, boolean>) => void;
}
export const Payment: FC<Props> = ({ handleClickConfirm }) => {
  const [clickPay, setClickPay] = useState<Record<string, boolean>>({
    cash: false,
    card: false,
  });

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
              <Text>Onlayn kart ilə ödəmə</Text>
            </Flex>
          </StyledButton>
          <StyledButton cash={cash} onClick={handleClickCashPay}>
            <Flex JsContent={"center"} AlItems={"center"}>
              <Money size={21} color="black" />
              <Text>Qapida nagd ödəmə</Text>
            </Flex>
          </StyledButton>
        </Flex>

        <Flex JsContent={"center"}>
          <StyledConfirmButton onClick={() => handleClickConfirm(clickPay)}>
            Təsdiq et
          </StyledConfirmButton>
        </Flex>
      </Wrapper>
  );
};

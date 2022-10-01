import { EmptyBasket } from "Components/shared/emptyBasket";
import { Title } from "../personalInformation/style";
import { useTranslation } from "react-i18next";
import { Wrapper, StyledEmptyBasket } from "./style";

export const MyOrders = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("MyOrders")}</Title>
      {/* <StyledEmptyBasket>
        <EmptyBasket text={t("YouCurrentlyHaveNoOrdersInYourCart")} />
      </StyledEmptyBasket> */}
    </Wrapper>
  );
};

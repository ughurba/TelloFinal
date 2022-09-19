import { BasketItems } from "./components/basketItems";
import { Flex, Container, TotalSide } from "Components/shared";
import { StyledTotalSide, Wrapper, WrapperEmptyBasket } from "./style";
import { useAppSelector } from "Redux/hooks";
import { EmptyBasket } from "../../Components/shared/emptyBasket";

import { useTranslation } from "react-i18next";
import { StyledButton } from "Pages/detailProduct/components/fullInfoProductContent/style";
import { useNavigate } from "react-router-dom";

export const Basket = () => {
  const { basketItems, total } = useAppSelector((state) => state.basket.basket);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      {basketItems?.length !== 0 ? (
        <>
          <Wrapper>
            <Container>
              <Flex JsContent={"space-between"}>
                <div>
                  {basketItems?.map((obj) => (
                    <BasketItems key={obj.id} {...obj} />
                  ))}
                </div>
                <StyledTotalSide>
                  <TotalSide total={total} />
                </StyledTotalSide>
              </Flex>
            </Container>
          </Wrapper>
        </>
      ) : (
        <WrapperEmptyBasket>
          <Flex FlexColumn={"column"} AlItems={"center"} JsContent={"center"}>
            <EmptyBasket
              iconWidth={"300px"}
              title={t("EmptyBasketTitle")}
              styleParagraph={true}
              text={t("EmptyBasket")}
            />
            <StyledButton onClick={() => navigate("/Phones")}>
              {t("InKatalog")}
            </StyledButton>
          </Flex>
        </WrapperEmptyBasket>
      )}
    </>
  );
};

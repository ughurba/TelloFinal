import { EmptyBasket } from "Components/shared/emptyBasket";
import { Title } from "../personalInformation/style";
import { useTranslation } from "react-i18next";
import { Wrapper, StyledEmptyBasket } from "./style";
import { OrderCard } from "./Components/Card";
import styled from "styled-components";
import { useGetAllSaleProductQuery } from "services/saleServices";
import { Flex, Loader } from "Components/shared";
export const WrapperCard = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 10px;
`;
export const MyOrders = () => {
  const { data, isLoading, isSuccess } = useGetAllSaleProductQuery();
  const { t } = useTranslation();
  console.log(data);
  return (
    <Wrapper>
      <Title>{t("MyOrders")}</Title>
      {/* <StyledEmptyBasket>
        <EmptyBasket text={t("YouCurrentlyHaveNoOrdersInYourCart")} />
      </StyledEmptyBasket> */}
      <Flex FlexWrap="wrap">
        {isLoading ? (
          <Loader />
        ) : (
          isSuccess &&
          data.map((obj) => (
            <WrapperCard>
              {" "}
              <OrderCard {...obj} />
            </WrapperCard>
          ))
        )}
      </Flex>
    </Wrapper>
  );
};

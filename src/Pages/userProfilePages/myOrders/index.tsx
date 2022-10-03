import { EmptyBasket } from "Components/shared/emptyBasket";
import { Title } from "../personalInformation/style";
import { useTranslation } from "react-i18next";
import { Wrapper, StyledEmptyBasket, StyledLink } from "./style";
import { OrderCard } from "./Components/Card";
import {
  extendSaleApi,
  useGetAllSaleProductQuery,
} from "services/baseServices/saleServices";
import { Flex, Loader } from "Components/shared";
import { useAppDispatch } from "Redux/hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Links } from "Routes/links";

export const MyOrders = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(extendSaleApi.util.resetApiState());
  }, [dispatch]);
  const { data, isLoading, isSuccess } = useGetAllSaleProductQuery();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("MyOrders")}</Title>
      {data?.length === 0 && (
        <StyledEmptyBasket>
          <EmptyBasket text={t("YouCurrentlyHaveNoOrdersInYourCart")} />
        </StyledEmptyBasket>
      )}

      <Flex FlexWrap="wrap">
        {isLoading ? (
          <Loader />
        ) : (
          isSuccess &&
          data.map((obj) => (
            <StyledLink
              key={obj.id}
              to={`${Links.userProfileApp.OrderItems}/${obj.id}`}
            >
              <OrderCard {...obj} />
            </StyledLink>
          ))
        )}
      </Flex>
    </Wrapper>
  );
};

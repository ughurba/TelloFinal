import {
  Line,
  Link,
  List,
  Price,
  StyledButton,
  Title,
  Total,
  Wrapper,
  WrapperLink,
} from "./style";
import { GreyAzn } from "Assets";
import { Flex } from "../";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Links } from "Routes/links";

interface Props {
  total?: number;
  isButton?: boolean;
}
export const TotalSide: FC<Props> = ({ total, isButton = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>{t("General")}</Title>
      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>{t("Amount")}</Link>
            <Flex AlItems={"center"}>
              <Price>{total?.toFixed(2)}</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        <WrapperLink>
          {/* <Flex JsContent={"space-between"}>
            <Link>{t("Discount")}</Link>
            <Flex AlItems={"center"}>
              <Price>0</Price>
              <GreyAzn />
            </Flex>
          </Flex> */}
        </WrapperLink>
        {/*<WrapperLink>*/}
        {/*  <Flex JsContent={"space-between"}>*/}
        {/*    /!*<Link>{t("GiftPackage")}</Link>*!/*/}
        {/*    /!*<Flex AlItems={"center"}>*!/*/}
        {/*    /!*  <Price>5.00</Price>*!/*/}
        {/*    /!*  <GreyAzn />*!/*/}
        {/*    /!*</Flex>*!/*/}
        {/*  </Flex>*/}
        {/*</WrapperLink>*/}
      </List>
      <Line />
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <Total>{t("Toplam qiymət:")}</Total>
        <Flex AlItems={"center"}>
          <Price>{total?.toFixed(2)}</Price>
          <GreyAzn />
        </Flex>
      </Flex>
      {isButton ? (
        <StyledButton onClick={() => navigate(Links.app.pay)}>
          {t("DrawTheOrder")}
        </StyledButton>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

import {
  Line,
  Link,
  List,
  Price,
  Title,
  Total,
  Wrapper,
  WrapperLink,
} from "./style";
import { GreyAzn } from "Assets";
import { Flex } from "../";
import { useTranslation } from "react-i18next";

export const TotalSide = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("General")}</Title>

      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>{t("Amount")}</Link>
            <Flex AlItems={"center"}>
              <Price>66.50</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>{t("Delivery")}</Link>
            <Flex AlItems={"center"}>
              <Price>0.00</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>{t("GiftPackage")}</Link>
            <Flex AlItems={"center"}>
              <Price>5.00</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
      </List>
      <Line />
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <Total>{t("Total")}</Total>
        <Flex AlItems={"center"}>
          <Price>61.50</Price>
          <GreyAzn />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

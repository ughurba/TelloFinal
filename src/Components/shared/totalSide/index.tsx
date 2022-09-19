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
import { IBasketItems } from "types";
import { FC, useEffect, useState } from "react";

interface Props {
  total?: number;
}
export const TotalSide: FC<Props> = ({ total }) => {
  // const [obj, setObj] = useState<IBasketItems>({
  //   sum: 0,
  //   count: 0,
  //   productId: 0,
  //   path: "",
  //   price: 0,
  //   id: 0,
  // });

  // useEffect(() => {
  //   data?.map((item) => {
  //     setObj({ ...obj, ...item });
  //   });
  // }, [data]);
  // const [sum, setSum] = useState<number>(obj?.sum);
  //
  // useEffect(() => {
  //   setSum(obj.sum);
  // }, [obj]);

  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("General")}</Title>
      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>{t("Amount")}</Link>
            <Flex AlItems={"center"}>
              <Price>{total}</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        {/*<WrapperLink>*/}
        {/*  <Flex JsContent={"space-between"}>*/}
        {/*    <Link>{t("Delivery")}</Link>*/}
        {/*    <Flex AlItems={"center"}>*/}
        {/*      /!*<Price>{obj?.price}</Price>*!/*/}
        {/*      <GreyAzn />*/}
        {/*    </Flex>*/}
        {/*  </Flex>*/}
        {/*</WrapperLink>*/}
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            {/*<Link>{t("GiftPackage")}</Link>*/}
            {/*<Flex AlItems={"center"}>*/}
            {/*  <Price>5.00</Price>*/}
            {/*  <GreyAzn />*/}
            {/*</Flex>*/}
          </Flex>
        </WrapperLink>
      </List>
      <Line />
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <Total>{t("Total")}</Total>
        <Flex AlItems={"center"}>
          <Price>{total}</Price>
          <GreyAzn />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

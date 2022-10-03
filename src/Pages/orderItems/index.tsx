import { Flex, Loader } from "Components/shared";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useGetOrderItemQuery } from "services/baseServices/saleServices";
import {
  Color,
  NameColor,
  ProductContent,
  StyledImg,
  Title,
  Wrapper,
  NameStorage,
  StockPrice,
  Storage,
  Count,
  NameCount,
} from "./style";

export const OrderItems = () => {
  const { orderId = "" } = useParams();
  const { t } = useTranslation();
  const { data, isLoading } = useGetOrderItemQuery(orderId);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((item) => (
          <Wrapper key={item.id}>
            <Flex JsContent={"space-between"} AlItems={"center"}>
              <Flex AlItems={"center"}>
                {item.photos.map((img) =>
                  img.isMain ? <StyledImg key={item.id} src={img.path} /> : ""
                )}
                <ProductContent>
                  <Title>{item.title}</Title>
                  <Flex AlItems={"flex-end"}>
                    <Color>
                      {t("Color")}: <NameColor color={item.code} />
                    </Color>
                    <Storage>
                      {t("Storage")}:{" "}
                      <NameStorage>{item.storage}GB</NameStorage>
                    </Storage>
                    <NameCount>
                      {t("Say")}: <Count>{item.count}</Count>eded
                    </NameCount>
                    <StockPrice>{item.total} ₼</StockPrice>
                  </Flex>
                </ProductContent>
              </Flex>
            </Flex>
          </Wrapper>
        ))
      )}
    </>
  );
};

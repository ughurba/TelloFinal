import { Flex } from "../";
import { IProps } from "Pages/detailProduct/components/fullInfoProductContent";
import { FC, useState } from "react";
import {
  Paragraph,
  Wrapper,
  Title,
  Line,
  List,
  Link,
  InfoProduct,
} from "./style";
import { useTranslation } from "react-i18next";

interface Props extends IProps {}

export const Specification: FC<Props> = ({ product }) => {
  const [specification, setSpecification] = useState<boolean>(true);
  const { t } = useTranslation();
  const specifications = [
    t("Brand"),
    t("ProductType"),
    t("Network"),
    t("eSIM"),
    t("SIMCartCount"),
    t("ScreenSize"),
    t("ScreenPermission"),
    t("OperatingMemory"),
    t("ProsessorType"),
  ];
  return (
    <Wrapper>
      <Flex>
        <Title
          specification={specification}
          onClick={() => setSpecification(true)}
        >
          {t("TechnicalCharacteristics")}
        </Title>
        <Title
          onClick={() => setSpecification(!specification)}
          specification={specification}
        >
          {t("Reviews")}
        </Title>
      </Flex>
      <Line />
      {specification && (
        <Flex JsContent={"space-between"}>
          <List>
            {t("Features")}
            {specifications.map((value, index) => (
              <Link key={index}>{value}</Link>
            ))}
          </List>
          <List>
            {product?.specifications.map((spec, index) => (
              <Link key={index}>{spec}</Link>
            ))}
          </List>
          <InfoProduct>
            {t("AboutTheProduct")}
            <Paragraph>{product?.paragraph}</Paragraph>
          </InfoProduct>
        </Flex>
      )}
    </Wrapper>
  );
};

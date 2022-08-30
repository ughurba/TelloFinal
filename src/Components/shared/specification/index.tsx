import { Flex } from "../";
import { IProps } from "../../../Pages/detailProduct/components/fullInfoProductContent";
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

interface Props extends IProps {}

export const Specification: FC<Props> = ({ product }) => {
  const [specification, setSpecification] = useState<boolean>(true);
  const specifications = [
    "Brend",
    "Məhsul tipi",
    "Şəbəkə",
    "eSIM",
    "SIM-kart sayı",
    "Ekranın ölçüsü",
    "Ekran icazəsi",
    "Operativ yaddaş",
    "Prosessor tipi",
  ];
  return (
    <Wrapper>
      <Flex>
        <Title
          specification={specification}
          onClick={() => setSpecification(true)}
        >
          Texniki Xüsusiyyətləri
        </Title>
        <Title
          onClick={() => setSpecification(!specification)}
          specification={specification}
        >
          Rəylər
        </Title>
      </Flex>
      <Line />
      {specification && (
        <Flex JsContent={"space-between"}>
          <List>
            Xüsusiyyətlər
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
            Məhsul haqqında
            <Paragraph>{product?.paragraph}</Paragraph>
          </InfoProduct>
        </Flex>
      )}
    </Wrapper>
  );
};

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

export const TotalSide = () => {
  return (
    <Wrapper>
      <Title>Ümumi</Title>

      <List>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>Məbləğ </Link>
            <Flex AlItems={"center"}>
              <Price>66.50</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>Çatdırılma </Link>
            <Flex AlItems={"center"}>
              <Price>0.00</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
        <WrapperLink>
          <Flex JsContent={"space-between"}>
            <Link>Hədiyyə paketi </Link>
            <Flex AlItems={"center"}>
              <Price>5.00</Price>
              <GreyAzn />
            </Flex>
          </Flex>
        </WrapperLink>
      </List>
      <Line />
      <Flex AlItems={"center"} JsContent={"space-between"}>
        <Total>Cəmi</Total>
        <Flex AlItems={"center"}>
          <Price>61.50</Price>
          <GreyAzn />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

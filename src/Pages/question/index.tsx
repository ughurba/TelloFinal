import { DropQuestion } from "./components/dropDownQuestion";

import { Flex, Container } from "../../Components/shared";
import { Title, Wrapper } from "./style";
import { FC } from "react";

export const Question: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Flex FlexColumn={"column"} JsContent={"center"} AlItems={"center"}>
          <Title>Tez-tez verilən suallar</Title>
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
          <DropQuestion />
        </Flex>
      </Container>
    </Wrapper>
  );
};

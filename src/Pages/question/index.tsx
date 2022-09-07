import { DropQuestion } from "./components/dropDownQuestion";

import { Flex, Container } from "../../Components/shared";
import { Title, Wrapper } from "./style";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Question: FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Flex FlexColumn={"column"} JsContent={"center"} AlItems={"center"}>
          <Title>{t("QuickGiveQuestions")}</Title>
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

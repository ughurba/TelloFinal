import { Container, Flex } from "Components/shared";
import { Card, Box, Medal } from "Assets";
import { useTranslation } from "react-i18next";
import { Wrapper, Text, Title, WrapperBox } from "./style";

export const CustomerAssistance = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Flex JsContent="space-between">
          <WrapperBox>
            <Box />
            <Title>{t("Delivery")}</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </WrapperBox>
          <WrapperBox>
            <Card />
            <Title>{t("Credit")}</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </WrapperBox>
          <WrapperBox>
            <Medal />
            <Title>{t("Guarantee")}</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </WrapperBox>
        </Flex>
      </Container>
    </Wrapper>
  );
};

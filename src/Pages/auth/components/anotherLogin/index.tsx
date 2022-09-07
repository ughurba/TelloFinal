import { Flex } from "../../../../Components/shared";
import {
  StyledFacebook,
  StyledGoogle,
  SubText,
  Title,
  Text,
  WrapperTitle,
} from "./style";
import { useTranslation } from "react-i18next";

export const AnotherLogin = () => {
  const { t } = useTranslation();
  return (
    <WrapperTitle>
      <Title>{t("Insert")}</Title>
      <Flex JsContent={"center"} AlItems={"center"}>
        <StyledFacebook />
        <Text>{t("WithFacebook")}</Text>
        <StyledGoogle />
        <Text>{t("WithGoogle")}</Text>
      </Flex>
      <SubText>{t("Or")}</SubText>
    </WrapperTitle>
  );
};

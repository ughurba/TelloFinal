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

import { gapi } from "gapi-script";
import { FC, useEffect } from "react";
interface Props {
  subTitle: string;
  title: string;
}
export const AnotherLogin: FC<Props> = ({ subTitle, title }) => {
  const { t } = useTranslation();

  return (
    <WrapperTitle>
      <Title>{t(title)}</Title>
      <Flex JsContent={"center"} AlItems={"center"}>
        <SubText>{t(subTitle)}</SubText>
      </Flex>
    </WrapperTitle>
  );
};

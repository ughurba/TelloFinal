import { Flex } from "../../../../Components/shared";
import {
  StyledFacebook,
  StyledGoogle,
  SubText,
  Title,
  Text,
  WrapperTitle,
} from "./style";

export const AnotherLogin = () => {
  return (
    <WrapperTitle>
      <Title>Daxil ol</Title>
      <Flex JsContent={"center"} AlItems={"center"}>
        <StyledFacebook />
        <Text>Facebook ilə</Text>
        <StyledGoogle />
        <Text>Google ilə</Text>
      </Flex>
      <SubText>və ya</SubText>
    </WrapperTitle>
  );
};

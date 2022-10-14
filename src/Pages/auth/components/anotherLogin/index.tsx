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
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
export const AnotherLogin = () => {
  const { t } = useTranslation();
  const onSuccess = (res: any) => {
    console.log("success:", res);
  };
  const onFailure = (err: any) => {
    console.log("failed:", err);
  };
  const clientId =
    "386437863762-01up0fjtv0v6mh9go2lhoe72fa0jfsdk.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);
  return (
    <WrapperTitle>
      <Title>{t("Insert")}</Title>
      <Flex JsContent={"center"} AlItems={"center"}>
        <StyledFacebook />
        <Text>{t("WithFacebook")}</Text>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <StyledGoogle onClick={renderProps.onClick} />
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
        <Text>{t("WithGoogle")}</Text>
        <GoogleLogout clientId={clientId} buttonText="Sign Out" />
        {/* <StyledGoogle />
         */}
      </Flex>
      <SubText>{t("Or")}</SubText>
    </WrapperTitle>
  );
};

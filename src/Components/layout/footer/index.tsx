import {
  FacebookIcon,
  Line,
  List,
  LocationFooter,
  Span,
  StyledIcon,
  StyledInstagramIcon,
  StyledLink,
  StyledTwitterIcon,
  StyledYouTubeIcon,
  SubFooter,
  SubText,
  Title,
  Wrapper,
} from "./style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Flex, Container } from "../../shared";
import { FC } from "react";
import { Links } from "Routes/links";
import { useTranslation } from "react-i18next";
import { useBasketUpdate } from "Hooks/basket";
import { GroupTello } from "Assets";

export const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <ul>
            <img src={GroupTello} alt={"groupTello"} />

            <Flex>
              <StyledIcon>
                <StyledInstagramIcon />
              </StyledIcon>
              <StyledIcon>
                <FacebookIcon />
              </StyledIcon>
              <StyledIcon>
                <StyledYouTubeIcon />
              </StyledIcon>
              <StyledIcon>
                <StyledTwitterIcon />
              </StyledIcon>
            </Flex>
          </ul>
          <ul>
            <Title>{t("Menu")}</Title>
            <List>{t("New")}</List>
            <List>{t("Discounts")}</List>
            <List>{t("Headphones")}</List>
            <List>{t("AllBrands")}</List>
          </ul>
          <ul>
            <Title>{t("Help")}</Title>
            <List>
              <StyledLink to={Links.app.question}>
                {t("FrequentlyAskedQuestions")}
              </StyledLink>
            </List>
            <List>{t("DeliveryService")}</List>
            <List>{t("RefundPolicy")}</List>
          </ul>
          <ul>
            <Title>{t("Contact")}</Title>
            <List>
              <LocationOnIcon />
              <LocationFooter>{t("LocationFooter")}</LocationFooter>
            </List>
            <List>
              <EmailIcon />
              <Span>{t("Gmail")}</Span>
            </List>
            <List>
              <LocalPhoneIcon />
              <Span>*2108</Span>
            </List>
          </ul>
        </Flex>
      </Container>
      <Line />
      <SubFooter>
        <Flex AlItems="center" JsContent="space-between">
          <SubText>{t("ProjectX2021AllRightsReserved")}</SubText>
          <div>
            <SubText>{t("RulesAndInformation")}</SubText>
            <SubText>{t("PrivacyPolicy")}</SubText>
          </div>
        </Flex>
      </SubFooter>
    </Wrapper>
  );
};

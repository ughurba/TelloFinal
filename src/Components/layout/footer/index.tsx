import {
  FacebookIcon,
  IconTitle,
  List,
  Span,
  StyledIcon,
  StyledInstagramIcon,
  StyledLink,
  StyledTwitterIcon,
  StyledYouTubeIcon,
  Title,
  Wrapper,
} from "./style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Flex, Container } from "../../shared";
import { FC } from "react";
import { Links } from "Routes/links";

export const Footer: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-around"}>
          <ul>
            <IconTitle>Project</IconTitle>
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
            <Title>Menu</Title>
            <List>Yeni</List>
            <List>Endirimlər</List>
            <List>Aksessuarlar</List>
            <List>Bütün brendlər</List>
          </ul>
          <ul>
            <Title>Kömək</Title>
            <List>
              <StyledLink to={Links.app.question}>
                Tez-tez soruşulan suallar
              </StyledLink>
            </List>
            <List>Çatdırılma xidməti</List>
            <List>Geri qaytarılma şərtləri</List>
          </ul>
          <ul>
            <Title>Əlaqə</Title>
            <List>
              <LocationOnIcon />
              <Span>M. K. Ataturk avenue 89, Baku, Azerbaijan</Span>
            </List>
            <List>
              <EmailIcon />
              <Span>example@gmail.com</Span>
            </List>
            <List>
              <LocalPhoneIcon />
              <Span>*2108</Span>
            </List>
          </ul>
        </Flex>
      </Container>
    </Wrapper>
  );
};

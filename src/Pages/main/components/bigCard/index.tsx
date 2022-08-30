import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { mapPhone, phone } from "../../../../Assets";
import AppleIcon from "@mui/icons-material/Apple";
import { FC } from "react";
import { Flex, Container } from "../../../../Components/shared";
import {
  DiscountPrice,
  PriceTypography,
  SpanInfoPrice,
  StartPrice,
  StyledBoxMui,
  StyledButton,
  StyledCardMui,
  StyledTypography,
} from "./style";

export const BigCards: FC = () => {
  return (
    <Container>
      <Flex JsContent={"space-between"}>
        <StyledCardMui>
          <StyledBoxMui>
            <CardContent>
              <StyledTypography component="h4" variant="h3">
                IPhone 11. Rengli. Guclu. Esl size lazim olan
              </StyledTypography>
              <PriceTypography>1 519 AZN</PriceTypography>
              <DiscountPrice>Faizsiz taksitle 127 AZN-den</DiscountPrice>
              <StyledButton variant="outlined">Indi alin</StyledButton>
            </CardContent>
            <CardMedia component="img" sx={{ width: 200 }} image={phone} />
          </StyledBoxMui>
        </StyledCardMui>
        <StyledCardMui>
          <StyledBoxMui>
            <CardContent sx={{ textAlign: "center" }}>
              <Box>
                <Flex JsContent={"center"} AlItems={"center"}>
                  <AppleIcon />
                  <StyledTypography component="h4" variant="h3">
                    AirTag
                  </StyledTypography>
                </Flex>
              </Box>
              <Typography
                fontSize="25px"
                color="black"
                fontWeight="600"
                component="div"
                variant="h3"
                mt="20px"
              >
                Esyalarinizi tapmagin super asan yolu.
              </Typography>

              <StartPrice>
                79
                <SpanInfoPrice>AZN-den*</SpanInfoPrice>
              </StartPrice>

              <StyledButton size="small" variant="outlined">
                Indi alin
              </StyledButton>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: "250px" }}
              image={mapPhone}
            />
          </StyledBoxMui>
        </StyledCardMui>
      </Flex>
    </Container>
  );
};

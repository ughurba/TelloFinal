import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { IOrder } from "types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "Components/shared";
import {
  StyledPending,
  StyledReject,
  StyledSuccsess,
  Price,
  StyledCard,
  StyledTypography,
} from "./style";
import { OrderStatus } from "Helper";

export const OrderCard: FC<IOrder> = ({ date, orderStatus, photos, total }) => {
  const { t } = useTranslation();

  const orderHtml = () => {
    if (orderStatus === OrderStatus.Pending) {
      return <StyledPending>Pending</StyledPending>;
    } else if (orderStatus === OrderStatus.Accept) {
      return <StyledSuccsess>Succsess</StyledSuccsess>;
    } else {
      return <StyledReject>Reject</StyledReject>;
    }
  };
  return (
    <StyledCard variant="outlined" sx={{ minWidth: "250px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <StyledTypography
          level="h2"
          fontSize="md"
          sx={{ alignSelf: "flex-start" }}
        >
          {t("DateOfOrder")}
        </StyledTypography>
        <StyledTypography level="body2">{date}</StyledTypography>
      </Box>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={photos.at(0)?.path} alt="" />
      </AspectRatio>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <StyledTypography level="body3">{t("TotalPrice")}:</StyledTypography>
          <Price fontSize="lg" fontWeight="lg">
            {total} ₼
          </Price>
        </div>
        <Flex FlexColumn="column" AlItems="flex-end">
          <StyledTypography level="body3">{t("Status")}</StyledTypography>
          {orderHtml()}
        </Flex>
      </Box>
    </StyledCard>
  );
};

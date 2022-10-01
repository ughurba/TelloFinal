import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { IOrder } from "types";
import { FC } from "react";

export const OrderCard: FC<IOrder> = ({ date, orderStatus, photos, total }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: "250px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
          Sifariş tarixi:
        </Typography>
        <Typography level="body2">{date}</Typography>
      </Box>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={photos.at(0)?.path} alt="" />
      </AspectRatio>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {total} ₼
          </Typography>
        </div>
        <div>
          <Typography level="body3">Status:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {orderStatus}
          </Typography>
        </div>
      </Box>
    </Card>
  );
};

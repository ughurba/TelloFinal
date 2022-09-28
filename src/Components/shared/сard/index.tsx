import {
  OldPrice,
  NewPrice,
  Stock,
  NoStock,
  StyledTypographyPrices,
  StyledCardContent,
  StyledCardActions,
  Title,
} from "./style";
import { FC, useState } from "react";
import { Favorits, Goods } from "types";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledLink } from "../products/style";
import { Checkbox } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useAppSelector } from "../../../Redux/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props extends Goods {
  handleChange: (ev: React.FormEvent<HTMLInputElement>, id: number) => void;
  favorites?: any[];
}
export const CustomCard: FC<Props> = ({
  newPrice,
  oldPrice,
  photos,
  inStock,
  title,
  description,
  id,
  handleChange,
  isFavorite,
  favorites,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const { user } = useAppSelector((state) => state.user);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, padding: "15px" }}>
      {photos.map((img) =>
        img.isMain ? (
          <StyledLink key={id} to={`/FullInfoProduct/${id}`}>
            <CardMedia
              component="img"
              height="194"
              image={img.path}
              alt="Paella dish"
            />
          </StyledLink>
        ) : (
          ""
        )
      )}
      <StyledCardContent>
        <Title variant="h4">{title}</Title>
        <StyledTypographyPrices variant="subtitle2" color="text.secondary">
          {oldPrice ? <OldPrice>{oldPrice} ₼ </OldPrice> : ""}
          {""}
          <NewPrice>{newPrice} ₼</NewPrice>
          {inStock ? (
            <Stock>Stokda var</Stock>
          ) : (
            <NoStock>Stokda yoxdur</NoStock>
          )}
        </StyledTypographyPrices>
      </StyledCardContent>
      <StyledCardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <>
            {user.isOnline && (
              <Checkbox
                name={id.toString()}
                onChange={(ev) => handleChange(ev, id)}
                icon={
                   <FavoriteBorder />
                }
                checkedIcon={<Favorite />}
              />
            )}
          </>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </StyledCardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

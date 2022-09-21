import {
  OldPrice,
  NewPrice,
  Stock,
  NoStock,
  StyledTypographyPrices,
  StyledCardContent,
  StyledCardActions,
} from "./style";
import { FC } from "react";
import { Goods } from "types";
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
export const CustomCard: FC<Goods> = ({
  newPrice,
  oldPrice,
  photos,
  inStock,
  title,
  description,
  id,
}) => {
  const [expanded, setExpanded] = React.useState(false);

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
        <Typography variant="h6" color="black">
          {title}
        </Typography>
        <StyledTypographyPrices variant="subtitle2" color="text.secondary">
          {oldPrice ? <OldPrice>{oldPrice} ₼ </OldPrice> : ""}
          {""}
          <NewPrice>{newPrice} ₼</NewPrice>
          {inStock ? <Stock>InStock</Stock> : <NoStock>NoStock</NoStock>}
        </StyledTypographyPrices>
      </StyledCardContent>
      <StyledCardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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

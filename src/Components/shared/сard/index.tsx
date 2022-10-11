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
import { FC } from "react";
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
import { useTranslation } from "react-i18next";
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
  handleChangeFavorite?: (
    ev: React.FormEvent<HTMLInputElement>,
    id: number
  ) => void;
  favorites?: boolean;
  isFavorite?: boolean;
}
const StyledFavorite = styled(Favorite)`
  color: #1976d2;
`;
export const CustomCard: FC<Props> = ({
  newPrice,
  oldPrice,
  photos,
  inStock,
  title,
  description,
  id,
  handleChangeFavorite,
  favorites,
  isFavorite = true,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.user);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300, padding: "15px", height: 420 }}>
      {photos.map((img) =>
        img.isMain ? (
          <StyledLink key={id} to={`/FullInfoProduct/${id}`}>
            <CardMedia
              sx={{ objectFit: "contain" }}
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
            <Stock>{t("inStock")}</Stock>
          ) : (
            <NoStock>{t("noStock")}</NoStock>
          )}
        </StyledTypographyPrices>
      </StyledCardContent>
      <StyledCardActions disableSpacing>
        {isFavorite && (
          <IconButton aria-label="add to favorites">
            <>
              {user.isOnline && (
                <Checkbox
                  name={id.toString()}
                  onChange={
                    handleChangeFavorite
                      ? (ev) => handleChangeFavorite(ev, id)
                      : undefined
                  }
                  icon={favorites ? <StyledFavorite /> : <FavoriteBorder />}
                  defaultChecked={favorites}
                  checkedIcon={<StyledFavorite />}
                />
              )}
            </>
          </IconButton>
        )}

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

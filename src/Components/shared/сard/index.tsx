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
import CardContent from "@mui/material/CardContent";
import { Favorite } from "@mui/icons-material";
import { useAppSelector } from "../../../Redux/hooks";
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

const StyledFavorite = styled(Favorite)<{ isfav: boolean | undefined }>`
  color: ${(props) => (props.isfav ? "#1976d2" : "")};
`;
interface Props extends Goods {
  handleNoCheckFavorite?: (id: number) => void;
  favorites?: boolean;
  isfavorite?: boolean;
}

export const CustomCard: FC<Props> = ({
  newPrice,
  oldPrice,
  photos,
  inStock,
  title,
  description,
  id,
  handleNoCheckFavorite,
  favorites,
  isfavorite = true,
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
        {isfavorite && (
          <IconButton aria-label="add to favorites">
            <>
              {user.isOnline && (
                <>
                  <StyledFavorite
                    isfav={favorites ? favorites : undefined}
                    onClick={() =>
                      handleNoCheckFavorite && handleNoCheckFavorite(id)
                    }
                  />
                </>
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

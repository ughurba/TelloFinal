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
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { StyledLink } from "../products/style";
import { Favorite } from "@mui/icons-material";
import { useAppSelector } from "../../../Redux/hooks";
import { useTranslation } from "react-i18next";

const StyledFavorite = styled(Favorite)<{ isfav: boolean | undefined }>`
  color: ${(props) => (props.isfav ? "red" : "#cecccc")};
  font-size: 30px;
`;
export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 4px;
  right: 15px;
`;
interface Props extends Goods {
  handleNoCheckFavorite?: (id: number, favId: Favorits[]) => void;
  favoriteIds?: boolean;
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
  favorits,
  isfavorite = true,
  favoriteIds,
}) => {
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.user);
  return (
    <Card
      sx={{ maxWidth: 300, padding: "15px", height: 380, position: "relative" }}
    >
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
          <StyledIconButton
            onClick={() =>
              handleNoCheckFavorite &&
              handleNoCheckFavorite(
                id,
                favorits
                  ? favorits?.filter((x) => x.appUserId === user.nameid)
                  : []
              )
            }
            aria-label="add to favorites"
          >
            <>
              {user.isOnline && (
                <>
                  <StyledFavorite
                    isfav={favoriteIds ? favoriteIds : undefined}
                  />
                </>
              )}
            </>
          </StyledIconButton>
        )}
      </StyledCardActions>
    </Card>
  );
};

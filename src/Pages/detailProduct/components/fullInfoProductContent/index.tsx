import { FC, useEffect, useState } from "react";
import {
  Azn,
  Color,
  Line,
  Name,
  Price,
  Title,
  Wrapper,
  WrapperColor,
  WrapperStorage,
  Storage,
  StyledButton,
  WrapperLink,
  StyledRating,
} from "./style";
import { Flex } from "Components/shared/";
import { useTranslation } from "react-i18next";
import { DetailProduct, ProductStorages } from "types";
import HoverRating from "../customRating";
import {
  AddProps,
  useAddItemMutation,
} from "services/baseServices/basketServices";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import { addItem, updateTotal } from "Redux/slices/basketSlice";
import { toast } from "react-toastify";

export interface IProps {
  product: DetailProduct;
}

export const FullInfoProductContent: FC<IProps> = ({ product }) => {
  const [addProduct, result] = useAddItemMutation();
  const { user } = useAppSelector((state) => state.user);
  const { data, isSuccess } = result;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [checkColor, setCheckColor] = useState<string>(
    product.productColors[0].colors.code
  );
  const [checkStorage, setCheckStorage] = useState<number>(
    product?.productStorages[0]?.storage.id
  );

  const [itemIds, setItemIds] = useState<AddProps>({
    productId: product.id,
    colorId: product.productColors[0].colors.id,
    storageId: product?.productStorages[0]?.storage.id
      ? product?.productStorages[0]?.storage.id
      : 0,
  });
  const handleClickColor = (id: number, colorCode: string) => {
    setItemIds({ ...itemIds, colorId: id });
    setCheckColor(colorCode);
  };
  const handleClickStorage = (id: number) => {
    setItemIds({ ...itemIds, storageId: id });
    setCheckStorage(id);
  };
  const handleAddItem = (productId: number) => {
    if (user.isOnline) {
      console.log(itemIds);
      setItemIds({ ...itemIds, productId: productId });
      addProduct(itemIds);
    } else {
      toast.warning("login ol");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(addItem(data.basketItems));
      dispatch(updateTotal(data.total));
      toast.success(t("AddedToCart"), { position: "bottom-right" });
    }
  }, [data]);
  return (
    <Wrapper>
      <Title>{product.title}</Title>
      <StyledRating>
        <HoverRating />
      </StyledRating>

      <Price>
        {product?.newPrice}
        <Azn />
      </Price>
      <Line />
      <WrapperColor>
        <Flex AlItems={"center"}>
          <Name>{t("Color")}:</Name>
          {product?.productColors.map((c) => (
            <Color
              onClick={() => handleClickColor(c.colors.id, c.colors.code)}
              key={c.colors.id}
              colors={c.colors.code}
              checkColor={checkColor}
            />
          ))}
        </Flex>
      </WrapperColor>
      <WrapperStorage>
        <Flex AlItems={"center"}>
          {product.productStorages.length !== 0 ? (
            <Name>{t("Storage")}:</Name>
          ) : (
            ""
          )}

          {product?.productStorages?.map((s, i) => (
            <Storage
              storageId={s.storageId}
              checkStorage={checkStorage}
              onClick={() => handleClickStorage(s.storageId)}
              key={i}
            >
              {s.storage.value}GB
            </Storage>
          ))}
        </Flex>
      </WrapperStorage>
      <Line />

      <WrapperLink>
        <StyledButton
          disabled={!product.inStock}
          onClick={() => handleAddItem(product?.id)}
        >
          {product.inStock ? t("AddToCart") : t("TheProductIsFinished")}
        </StyledButton>
      </WrapperLink>
    </Wrapper>
  );
};

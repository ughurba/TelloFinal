import { FC, ReactNode, useEffect, useMemo, useState } from "react";
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
import { AddProps, useAddItemMutation } from "services/basketServices";
import { useAppDispatch } from "Redux/hooks";
import { addItem, updateTotal } from "Redux/slices/basketSlice";

export interface IProps {
  product: DetailProduct;
}

export const FullInfoProductContent: FC<IProps> = ({ product }) => {
  const [addProduct, result] = useAddItemMutation();
  const { data, isSuccess } = result;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [checkColor, setCheckColor] = useState<string>(
    product.productColors[0].colors.code
  );
  const [checkStorage, setCheckStorage] = useState<number>(
    product.productStorages[0].storage.id
  );

  const [itemIds, setItemIds] = useState<AddProps>({
    productId: product.id,
    colorId: product.productColors[0].colors.id,
    storageId: product.productStorages[0].storage.id,
  });
  const handleClickColor = (id: number, colorCode: string) => {
    setItemIds({ ...itemIds, colorId: id });
    setCheckColor(colorCode);
  };
  const handleClickStorage = (id: number) => {
    setItemIds({ ...itemIds, storageId: id });
    console.log(id);
    setCheckStorage(id);
  };
  const handleAddItem = (productId: number) => {
    setItemIds({ ...itemIds, productId: productId });
    addProduct(itemIds);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(addItem(data.basketItems));
      dispatch(updateTotal(data.total));
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
          <Name>{t("Storage")}:</Name>
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
        <StyledButton onClick={() => handleAddItem(product?.id)}>
          {t("AddToCart")}
        </StyledButton>
      </WrapperLink>
    </Wrapper>
  );
};

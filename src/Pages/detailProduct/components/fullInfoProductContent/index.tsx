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
import { DetailProduct, IRating } from "types";
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
  const [itemIds, setItemIds] = useState<AddProps>({
    productId: product?.id,
    colorId: product.productColors[0].colors.id,
    storageId: product.productStorages[0].storage.id,
  });

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
      <Title>{product?.title}</Title>
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
              onClick={() => setItemIds({ ...itemIds, colorId: c.colors.id })}
              key={c.colors.id}
              colors={c.colors.code}
            />
          ))}
        </Flex>
      </WrapperColor>
      <WrapperStorage>
        <Flex AlItems={"center"}>
          <Name>{t("Storage")}:</Name>
          {product?.productStorages?.map((s, i) => (
            <Storage
              onClick={() =>
                setItemIds({ ...itemIds, storageId: s.storage.id })
              }
              key={i}
            >
              {s.storage.value}
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

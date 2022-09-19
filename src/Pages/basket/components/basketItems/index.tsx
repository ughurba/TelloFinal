import { Flex, IncDecCount } from "Components/shared";
import { FC, useCallback, useEffect, useState } from "react";
import {
  Wrapper,
  StyledTrash,
  StyledImg,
  Title,
  StockPrice,
  ProductContent,
  Color,
  NameColor,
} from "./style";
import { useTranslation } from "react-i18next";
import { IBasketItems, IncDecType } from "types";
import {
  useDecrementPutMutation,
  useIncrementPutMutation,
  useDeleteItemMutation,
} from "services/basketServices";
import { useAppDispatch } from "Redux/hooks";
import { removeItem, updateTotal } from "Redux/slices/basketSlice";

interface Props extends IBasketItems {}

export const BasketItems: FC<Props> = ({
  product,
  productId,
  path,
  count,
  code,
  sum,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [removeId, setRemoveId] = useState(productId);
  const [decrement, { data: decrementData, isSuccess: isSuccessDecrement }] =
    useDecrementPutMutation();
  const [increment, { data: incrementData, isSuccess: isSuccessIncrement }] =
    useIncrementPutMutation();
  const [remove, resp] = useDeleteItemMutation();
  const { data: removeResp, isSuccess: isSuccessRemove } = resp;
  const [incDec, setIncDec] = useState<IncDecType>({
    isExistSum: sum,
    isExistCount: count,
    productCount: product?.stockCount,
  });

  const handleIncrement = (id: number) => {
    if (product) {
      if (product?.stockCount > incDec.isExistCount) {
        increment(id);
      }
    }
  };
  const handleDecrement = (id: number) => {
    if (incDec.isExistCount > 1) {
      decrement(id);
    }
  };
  const handleRemoveItem = (id: number) => {
    remove(id);
    setRemoveId(id);
  };

  useEffect(() => {
    if (isSuccessIncrement && incrementData) {
      incrementData?.frontBaskets?.map((item) =>
        setIncDec({
          ...incDec,
          ...item,
        })
      );
      dispatch(updateTotal(incrementData.total));
    }
  }, [isSuccessIncrement]);

  useEffect(() => {
    if (isSuccessDecrement && decrementData) {
      decrementData?.frontBaskets?.map((item) =>
        setIncDec({
          ...incDec,
          ...item,
        })
      );
      dispatch(updateTotal(decrementData.total));
    }
  }, [isSuccessDecrement]);

  useEffect(() => {
    if (isSuccessRemove) {
      dispatch(updateTotal(removeResp?.total));
      dispatch(removeItem(removeId));
    }
  }, [isSuccessRemove]);

  return (
    <Wrapper>
      <Flex JsContent={"space-between"} AlItems={"center"}>
        <Flex AlItems={"center"}>
          <StyledImg src={path} />
          <ProductContent>
            <Title>{product?.title}</Title>
            <Flex AlItems={"flex-end"}>
              <Color>
                {t("Color")}: <NameColor>{code}</NameColor>
              </Color>
              <StockPrice>{incDec.isExistSum} ₼</StockPrice>
            </Flex>
          </ProductContent>
        </Flex>

        <IncDecCount
          count={incDec.isExistCount}
          handleDecrement={() => handleDecrement(productId)}
          handleIncrement={() => handleIncrement(productId)}
        />
        <StyledTrash onClick={() => handleRemoveItem(productId)} />
      </Flex>
    </Wrapper>
  );
};

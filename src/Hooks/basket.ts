import { useGetAllQuery } from "../services/basketServices";
import { useEffect } from "react";
import { addItem, updateTotal } from "../Redux/slices/basketSlice";
import { useAppDispatch } from "../Redux/hooks";

export const useBasketUpdate = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllQuery();
  useEffect(() => {
    if (data) {
      dispatch(addItem(data.basketItems));
      dispatch(updateTotal(data.total));
    }
  }, [data]);
};

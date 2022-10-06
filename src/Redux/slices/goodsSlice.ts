import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorits, ShopGoods } from "../../types";

interface initialState {
  product: ShopGoods;
  productLoading: boolean;
  categoryId: number;
}
const initialState: initialState = {
  product: {
    result: [],
    productIdFavorite: [],
    totalCount: 0,
  },
  categoryId: 0,
  productLoading: true,
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setProduct: (state, action: PayloadAction<ShopGoods>) => {
      state.product.result = action.payload.result;
      state.product.productIdFavorite = action.payload.productIdFavorite;
      state.product.totalCount = action.payload.totalCount;
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.productLoading = action.payload;
    },
  },
});
export const { setProduct, setProductLoading, setCategoryId } =
  goodsSlice.actions;
export default goodsSlice.reducer;

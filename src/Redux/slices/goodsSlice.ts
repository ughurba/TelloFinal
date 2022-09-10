import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import state from "sweetalert/typings/modules/state";
import { Goods, ShopGoods } from "../../types";

interface initialState {
  goods: ShopGoods;
  isLoading: boolean;
}
const initialState: initialState = {
  goods: {
    result: [],
    totalCount: 0,
  },
  isLoading: false,
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setGoods: (state, action: PayloadAction<ShopGoods>) => {
      state.goods.result = action.payload.result;
      state.goods.totalCount = action.payload.totalCount;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setGoods, setLoading } = goodsSlice.actions;
export default goodsSlice.reducer;

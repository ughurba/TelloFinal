import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopGoods } from "../../types";

interface initialState {
  headphones: ShopGoods;
  phones: ShopGoods;
  discountProduct: ShopGoods;
  discountProductLoading: boolean;
  phonesLoading: boolean;
  headphonesLoading: boolean;
  categoryId: number;
}
const initialState: initialState = {
  phones: {
    result: [],
    totalCount: 0,
  },
  headphones: {
    result: [],
    totalCount: 0,
  },
  discountProduct: {
    result: [],
    totalCount: 0,
  },
  categoryId: 0,
  discountProductLoading: true,
  headphonesLoading: true,
  phonesLoading: true,
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setPhones: (state, action: PayloadAction<ShopGoods>) => {
      state.phones.result = action.payload.result;
      state.phones.totalCount = action.payload.totalCount;
    },
    setPhonesLoading: (state, action: PayloadAction<boolean>) => {
      state.phonesLoading = action.payload;
    },
    setHeadphones: (state, action: PayloadAction<ShopGoods>) => {
      state.headphones.result = action.payload.result;
      state.headphones.totalCount = action.payload.totalCount;
    },
    setHeadphonesLoading: (state, action: PayloadAction<boolean>) => {
      state.headphonesLoading = action.payload;
    },
    setDiscountProduct: (state, action: PayloadAction<ShopGoods>) => {
      state.discountProduct.result = action.payload.result;
      state.discountProduct.totalCount = action.payload.totalCount;
    },
    setDiscountProductLoading: (state, action: PayloadAction<boolean>) => {
      state.headphonesLoading = action.payload;
    },
    // updateFavoritePhones: (state, action: PayloadAction<number>) => {
    //   state.phones.result = state.phones.result.filter((x) => {
    //     if (x.id === action.payload) {
    //       x.isFavorite = true;
    //     } else {
    //       x.isFavorite = false;
    //     }
    //   });
    // },
  },
});
export const {
  setDiscountProductLoading,
  setDiscountProduct,
  setPhones,
  setPhonesLoading,
  setHeadphonesLoading,
  setHeadphones,
  setCategoryId,
} = goodsSlice.actions;
export default goodsSlice.reducer;

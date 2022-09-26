import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopGoods } from "../../types";

interface initialState {
  product: ShopGoods;
  productLoading: boolean;
  categoryId: number;
}
const initialState: initialState = {
  product: {
    result: [],
    totalCount: 0,
  },
  // headphones: {
  //   result: [],
  //   totalCount: 0,
  // },
  // discountProduct: {
  //   result: [],
  //   totalCount: 0,
  // },
  categoryId: 0,
  // discountProductLoading: true,
  // headphonesLoading: true,
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
      state.product.totalCount = action.payload.totalCount;
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.productLoading = action.payload;
    },
    // setHeadphones: (state, action: PayloadAction<ShopGoods>) => {
    //   state.headphones.result = action.payload.result;
    //   state.headphones.totalCount = action.payload.totalCount;
    // },
    // setHeadphonesLoading: (state, action: PayloadAction<boolean>) => {
    //   state.headphonesLoading = action.payload;
    // },
    // setDiscountProduct: (state, action: PayloadAction<ShopGoods>) => {
    //   state.discountProduct.result = action.payload.result;
    //   state.discountProduct.totalCount = action.payload.totalCount;
    // },
    // setDiscountProductLoading: (state, action: PayloadAction<boolean>) => {
    //   state.headphonesLoading = action.payload;
    // },
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
export const { setProduct, setProductLoading, setCategoryId } =
  goodsSlice.actions;
export default goodsSlice.reducer;

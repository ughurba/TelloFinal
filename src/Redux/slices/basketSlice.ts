import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket, IBasketItems } from "../../types";

interface initialStateProps {
  basket: Basket;
}
const initialState: initialStateProps = {
  basket: {
    basketItems: [],
    total: 0,
  },
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IBasketItems[]>) => {
      state.basket.basketItems = action.payload;
    },
    updateTotal: (state, action: PayloadAction<number>) => {
      state.basket.total = action.payload;
    },
  },
});
export const { addItem, updateTotal } = basketSlice.actions;
export default basketSlice.reducer;

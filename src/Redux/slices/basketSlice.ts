import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../../types";

interface initialStateTypes {
  items: IGoods[];
  totalItems: string;
}

const initialState: initialStateTypes = {
  items: [],
  totalItems: "",
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    priceItem(state, action: PayloadAction<IGoods>) {
      const existItem = state.items.find((obj) => obj.id === action.payload.id);
      if (existItem) {
        existItem.total = (existItem.price * existItem.count).toFixed(2);
      }
    },
    totalItem(state) {
      state.totalItems = state.items
        .reduce((acc, obj) => {
          acc += obj.price * obj.count;
          return acc;
        }, 0)
        .toFixed(2);
    },
    addItem: (state, action: PayloadAction<IGoods>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      basketSlice.caseReducers.totalItem(state);
    },

    removeItem(state, action: PayloadAction<IGoods>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      basketSlice.caseReducers.totalItem(state);
    },

    plusItem(state, action: PayloadAction<IGoods>) {
      basketSlice.caseReducers.addItem(state, action);
      basketSlice.caseReducers.priceItem(state, action);
    },
    minusItem(state, action: PayloadAction<IGoods>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        if (findItem.count <= 1) {
          basketSlice.caseReducers.removeItem(state, action);
        } else {
          findItem.count--;
          basketSlice.caseReducers.priceItem(state, action);
          basketSlice.caseReducers.totalItem(state);
        }
      }
    },
  },
});

export const { addItem, plusItem, removeItem, minusItem } = basketSlice.actions;
export default basketSlice.reducer;

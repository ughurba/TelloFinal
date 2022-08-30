import { configureStore } from "@reduxjs/toolkit";

import sliderSlice from "./slices/sliderSlice";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from "./slices/basketSlice";
export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    basket: basketSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from "./slices/basketSlice";
import { authApi } from "../services/authServices";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    basket: basketSlice,
    user: userSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

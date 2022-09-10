import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import userSlice from "./slices/userSlice";
import { adminApi } from "../services/adminServices";
import { categoriesApi } from "../services/categoriesServices";
import goodsSlice from "./slices/goodsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    user: userSlice,
    goods: goodsSlice,

    [goodsApi.reducerPath]: goodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsApi.middleware,
      authApi.middleware,
      adminApi.middleware,
      categoriesApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

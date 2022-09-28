import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import userSlice from "./slices/userSlice";
import { productApi } from "../services/adminServices/productServices";
import { categoriesApi } from "../services/categoriesServices";
import goodsSlice from "./slices/goodsSlice";
import { commentApi } from "../services/commentService";
import { basketApi } from "../services/basketServices";
import basketSlice from "./slices/basketSlice";
import { shopApi } from "../services/shopServices";
import { accountApi } from "services/adminServices/accountServices";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    user: userSlice,
    goods: goodsSlice,
    basket: basketSlice,

    [goodsApi.reducerPath]: goodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsApi.middleware,
      authApi.middleware,
      productApi.middleware,
      categoriesApi.middleware,
      commentApi.middleware,
      basketApi.middleware,
      shopApi.middleware,
      accountApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

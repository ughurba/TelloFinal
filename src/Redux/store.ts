import { userApi } from "./../services/adminServices/userServices";
import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./slices/userSlice";
import goodsSlice from "./slices/goodsSlice";
import basketSlice from "./slices/basketSlice";
import {
  accountApi,
  authApi,
  basketApi,
  categoriesApi,
  commentApi,
  goodsApi,
  productApi,
  saleApi,
  shopApi,
  saleAdminApi,
} from "services";

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
    [saleApi.reducerPath]: saleApi.reducer,
    [saleAdminApi.reducerPath]: saleAdminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
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
      accountApi.middleware,
      saleApi.middleware,
      saleAdminApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

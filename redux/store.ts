import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { userInfoSlice } from "@redux/reducers/userInfoSlice";
import { createItemsSlice } from "@redux/reducers/createItemsSlice";
import { myPageApi } from "@api/myPageApi";
import { memberApi } from "@api/memberApi";
import { sellersApi } from "@api/sellersApi";
import { itemsApi } from "@api/itemsApi";
import { commonSlice } from "@redux/reducers/commonSlice";
import { sellersSlice } from "@redux/reducers/sellersSlice";

export const store = configureStore({
  reducer: {
    [memberApi.reducerPath]: memberApi.reducer,
    [myPageApi.reducerPath]: myPageApi.reducer,
    [sellersApi.reducerPath]: sellersApi.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
    [userInfoSlice.name]: userInfoSlice.reducer,
    [createItemsSlice.name]: createItemsSlice.reducer,
    [commonSlice.name]: commonSlice.reducer,
    [sellersSlice.name]: sellersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      memberApi.middleware,
      myPageApi.middleware,
      sellersApi.middleware,
      itemsApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

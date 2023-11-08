import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { userInfoSlice } from "@redux/reducers/userInfoSlice";
import { createItemsSlice } from "@redux/reducers/createItemsSlice";
import { myPageApi } from "@api/myPageApi";
import { memberApi } from "@api/memberApi";
import { sellersApi } from "@api/sellersApi";

export const store = configureStore({
  reducer: {
    [memberApi.reducerPath]: memberApi.reducer,
    [myPageApi.reducerPath]: myPageApi.reducer,
    [sellersApi.reducerPath]: sellersApi.reducer,
    [userInfoSlice.name]: userInfoSlice.reducer,
    [createItemsSlice.name]: createItemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      memberApi.middleware,
      myPageApi.middleware,
      sellersApi.middleware,
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

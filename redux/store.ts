import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { memberApi } from "@api/memberApi";
import { myPageApi } from "@api/myPageApi";
import { userInfoSlice } from "@redux/reducers/userInfoSlice";
import createItems from "@components/SellerPages/CreateItems";
import { createItemsSlice } from "@redux/reducers/createItemsSlice";

export const store = configureStore({
  reducer: {
    [memberApi.reducerPath]: memberApi.reducer,
    [myPageApi.reducerPath]: myPageApi.reducer,
    [userInfoSlice.name]: userInfoSlice.reducer,
    [createItemsSlice.name]: createItemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(memberApi.middleware, myPageApi.middleware),
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

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { myPageApi } from "@api/myPageApi";
import { memberApi } from "@api/memberApi";

export const store = configureStore({
  reducer: {
    [memberApi.reducerPath]: memberApi.reducer,
    [myPageApi.reducerPath]: myPageApi.reducer,
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

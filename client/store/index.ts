import { Action, Middleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { thunk, ThunkAction, ThunkMiddleware } from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

// Правильна типізація мідлвару
export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk as ThunkMiddleware),  // Явно типізуємо
  });

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

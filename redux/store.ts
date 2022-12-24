import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./score";
import themeReducer from "./theme";

export const store = configureStore({
  reducer: {
    counter: scoreReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

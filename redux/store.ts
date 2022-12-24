import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./score";
import themeReducer from "./theme";
import highScoreReducer from "./highscores";

export const store = configureStore({
  reducer: {
    counter: scoreReducer,
    theme: themeReducer,
    highScoreTable: highScoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

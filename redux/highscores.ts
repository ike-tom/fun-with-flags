import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HighScore {
  name: string;
  score: number;
}

const initialState: HighScore[] = [];

export const highScoresSlice = createSlice({
  name: "highScoresTable",
  initialState,
  reducers: {
    addHighScore(state, action: PayloadAction<HighScore>) {
      state.push(action.payload);
    },
  },
});

export const { addHighScore } = highScoresSlice.actions;

export default highScoresSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "counter",
  initialState: {
    score: 0,
  },
  reducers: {
    increment: (state) => {
      state.score += 1;
    },
    reset: (state) => {
      state.score = 0;
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { increment, reset } = scoreSlice.actions;

export default scoreSlice.reducer;

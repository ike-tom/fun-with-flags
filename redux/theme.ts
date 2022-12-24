import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      if (state.value === "dark") {
        state.value = "light";
      } else {
        state.value = "dark";
      }
    },
  },
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;

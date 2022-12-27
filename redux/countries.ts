import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  entities: any[];
  loading: boolean;
}

const initialState: State = {
  entities: [],
  loading: false,
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const countriesSlice = createSlice({
  name: "countriesTable",
  initialState,
  reducers: {},
  extraReducers: {
    [getCountries.pending.type]: (state) => {
      state.loading = true;
    },
    [getCountries.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getCountries.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default countriesSlice.reducer;

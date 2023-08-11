import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    finishLoading: (state, action) => {
      state.loading = false;
    },
  },
});

export default loadingSlice.reducer;
export const { startLoading, finishLoading } = loadingSlice.actions;

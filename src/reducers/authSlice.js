import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  pic: null,
  displayName: null,
  email: null,
  userSelected: null,
  isAuthReady: false,
  errMessage: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const { login } = authSlice.actions;

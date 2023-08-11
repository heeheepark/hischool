import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import loadingSlice from "../reducers/loadingSlice";

const store = configureStore({
  reducer: { loading: loadingSlice },
});

export default store;

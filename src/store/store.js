import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducers/loadingSlice";

const store = configureStore({
  reducer: { loading: loadingSlice },
});

export default store;

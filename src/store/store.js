import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import loadingSlice from "../reducers/loadingSlice";

const store = configureStore({
  reducer: { loading: loadingSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

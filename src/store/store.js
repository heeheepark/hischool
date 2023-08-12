import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loadingSlice from "../reducers/loadingSlice";

const store = configureStore({
  reducer: { loading: loadingSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import slicesReducer from "../slices";

const store = configureStore({
  reducer: slicesReducer,
});

export default store;

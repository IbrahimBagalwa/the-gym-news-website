import { configureStore } from "@reduxjs/toolkit";
import slicesReducer from "../slices";

export type RootStore = ReturnType<typeof slicesReducer>;
const store = configureStore({
  reducer: slicesReducer,
});

export default store;

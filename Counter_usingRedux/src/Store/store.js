import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Features/createSlice";

export const store = configureStore({
  reducer: {
    Counter: CounterReducer,
  },
});

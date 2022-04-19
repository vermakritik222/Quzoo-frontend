import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import questionSlice from "../features/questionSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    questionSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import global from "./state/globalSlice";

export const store = configureStore({
  reducer: {
    auth,
    global
  },
});
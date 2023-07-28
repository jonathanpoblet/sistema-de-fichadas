import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import navigation from "./state/navigationSlice";


export const store = configureStore({
  reducer: {
    auth,
    navigation
  },
});
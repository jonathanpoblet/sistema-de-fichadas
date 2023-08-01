import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import navigation from "./state/navigationSlice";
import global from "./state/globalSlice";

export const store = configureStore({
  reducer: {
    auth,
    navigation,
    global
  },
});
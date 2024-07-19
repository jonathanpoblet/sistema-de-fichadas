import { configureStore } from '@reduxjs/toolkit';
import user from './state/userSlice';
import global from './state/globalSlice';

export const store = configureStore({
  reducer: {
    user,
    global,
  },
});

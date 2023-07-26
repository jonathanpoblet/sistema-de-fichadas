import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: 'token010101010101'
  },
  reducers: {

  },
});

// export const { setActivePage } = authSlice.actions;

export default authSlice.reducer;
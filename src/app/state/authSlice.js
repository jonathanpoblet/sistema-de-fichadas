import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: ''
  },
  reducers: {

  },
});

// export const { setActivePage } = authSlice.actions;

export default authSlice.reducer;
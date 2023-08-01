import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: 'token010101010101',
    user: {
      name: 'Jonathan Alexander',
      lastname: 'Poblet',
      file: '226',
      position: 'Desarrollador Web'
    }
  },
  reducers: {

  },
});

// export const { setActivePage } = authSlice.actions;

export default authSlice.reducer;
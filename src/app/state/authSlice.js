import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: 'token010101010101',
    user: {
      name: 'Jonathan Alexander',
      lastname: 'Poblet',
      file: '226',
      position: 'Web Developer',
      img: '../../../public/assets/user.png'
    }
  },
  reducers: {

  },
});

// export const { setActivePage } = authSlice.actions;

export default authSlice.reducer;
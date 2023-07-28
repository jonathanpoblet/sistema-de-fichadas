import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    responsive: window.innerWidth > 700 ? false : true
  },
  reducers: {
    setResponsive: (state, action) => {
        state.responsive = action.payload;
      }
  },
});

export const { setResponsive } = navigationSlice.actions;

export default navigationSlice.reducer;
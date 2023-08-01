import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    visibleModalProfile : false
  },
  reducers: {
    setVisibleModalProfile: (state, action) => {
      state.visibleModalProfile = action.payload;
    }
  },
});

export const { setVisibleModalProfile } = globalSlice.actions;


export default globalSlice.reducer;
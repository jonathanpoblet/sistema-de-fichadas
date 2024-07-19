import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: 'token010101010101',
    info: {
      id_employe: 2,
      dni: 43819301,
      file: 226,
      name: 'Jonathan Alexander',
      lastname: 'Poblet',
      position: 'Desarrollador Web',
      sector: 'Sistemas',
      birthday: '2001-09-22',
      active: 1,
      id_company: 5,
      in_charge: 0,
      superior: 595,
      img: '../assets/Users/user.png',
    },
  },
  reducers: {},
});

// export const { setActivePage } = userSlice.actions;

export default userSlice.reducer;

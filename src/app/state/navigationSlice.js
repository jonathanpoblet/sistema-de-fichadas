import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    responsive: window.innerWidth > 700 ? false : true
  },
  reducers: {
    setResponsive: (state, action) => {
        state.responsive = action.payload;
        
        const links = document.getElementsByClassName('sidebar-ul-li-link');
        for (let i = 0; i < links.length; i++) {
          if(state.responsive == false) links[i].style.display = 'flex';
          else links[i].style.display = 'none';
        }

        const dropdownLinks = document.getElementsByClassName('sidebar-ul-li-dropdown-li');
        for (let i = 0; i < dropdownLinks.length; i++) {
          if(state.responsive == false) dropdownLinks[i].style.display = 'flex';
          else dropdownLinks[i].style.display = 'none';
        }

        const sidebar = document.getElementsByClassName('sidebar');
        if(state.responsive == false) sidebar[0].style.width = '200px';
        else sidebar[0].style.width = '50px';

        if (window.innerWidth > 500) {
          const img = document.getElementsByClassName('header-left');
          if(state.responsive == false) img[0].style.display = 'flex';
          else img[0].style.display = 'none';
        }

        const dropdownLiSecond = document.getElementsByClassName('sidebar-ul-li-secondary');
        for (let i = 0; i < dropdownLiSecond.length; i++) {
          if(state.responsive == false) dropdownLiSecond[i].style.display = 'flex';
          else dropdownLiSecond[i].style.display = 'none';
        }

      }
  },
});


export const { setResponsive } = navigationSlice.actions;

export default navigationSlice.reducer;
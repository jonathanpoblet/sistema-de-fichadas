import React, { useState } from 'react';
import { BiSolidLeftArrow, BiSolidDownArrow } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { setResponsive } from '../../../app/state/navigationSlice';

export default function SidebarLiDropdown({ children, icon:Icon,label,second }) {
  const [isDropdownOpen,setIsDropdownOpen] = useState(false);

  const responsive = useSelector(state => state.navigation.responsive);
  const dispatch = useDispatch();

  const handleDropdownToggle = async() => {
    setIsDropdownOpen(!isDropdownOpen);
    if(responsive == true) {
      dispatch(setResponsive(false))
    }
  };

  return (
    <>
      <div className={second ? 'sidebar-ul-li-dropdown-secondary' : 'sidebar-ul-li-dropdown'}  onClick={ handleDropdownToggle }>
        <ul className='sidebar-ul-li-dropdown-left'>
          { Icon && <Icon className='sidebar-ul-li-icon' /> }
          <li className={second ? 'sidebar-ul-li-link-secondary' : 'sidebar-ul-li-link'}>
            { label }
          </li>
        </ul>
        {
          isDropdownOpen ? 
          <BiSolidDownArrow className='sidebar-ul-li-icon' />
          :
          <BiSolidLeftArrow className='sidebar-ul-li-icon' />
        }
      </div>
      {
        isDropdownOpen && children
      }
    </>
  )
}

import React, { useState } from 'react';
import { BiSolidLeftArrow, BiSolidDownArrow } from 'react-icons/bi'

export default function SidebarLiDropdown({ children, icon:Icon,label,second }) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={second ? 'sidebar-ul-li-dropdown-secondary' : 'sidebar-ul-li-dropdown'}  onClick={ handleDropdownToggle }>
        <ul className='sidebar-ul-li-dropdown-left'>
          { Icon && <Icon className='sidebar-ul-li-icon' /> }
          <li className="sidebar-ul-li-dropdown-li">
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

import React, { useEffect } from 'react';

//LI
import SidebarLi from './SidebarLi/SidebarLi';
import SidebarLiDropdown from './SidebarLiDropdown/SidebarLiDropdown';

//Icons
import { AiFillHome } from 'react-icons/ai';

import './sidebar.css';

export default function Sidebar() {

  return (
    <div className='sidebar'>
      <ul className='sidebar-ul'>
        <SidebarLi icon={AiFillHome} path='/' label='Home'/>
        <SidebarLi icon={AiFillHome} path='/test' label='Test' />
        <SidebarLi icon={AiFillHome} path='/login' label='Login' />
        <SidebarLiDropdown icon={AiFillHome} label='Products'>
          <SidebarLi second={true} icon={AiFillHome} path='/test-no-Route' label='Test-no-Route' /> 
        </SidebarLiDropdown>
      </ul>
    </div>
  )
}
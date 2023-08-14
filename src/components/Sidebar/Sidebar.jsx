import React from 'react';

//LI
import SidebarLi from './SidebarLi/SidebarLi';
import SidebarLiDropdown from './SidebarLiDropdown/SidebarLiDropdown';

//Icons
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser, BiSolidUserPlus } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';

import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-ul'>
        <SidebarLi icon={AiFillHome} path='/' label='Inicio'/>
        <SidebarLi icon={BiSolidUser} path='/perfil' label='Perfil' />
        <SidebarLiDropdown icon={AiFillHome} label='Productos'>
          <SidebarLi second={true} icon={AiFillHome} path='/test-no-Route' label='Test-no-Route' /> 
        </SidebarLiDropdown>
        <SidebarLiDropdown icon={AiFillHome} label='Clientes'>
          <SidebarLi second={true} icon={BiSolidUserPlus} path='/añadir-cliente' label='Añadir Cliente' /> 
          <SidebarLi second={true} icon={FaUserFriends} path='/listado-clientes' label='Listado Clientes' /> 
        </SidebarLiDropdown>
      </ul>
    </div>
  )
}
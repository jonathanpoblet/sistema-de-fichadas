import React from 'react';

import SidebarLi from './SidebarLi/SidebarLi';

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
        <SidebarLi icon={AiFillHome} path='/test-no-Route' label='Test-no-Route' /> 
        <SidebarLi icon={BiSolidUserPlus} path='/añadir-cliente' label='Añadir Cliente' /> 
        <SidebarLi icon={FaUserFriends} path='/listado-clientes' label='Listado Clientes' /> 
      </ul>
    </div>
  )
}
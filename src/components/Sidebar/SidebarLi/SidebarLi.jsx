import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setVisibleModalProfile } from '../../../app/state/globalSlice';

export default function SidebarLi({ icon: Icon, path, label}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <li 
      className='sidebar-ul-li'
      onClick={() =>  {
        dispatch(setVisibleModalProfile(false));
        navigate(path);
      }}
      title={window.innerWidth < 500 ? label : undefined} 
    >
      {Icon && <Icon className='sidebar-ul-li-icon' />}
      <Link className='sidebar-ul-li-link' id='sidebar-ul-li-link' to={path}>
        {label}
      </Link>
    </li>
  );
}
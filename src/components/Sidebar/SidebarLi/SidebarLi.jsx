import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarLi({ icon: Icon, path, label, second }) {
  return (
    <li 
      className={second ? 'sidebar-ul-li-secondary' : 'sidebar-ul-li'}
      onClick={() => window.location.href = `http://localhost:5173${path}`}
      title={window.innerWidth < 500 ? label : undefined} 
    >
      {Icon && <Icon className='sidebar-ul-li-icon' />}
      <Link className={second ? 'sidebar-ul-li-link-secondary' : 'sidebar-ul-li-link'} id='sidebar-ul-li-link' to={path}>
        {label}
      </Link>
    </li>
  );
}
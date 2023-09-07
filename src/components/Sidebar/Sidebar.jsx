import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import Li from './Li/Li';

import './sidebar.css';

export default function Sidebar() {

  const HomeSubMenus = [{title: 'Home1', url: '#1'},{title: 'Home2', url: '#2'},{title: 'Home3', url: '#3'}];
  const ProfileSubMenus = [{title: 'Profile1', url: '#1'},{title: 'Profile2', url: '#2'},{title: 'Profile3', url: '#3'}];

  return (
  <div className="flex-shrink-0 sidebar">
    <ul className="list-unstyled ps-0">

      {/* Home */}
      <>
        <label className='w-100 text-light fs-6 py-1 px-2 sidebar-label'><small>Home</small></label>
        <Li title={ 'Home' } url={ '../' } />
        <Dropdown title={ 'Home' } collapse={ 'home-collapse' } submenus={ HomeSubMenus } />
      </>

      {/* Profile */}
      <>
        <label className='w-100 text-light fs-6 py-1 px-2 sidebar-label'><small>Profile</small></label>
        <Dropdown title={ 'Profile' } collapse={ 'profile-collapse' } submenus={ ProfileSubMenus } />
      </>


    </ul>
  </div>
  )
}
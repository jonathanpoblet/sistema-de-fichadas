import { useEffect } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderResponsiveButton } from './HeaderResponsiveButton';
import { HeaderMenu }  from './HeaderMenu';

import './header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {

  useEffect(() => {
    document.getElementsByClassName('navbar-collapse')[0].classList.remove('show');
    document.getElementsByClassName('nav-menu-button')[0].classList.remove('show');
  }, [useLocation()])
  

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <HeaderLogo />
          <HeaderResponsiveButton />
          <HeaderMenu />
        </div>
      </nav>
    </header>
  )
}

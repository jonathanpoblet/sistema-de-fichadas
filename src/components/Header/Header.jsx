import { HeaderLogo } from './HeaderLogo';
import { HeaderResponsiveButton } from './HeaderResponsiveButton';
import { HeaderMenu }  from './HeaderMenu';

import './header.css';

export default function Header() {
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

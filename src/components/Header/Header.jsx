import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
        <Link to='../'>
          <img className='nav-logo' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='logo' />
            {/* <img className='nav-logo' src='../../../public/assets/logo.png' alt='logo' /> */}
        </Link>
        </div>
      </nav>
    </header>
  )
}

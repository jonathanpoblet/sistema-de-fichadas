import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import './header.css';
import Li from './Li';

export default function Header() {
  return (
    <header>

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to='../'>
      <img className='nav-logo' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='logo' />
    </Link>
    <button className="navbar-toggler text-light nav-menu-button btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineMenu className="navbar-toggler-icon text-light nav-menu-button-icon"></AiOutlineMenu>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Li url='../' title='Inicio'>
          <AiFillHome className='text-light nav-li-icon' />
        </Li>

        <Li url='../perfil' title='Perfil'>
          <BsFillPersonFill className='text-light nav-li-icon' />
        </Li>

        <li className="nav-item dropdown px-1  nav-li">
          <a className="nav-link dropdown-toggle text-light px-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu nav-dropdown-list" aria-labelledby="navbarDropdown">
            <li className="nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown">
              <AiFillHome  className='text-light nav-li-icon' />
              <Link to='../' className="dropdown-item text-light ps-1 nav-dropdown-list-item" href="#">Action</Link>
            </li>
            <li className="nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown">
              <AiFillHome  className='text-light nav-li-icon' />
              <Link to='../' className="dropdown-item text-light ps-1 nav-dropdown-list-item" href="#">Action</Link>
            </li>
            <li className="nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown">
              <AiFillHome  className='text-light nav-li-icon' />
              <Link to='../' className="dropdown-item text-light ps-1 nav-dropdown-list-item" href="#">Action</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

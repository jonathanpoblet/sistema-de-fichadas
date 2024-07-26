import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.css';

export default function Header() {
  const img = useSelector(state => state.user.info.img);
  const navigate = useNavigate();

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link to='../'>
            <img className='nav-logo' src='../assets/Companies/grupo-taraborelli2.png' alt='logo' />
          </Link>
          <div className='btn-group dropstart'>
            <img
              type='button'
              className='nav-user rounded'
              src={img}
              alt='user'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            />
            <ul className='dropdown-menu dropdown-menu-dark'>
              <li>
                <Link className='dropdown-item' to='/perfil'>
                  Perfil
                </Link>
              </li>
              <li style={{ cursor: 'pointer' }} onClick={() => navigate('../')}>
                <a className='dropdown-item'>Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

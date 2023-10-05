import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import './header.css';

export default function Header() {

  const img = useSelector(state => state.auth.user.img);
  const navigate = useNavigate();

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link to='../'>
            <img className='nav-logo' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='logo' />
              {/* <img className='nav-logo' src='../../../public/assets/logo.png' alt='logo' /> */}
          </Link>
          <div class="btn-group dropstart">
          <img 
            type="button"
            className='nav-user' 
            src={ img } 
            alt='user'
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li style={{cursor: 'pointer'}} onClick={() => navigate('../') }><a className="dropdown-item" >Logout</a></li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

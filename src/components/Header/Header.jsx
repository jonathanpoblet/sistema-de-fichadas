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
          <img 
            className='nav-user' 
            src={ img } 
            alt='user'
            onClick={() => {
              Swal.fire({
                title: 'Profile or Logout?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Profile',
                denyButtonText: `Logout`,
                customClass: {
                  popup: 'swal2-theme-dark',
                  confirmButton: 'swal2-confirm',
                  denyButton: 'swal2-deny'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/profile');
                } else if (result.isDenied) {
                  Swal.fire({
                    customClass: {
                      popup: 'swal2-theme-dark',
                      confirmButton: 'swal2-confirm',
                      denyButton: 'swal2-deny'
                    },
                    title: 'Logout successfully'
                  });
                  setTimeout(() => {
                    location.reload();
                  }, 1500);
                }
              });
            }} 
          />
        </div>
      </nav>
    </header>
  )
}

import { Link } from 'react-router-dom';

export function HeaderLogo() {
  return (
    <Link to='../'>
        <img className='nav-logo' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='logo' />
    </Link>
  )
}

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function HeaderLi({ children, url, title }) {

  const navigate = useNavigate()

  return (
    <li className='nav-item d-flex align-items-center px-1 nav-li' onClick={() => navigate(url)}>
        { children }
        <Link to='#' className='nav-link  text-light ps-1' aria-current='page' href='#'>
            { title }
        </Link>
    </li>
  )
}

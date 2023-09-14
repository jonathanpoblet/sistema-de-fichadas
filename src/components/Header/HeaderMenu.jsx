import { HeaderLi } from './HeaderLi';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function HeaderMenu() {
    
    return (
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <HeaderLi url='/' title='Home'>
                    <AiFillHome className='text-light nav-li-icon' />
                </HeaderLi>

                <HeaderLi url='/profile' title='Profile'>
                    <BsFillPersonFill className='text-light nav-li-icon' />
                </HeaderLi>

                <li className='nav-item dropdown px-1 nav-li'>
                    <a id='navbarDropdown' className='nav-link dropdown-toggle text-light px-1' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        Dropdown
                    </a>
                    <ul aria-labelledby='navbarDropdown' className='dropdown-menu nav-dropdown-list' >
                        <li className='nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown'>
                        <AiFillHome  className='text-light nav-li-icon' />
                        <Link to='../' className='dropdown-item text-light ps-1 nav-dropdown-list-item' href='#'>Action</Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown'>
                        <AiFillHome  className='text-light nav-li-icon' />
                        <Link to='../' className='dropdown-item text-light ps-1 nav-dropdown-list-item' href='#'>Action</Link>
                        </li>
                        <li className='nav-item d-flex align-items-center px-1 nav-li nav-li-dropdown'>
                        <AiFillHome  className='text-light nav-li-icon' />
                        <Link to='../' className='dropdown-item text-light ps-1 nav-dropdown-list-item' href='#'>Action</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

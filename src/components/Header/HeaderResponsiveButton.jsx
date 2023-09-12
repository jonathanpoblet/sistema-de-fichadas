import { AiOutlineMenu } from 'react-icons/ai';

export function HeaderResponsiveButton() {
  return (
    <button className='navbar-toggler text-light nav-menu-button btn-sm' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <AiOutlineMenu className='navbar-toggler-icon text-light nav-menu-button-icon'></AiOutlineMenu>
    </button>
  )
}

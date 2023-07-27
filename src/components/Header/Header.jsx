import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidDownArrow } from 'react-icons/bi';

import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
        <img className='header-left-img' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='Grupo Taraborelli'/>
      </div>
      <div className='header-container'>
        <div className='header-container-left'>
          <AiOutlineMenu className='header-container-left-icon' />
        </div>
        <div className='header-container-right'>
          <p className='header-container-right-name'>Jonathan Alexander Poblet</p>
          <BiSolidDownArrow className='header-container-right-icon' />
        </div>
      </div>
    </header>
  )
}

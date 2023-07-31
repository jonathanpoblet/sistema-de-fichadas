import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidDownArrow } from 'react-icons/bi';

import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setResponsive } from '../../app/state/navigationSlice';

export default function Header() {

  const responsive = useSelector(state => state.navigation.responsive)
  const dispatch = useDispatch();


  return (
    <header className='header'>
      <div className='header-left'>
        <img className='header-left-img' src='http://www.grupotaraborelli.com/img/logo-i.png' alt='Grupo Taraborelli'/>
      </div>
      <div className='header-container'>
        <div className='header-container-left' onClick={async() => dispatch(setResponsive(!responsive))}>
          <AiOutlineMenu 
            className='header-container-left-icon'
          />
        </div>
        <div className='header-container-right'>
          <p className='header-container-right-name'>Jonathan Alexander Poblet</p>
          <BiSolidDownArrow className='header-container-right-icon' />
        </div>
      </div>
    </header>
  )
}

import { AiOutlineMenu } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { setResponsive } from '../../app/state/navigationSlice';

import './header.css';

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
        <div className='header-container-right' onClick={() => window.location.href = `http://localhost:5173/perfil`}>
          <p className='header-container-right-name'>Jonathan Alexander Poblet</p>
        </div>
      </div>
    </header>
  )
}

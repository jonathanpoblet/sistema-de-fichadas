import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setResponsive } from '../../app/state/navigationSlice';
import ProfileModal from '../ProfileModal/ProfileModal';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidDownArrow, BiSolidLeftArrow } from 'react-icons/bi';
import { setVisibleModalProfile } from '../../app/state/globalSlice';
import './header.css';

export default function Header() {

  const visibleModalProfile = useSelector(state => state.global.visibleModalProfile)

  const responsive = useSelector(state => state.navigation.responsive);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <header className='header'>
        <div className='header-left'>
          <img 
            className='header-left-img' 
            src='http://www.grupotaraborelli.com/img/logo-i.png' 
            alt='Grupo Taraborelli'
            onClick={() => {
              dispatch(setVisibleModalProfile(false))
              navigate('../')
            }}
          />
        </div>
        <div className='header-container'>
          <div style={window.innerHeight < 500 ? {display: 'none'} : {display: 'flex'}} className='header-container-left' onClick={async() => dispatch(setResponsive(!responsive))}>
            <AiOutlineMenu 
              className='header-container-left-icon'
            />
          </div>
          <div className='header-container-right' onClick={() => dispatch(setVisibleModalProfile(!visibleModalProfile))}>
            <p className='header-container-right-name'>{ user.name } { user.lastname }</p>
            {
              !visibleModalProfile ? 
              <BiSolidDownArrow className='header-container-right-icon'/> 
              :
              <BiSolidLeftArrow className='header-container-right-icon'/>
            }
          </div>
        </div>
      </header>
      {
        visibleModalProfile && 
        <ProfileModal
          name={ user.name }
          position={ user.position }
          file={ user.file }
        />
      }
    </>
  )
}

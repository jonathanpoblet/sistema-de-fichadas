import React from 'react';
import './profileModal.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVisibleModalProfile } from '../../app/state/globalSlice';

export default function ProfileModal({name, position, file}) {

  const dispatch = useDispatch()

  return (
    <div className='profile-modal'>
        <div className='profile-modal-container'>
        <div className="profile-modal-container-body">
            <h4>{ name }</h4>
            <h4>{ position }</h4>
            <h5>Legajo N° { file }</h5>
        </div>
        <div className='profile-modal-container-footer'>
            <Link className='profile-modal-container-footer-button' to='/perfil' onClick={() => dispatch(setVisibleModalProfile(false))}>
                Perfil
            </Link>
            <button className='profile-modal-container-footer-button'>Cerrar Sesión</button>
        </div>
        </div>
    </div>
  )
}

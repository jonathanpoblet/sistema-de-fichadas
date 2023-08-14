import React from 'react';
import './addClient.css';

export default function AddClient() {

  return (
    <main className='add-client'>
        <section className='add-client-section'>
          <h1 className='add-client-section-title'>Agregar Cliente</h1>
          <form className='add-client-section-form'>
            <div className='add-client-section-form-container'>
              <label htmlFor='name' className='add-client-section-form-container-label'>Nombre</label>
              <input name='name' className='add-client-section-form-container-input' type='text' />
            </div>
            <div className='add-client-section-form-container'>
              <label htmlFor='lastname' className='add-client-section-form-container-label'>Apellido</label>
              <input name='lastname' className='add-client-section-form-container-input' type='text' />
            </div>
            <div className='add-client-section-form-container'>
              <label htmlFor='age' className='add-client-section-form-container-label'>Edad</label>
              <input name='age' className='add-client-section-form-container-input' type='number' />
            </div>
            <div className='add-client-section-form-container'>
              <label htmlFor='nationatily' className='add-client-section-form-container-label'>Nacionalidad</label>
              <input name='nationatily' className='add-client-section-form-container-input' type='text' />
            </div>
            <div className='add-client-section-form-container'>
              <label htmlFor='company' className='add-client-section-form-container-label'>Empresa</label>
              <input name='company' className='add-client-section-form-container-input' type='text' />
            </div>
            <div className='add-client-section-form-container'>
              <label htmlFor='job' className='add-client-section-form-container-label'>Profesión</label>
              <input name='job' className='add-client-section-form-container-input' type='text' />
            </div>
            <button type='button' className='add-client-section-form-button'>Agregar Cliente</button>
          </form>
        </section>
    </main>
  )
}

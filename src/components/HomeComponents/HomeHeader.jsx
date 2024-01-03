import React from 'react';

export default function HomeHeader({ user }) {

  const date = {
    day: new Date().toLocaleDateString('es-ES', { weekday: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleDateString('es-ES', { weekday: 'long' }).slice(1),
    number: new Date().getDate(),
    month: new Date().toLocaleDateString('es-ES', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleDateString('es-ES', { month: 'long' }).slice(1)
  }

  return (
    <section className='d-flex align-items-center p-4 home-header-container mb-4 bg-light-subtle border border-2 rounded'>
      <img className='rounded-circle mx-4 shadow-p border-1' src='../../../public/assets/user.png' alt='User IMG' style={{ width: '80px' }} />
      <div className=' '>
        <h3>Hola, <b style={{ color: '#051c2e' }}>{user.name}</b></h3>
        <h4 className='my-0'>Hoy es <b style={{ color: '#051c2e' }}>{date.day}</b>, <b style={{ color: '#051c2e' }}>{date.number}</b> de <b style={{ color: '#051c2e' }}>{date.month}</b></h4>
      </div>
    </section>
  )
}

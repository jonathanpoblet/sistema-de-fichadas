import React from 'react';

export function HomeHeader({ user }) {

  const day = {
    name: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    number: new Date().getDate(),
    year: new Date().toLocaleDateString('en-US', { month: 'long' })
  }

  return (
    <section className='d-flex align-items-center p-3 bg-general'>
        <img className='rounded-circle mx-4 shadow-p border-1' src='../../../public/assets/user.png' alt='User IMG' style={{width: '80px'}} />
        <div className=' '>
            <h2>Hi, <b style={{color: '#051c2e'}}>{ user.name }</b></h2>
            <h3 className='my-0'>Today is <b style={{color: '#051c2e'}}>{ day.name }</b>, <b style={{color: '#051c2e'}}>{ day.number }</b> of <b style={{color: '#051c2e'}}>{ day.year }</b></h3>
        </div>
    </section>
  )
}

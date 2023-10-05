import HomeSubtitle from './HomeSubtitle';

export default function HomeStadistics({ stadistics }) {
  return (
    <section>
        <HomeSubtitle subtitle='DINERO' />

        <article className='d-flex justify-content-between align-items-center home-stadistidcs-container'>
            <div className='col bg-general mt-4 me-2'>
                <p className='text-center m-5 mb-3 fs-2 fw-semibold'>${ stadistics.incomes }</p>
                <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>Ingresos</p>
            </div>
            <div className='col bg-general mt-4 ms-3'>
                <p className='text-center m-5 mb-3 fs-2 fw-semibold'>${ stadistics.expenses }</p>
                <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>Gastos</p>
            </div>
        </article>
        
        <HomeSubtitle subtitle='PERSONAS' />

        <article className='d-flex justify-content-between align-items-center home-stadistidcs-container'>
            <div className='col bg-general mt-4 me-2'>
                <p className='text-center m-5 mb-3 fs-2 fw-semibold'>{ stadistics.clients }</p>
                <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>Clientes</p>
            </div>
            <div className='col bg-general mt-4 ms-3'>
                <p className='text-center m-5 mb-3 fs-2 fw-semibold'>{ stadistics.staff }</p>
                <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>Personal</p>
            </div>
        </article>
    </section>
  )
}

import HomeSubtitle from './HomeSubtitle';

export default function HomeStadistics({ stadistics }) {
  return (
    <article>
      <HomeSubtitle subtitle='FINANZAS' />

      <div className='d-flex justify-content-between align-items-center home-stadistics-container'>
        <div className='col w-100 rounded me-lg-2 my-4 p-4 border border-2 bg-light-subtle'>
          <p className='text-center m-5 mb-3 fs-2 fw-semibold'>${stadistics.incomes}</p>
          <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>
            Ingresos
          </p>
        </div>
        <div className='col w-100 rounded mt-sm-0 mt-md-0 mt-lg-4 ms-lg-2 my-4 p-4 border border-2 bg-light-subtle'>
          <p className='text-center m-5 mb-3 fs-2 fw-semibold'>${stadistics.expenses}</p>
          <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>
            Gastos
          </p>
        </div>
      </div>

      <HomeSubtitle subtitle='PERSONAL' />

      <div className='d-flex justify-content-between align-items-center home-stadistics-container'>
        <div className='col w-100 rounded me-lg-2 my-4 p-4 border border-2 bg-light-subtle'>
          <p className='text-center m-5 mb-3 fs-2 fw-semibold'>{stadistics.clients}</p>
          <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>
            Clientes
          </p>
        </div>
        <div className='col w-100 rounded mt-sm-0 mt-md-0 mt-lg-4 ms-lg-2 my-4 p-4 border border-2 bg-light-subtle'>
          <p className='text-center m-5 mb-3 fs-2 fw-semibold'>{stadistics.staff}</p>
          <p className='text-center m-5 mt-0 fs-4' style={{ color: '#051c2e' }}>
            Empleados
          </p>
        </div>
      </div>
    </article>
  );
}

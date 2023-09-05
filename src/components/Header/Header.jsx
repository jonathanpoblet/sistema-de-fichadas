import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
        <img 
          className='header-left-img' 
          src='http://www.grupotaraborelli.com/img/logo-i.png' 
          alt='Grupo Taraborelli'
          onClick={() => window.location.href = '../' }
        />
      </div>

    </header>
  )
}

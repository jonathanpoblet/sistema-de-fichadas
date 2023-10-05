import HomeHeader from '../../components/HomeComponents/HomeHeader';
import HomeStadistics from '../../components/HomeComponents/HomeStadistics';

import './home.css';

export default function Home({ user }) {

  const stadistics = {
    incomes: '820.100' ,
    expenses: '340.220',
    clients: '520',
    staff: '13',
  }

  return (
    <main className='home fade-in p-4'>
      <HomeHeader user={ user } />
      <HomeStadistics  stadistics={ stadistics } />
    </main>
  )
}

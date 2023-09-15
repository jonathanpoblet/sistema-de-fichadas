import { HomeHeader } from '../../components/HomeComponents/HomeHeader';
import './home.css';

export default function Home({ user }) {
  return (
    <main className='home fade-in'>
      <HomeHeader user={ user } day />
    </main>
  )
}

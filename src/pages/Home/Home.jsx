import { HomeHeader } from '../../components/HomeComponents/HomeHeader';
import './home.css';

export default function Home({ user }) {
  return (
    <main className='home'>
      <HomeHeader user={ user } day />
    </main>
  )
}

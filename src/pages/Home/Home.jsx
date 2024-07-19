import HomeHeader from '../../components/HomeComponents/HomeHeader/HomeHeader';
import HomeRedirects from '../../components/HomeComponents/HomeRedirects/HomeRedirects';

import './home.css';

export default function Home({ user }) {
  return (
    <section className='home fade-in'>
      <HomeHeader user={user} />
      <HomeRedirects />
      <img className='home-banner my-4' src='../assets/Home/banner.jpg' />
    </section>
  );
}

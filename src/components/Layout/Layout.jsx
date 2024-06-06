import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.css';

export default function Layout() {
  return (
    <div className='fade-in'>
      <Header />
      <main className='sidebar-main'>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

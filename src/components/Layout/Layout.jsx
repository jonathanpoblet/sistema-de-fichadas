import Header from "../Header/Header";

import './layout.css';

export default function Layout({ children }) {

  return (
    <div className='fade-in'>
      <Header />
      <div className='sidebar-main'>
        { children }
      </div>
    </div>
  );
}
import Header from "../Header/Header";

import Sidebar from "../Sidebar/Sidebar";

import './layout.css';

export default function Layout({ children }) {

  return (
    <div className='fade-in'>
      <Header />
      <Sidebar />
      {/* <div className='sidebar-main'>
        { children }
      </div> */}
    </div>
  );
}
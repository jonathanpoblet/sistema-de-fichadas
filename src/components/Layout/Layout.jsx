import Header from "../Header/Header";

import Sidebar from "../Sidebar/Sidebar";

import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className='fade-in'>
      <Header />
      <div className='sidebar-main'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import { useSelector } from 'react-redux';


import './layout.css';

export default function Layout({ children }) {

  const responsive = useSelector(state => state.navigation.responsive);

  return (
    <div className="fade-in">
      <Header />
      <div className="sidebar-main">
        <Sidebar/>
        {children}
      </div>
    </div>
  );
}
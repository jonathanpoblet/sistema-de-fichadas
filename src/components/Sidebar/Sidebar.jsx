import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBIcon,
} from 'cdbreact';

import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <CDBSidebar
      toggled={true}
      textColor='#fff'
      maxWidth='220px'
      minWidth='100px'
      className='sidebar'
    >
      <CDBSidebarHeader prefix={<CDBIcon icon='bars' size='sm' />}>Menu</CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to='/' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='home'>Inicio</CDBSidebarMenuItem>
          </Link>
          <Link to='/fichadas' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='credit-card'>Fichero</CDBSidebarMenuItem>
          </Link>
          <Link to='/empleados' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='users'>Empleados</CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;

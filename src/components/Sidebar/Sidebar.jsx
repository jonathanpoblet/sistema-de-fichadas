import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu, CDBIcon } from 'cdbreact';

import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <CDBSidebar toggled={true} textColor='#fff' maxWidth='220px' minWidth='100px' className='sidebar'>
      <CDBSidebarHeader prefix={<CDBIcon icon='bars' size='sm' />}>Menu</CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to='/' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='home'>Inicio</CDBSidebarMenuItem>
          </Link>
          <Link to='/fichar' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='credit-card'>Fichar</CDBSidebarMenuItem>
          </Link>
          <Link to='/personal' style={{ width: '100' }}>
            <CDBSidebarMenuItem icon='users'>Personal</CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;

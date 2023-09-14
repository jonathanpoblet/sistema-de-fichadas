import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBIcon,
  } from 'cdbreact';

import './sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
  
  const Sidebar = () => {
    return (
            <CDBSidebar textColor="#fff" backgroundColor="#051c2e" minWidth='70px' className='sidebar'>
                <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="sm" />}>
                    Menu
                </CDBSidebarHeader>
    
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <Link to='/' style={{width: '100'}}>
                            <CDBSidebarMenuItem
                            icon="th-large"
                            >
                                Home
                            </CDBSidebarMenuItem>
                        </Link>
                        <Link to='/profile' style={{width: '100'}}>
                            <CDBSidebarMenuItem
                            icon="sticky-note"
                            >
                                Profile
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
    );
  };
  export default Sidebar;
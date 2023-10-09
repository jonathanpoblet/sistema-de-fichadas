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
            <CDBSidebar textColor="#fff" backgroundColor="#051c2e" minWidth='70px' className='sidebar'>
                <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="sm" />}>
                    Menu
                </CDBSidebarHeader>
    
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <Link to='/' style={{width: '100'}}>
                            <CDBSidebarMenuItem
                            icon="home"
                            >
                                Inicio
                            </CDBSidebarMenuItem>
                        </Link>
                        <Link to='/perfil' style={{width: '100'}}>
                            <CDBSidebarMenuItem
                            icon="user"
                            >
                                Perfil
                            </CDBSidebarMenuItem>
                        </Link>
                        <Link to='/inventario' style={{width: '100'}}>
                            <CDBSidebarMenuItem
                            icon="shopping-bag"
                            >
                                Inventario
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
    );
};

export default Sidebar;
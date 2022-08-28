import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActionCreators';

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
      <CDBSidebar style={{height: '100vh', position: 'sticky', top: 0 }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Mercado</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink to='/items' exact>
              <CDBSidebarMenuItem icon="fa fa-home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/create-item'>
              <CDBSidebarMenuItem icon="fa fa-plus-circle">Create Item</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/profile'>
              <CDBSidebarMenuItem icon="fa fa-user">Profile</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
            <CDBSidebarMenuItem icon="fa fa-lock" onClick={() => dispatch(logout())}>Log Out</CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;
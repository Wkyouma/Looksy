import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="layout-header">
       <Nav></Nav>
      </header>
      
      <main className="layout-main">
       
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

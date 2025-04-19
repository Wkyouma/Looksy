import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="">
      <header className="layout-header">
       <Nav></Nav>
      </header>
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

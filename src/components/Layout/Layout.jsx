import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 mt-14 md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;

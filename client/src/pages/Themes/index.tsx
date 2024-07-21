import React from 'react';
import { Outlet } from 'react-router-dom';

const Themes = () => {
  return (
    <div className='pt-16'>
      <Outlet />
    </div>
  );
}

export default Themes;

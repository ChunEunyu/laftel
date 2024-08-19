import React from 'react';
import { Outlet } from 'react-router-dom';

const Membership = () => {
  return (
    <div className='pt-16'>
      <Outlet />
    </div>
  );
}

export default Membership;

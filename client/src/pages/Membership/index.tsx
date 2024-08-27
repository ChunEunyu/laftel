import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Membership = () => {
  const auth = sessionStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/membership/landing");
    } else {
      navigate("/membership/subscribed");
    }

  }, [auth, navigate]);
  
  return (
    <div className='pt-16'>
      <Outlet />
    </div>
  );
}

export default Membership;

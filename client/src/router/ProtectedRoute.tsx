import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    if (!auth) {
      navigate("/auth/login");
    } 

  }, [auth, navigate]);

  if (!auth) {
    return null; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;

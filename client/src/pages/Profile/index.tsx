import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const isLoggedIn = sessionStorage.getItem('auth');
  const user = isLoggedIn ? JSON.parse(isLoggedIn) : null;
  
  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
      <Link to='/'>
        <img 
          className='w-60 h-60 rounded-full mb-5 hover:border-white hover:border-8 transition-all duration-300' 
          src={user.img} 
          alt='' 
        />
      </Link>
      <p className='text-white text-2xl font-bold'>{user.name}</p>
    </div>
  );
}

import React from 'react';
import AuthBox from './AuthBox';
import style from './Auth.module.css';

export default function AuthMain() {
  return (
    <div className='bg-black w-full h-screen'>
      <AuthBox />
      <div className='flex flex-col'>
        <div className='bg-black w-full h-4' />
        <div className={style.bg0} />
        <div className='bg-black w-full h-4' />
      </div>
    </div>
  );
}

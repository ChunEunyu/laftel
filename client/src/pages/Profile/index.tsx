import React from 'react';
import profile1 from '@/assets/profile/profile1.png';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
      <Link to='/'>
        <img className='w-60 h-60 rounded-full mb-5' src={profile1} alt='' />
      </Link>
      <p className='text-white text-2xl font-bold'>닉네임</p>
    </div>
  );
}

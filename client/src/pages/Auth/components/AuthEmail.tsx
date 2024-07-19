import { Logo } from '@/assets/Logo';
import React from 'react';
import EmailBox from './EmailBox';

export default function AuthEmail() {
  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute top-32'>
        <Logo color='#816BFF' width={132} height={44} />
      </div>
      <EmailBox />
    </div>
  );
}

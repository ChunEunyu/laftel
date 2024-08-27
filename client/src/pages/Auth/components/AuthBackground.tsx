import { Logo } from '@/assets/logo/Logo';
import React, { ReactNode } from 'react';

export default function AuthBackground({ children }: { children: ReactNode}) {
  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute top-32'>
        <Logo color='#816BFF' width={132} height={44} />
      </div>
      { children }
    </div>
  );
}

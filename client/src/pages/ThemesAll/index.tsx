import React from 'react';
import ThemesCard from './components/ThemesCard';

export default function ThemesAll() {
  return (
    <div className='w-full max-w-[1232px] px-6 mx-auto'>
      <p className='text-2xl font-semibold mt-3 mb-3'>테마 추천</p>
      <div className='grid grid-cols-3 gap-x-4 gap-y-8 mb-12'>
        <ThemesCard />
        <ThemesCard />
        <ThemesCard />
        <ThemesCard />
      </div>
    </div>
  );
}

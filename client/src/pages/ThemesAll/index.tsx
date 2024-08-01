import React from 'react';
import ThemesCard from './components/ThemesCard';
import { useLoaderData } from 'react-router-dom';
import { Themes as ThemesAllProps } from '@/types/recommends-themes';

export default function ThemesAll() {
  const { themesAll } = useLoaderData() as { themesAll: ThemesAllProps[] };
  
  return (
    <div className='w-full max-w-[1232px] px-6 mx-auto'>
      <p className='text-2xl font-semibold mt-3 mb-3'>테마 추천</p>
      <div className='grid grid-cols-3 gap-x-4 gap-y-8 mb-12'>
        {themesAll.map((item) => {
          return (
            <ThemesCard key={item.id} data={item} />
          )
        })}
      </div>
    </div>
  );
}

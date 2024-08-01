import React from 'react';
import DetailCard from './components/DetailCard';
import { useLoaderData } from 'react-router-dom';
import { Themes } from '@/types/recommends-themes';

export default function ThemeDetail() {
  const { themesById: data } = useLoaderData() as { themesById : Themes };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className='w-full bg-smoked-black h-[283px]'>
        <div 
          className='absolute top-16 right-0 w-[630px] max-w-full h-[283px] aspect-[780/440] object-cover'
          style={{
            background: `
              linear-gradient(
                to left,
                rgba(80, 80, 80, 0) 10%,
                rgba(80, 80, 80, 0) 25%,
                rgba(80, 80, 80, 0) 50%,
                rgba(80, 80, 80, 0.5) 75%,
                rgba(80, 80, 80, 1) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(25, 27, 42, 0) 10%,
                rgba(25, 27, 42, 0) 25%,
                rgba(25, 27, 42, 0) 50%,
                rgba(25, 27, 42, 0.25) 75%,
                rgba(25, 27, 42, 1) 100%
              ),
              url(${data.theme_item_list[1].item.images[1].img_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            opacity: 0.5,
          }}
        />
        <div className='relative flex flex-col lg:mx-auto justify-center items-start max-lg:px-6 h-full w-[calc(70vw)] max-w-[1180px]'>
          <p className='text-white text-3xl font-bold mb-4'>
            {data.title}
          </p>
          <p className='text-white font-semibold'>
            {data.content}
          </p>
        </div>
      </div>
      <div className='max-w-[1232px] w-full my-4 mx-auto mt-4 mr-auto mb-4 ml-auto'>
        {data.theme_item_list.map((item) => (
          <DetailCard data={item} />
        ))}
      </div>
    </div>
  );
}

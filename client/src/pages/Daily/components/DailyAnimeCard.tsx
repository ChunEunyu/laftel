import React from 'react';
import { Daily } from '@/types/daily';
import { useAppDispatch } from '@/app/hooks';
import { toggle, animeId } from '@/features/modal/animeModalSlice';


const DailyAnimeCard = ({ data }: { data: Daily }) => {
  const { id, name, img }: { id: number, name: string, img: string } = data;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggle());
    dispatch(animeId(id));
  }

  return (
    <div
      onClick={handleClick} 
      className='px-2 my-1 2xl:h-40 xl:h-32 lg:h-28 md:h-44 sm:h-40 max-sm:h-36'
    >
      <img 
        className="object-cover rounded-md w-full h-[75%]"
        src={img}
        alt=""
      />
      <p 
        className='text-smoked-black overflow-hidden overflow-ellipsis whitespace-normal xl:text-[1.03rem] lg:text-[0.9rem] md:text-[0.85rem] sm:text-[0.8rem] max-sm:text-[0.75rem]'
        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}
      >
        {name}
      </p>
    </div>
  );
}

export default DailyAnimeCard;

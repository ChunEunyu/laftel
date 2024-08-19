import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useAppSelector } from '@/app/hooks';
import { selectQuery } from '@/features/finder/finderSlice';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { getDiscover } from '@/apis/getAPIs';
import Filter from './components/Filter';
import AnimeCard from '@/components/AnimeCard';
import { Item } from '@/types/item';


const Finder = () => {
  const isMobile = useScreenWidth();
  const q = useAppSelector(selectQuery);

  const [data, setData] = useState<null | Item[]>(null);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before data fetch
      const discover = await getDiscover(q);
      setData(discover);
      setLoading(false); // Set loading to false after data fetch
    };

    fetchData();
  }, [q]);
  
  return (
    <div className='w-full h-full overflow-y-hidden pt-16'>
      <p className='fixed max-lg:px-4 lg:px-10 text-3xl font-semibold lg:mb-5 h-24 flex items-center'>
        태그검색
      </p>
      <div className={clsx('w-full flex m-0 p-0 fixed top-36', { 'flex-col': isMobile, 'flex-row': !isMobile })}>
        <div className={clsx({'': !isMobile})}>
          <Filter />
        </div>
        <div className={clsx({'overflow-y-auto': !isMobile})}>
          <p className='max-lg:px-4 max-lg:py-1 max-lg:text-sm font-semibold text-smoked-black'>
            총 {data?.length}개의 작품이 검색되었어요!
          </p>
          <div className='lg:hidden w-full h-[1px] bg-border-1 mt-3 mb-3' />
          {loading ? (
            <>loading...</>
          ) : (
            <div className='lg:pt-4 max-lg:pt-1 px-2'>
              <ul className='p-0 m-0 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 gap-2 lg:h-[calc(100vh-13rem)] max-lg:h-[calc(100vh-18rem)] overflow-y-auto'>
                  {data?.map((item, index) => (
                    <li>
                      <AnimeCard key={index} data={item} />
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Finder;

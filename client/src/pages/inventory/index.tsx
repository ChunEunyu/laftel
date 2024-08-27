import React, { useState } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { motion } from "framer-motion";
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getRatingList, getReviewList, getWatchlist, getWishlist } from '@/apis/postApis';
import AnimeCard from '@/components/AnimeCard';
import { Item } from '@/types/item';
import { Review } from '@/types/review';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

type Tabs = '보고싶다' | '보는중' | '별점' | '리뷰';

const Inventory = () => {
  const isMobile = useScreenWidth();
  const data = sessionStorage.getItem('auth');
  const user = JSON.parse(data as string);

  const { data: wishlist }: UseQueryResult<Item[]> = useQuery({
    queryKey: ['wishlist'],
    queryFn: () => getWishlist(),
  });

  const { data: watchlist }: UseQueryResult<Item[]> = useQuery({
    queryKey: ['watchlist'],
    queryFn: () => getWatchlist(),
  });

  const { data: ratinglist }: UseQueryResult<Item[]> = useQuery({
    queryKey: ['ratinglist'],
    queryFn: () => getRatingList(),
  });

  const { data: reviews }: UseQueryResult<Review[]> = useQuery({
    queryKey: ['reviews'],
    queryFn: () => getReviewList(),
  });

  const tabs:Tabs[] = ['보고싶다', '보는중', '별점', '리뷰']; 
  const [selectedTab, setSelectedTab] = useState<Tabs>(tabs[0]); 

  const counts = [
    wishlist?.length ?? 0, 
    watchlist?.length ?? 0,
    ratinglist?.length ?? 0, 
    reviews?.length ?? 0,
  ]
  const [count, setCount] = useState<number[]>(counts);

  return (
    <div className='w-full h-screen pt-16 bg-bg-gray'>
      <div className='flex justify-center pt-3 gap-5'>
        { !isMobile &&
          <div className='w-[24rem] h-[22rem] bg-white px-5 pt-5 pb-12 rounded-md border-[1px] border-border-1'>
            <p className='font-bold tracking-tighter pb-6'>
              프로필 정보
            </p>
            <div className='flex flex-col justify-center items-center gap-6'>
              <img
                className='w-24 h-24 rounded-full' 
                src={user.img} 
                alt='' 
              />
              <p className='font-extrabold'>
                {user.name}
              </p>
              <div className='flex flex-row gap-9'>
              {tabs.map((tab, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <p className='font-extrabold text-2xl'>{count[index]}</p>
                  <p className='font-extrabold text-smoked-black text-sm'>{tab}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        }
        <div className='lg:w-[49rem] lg:h-[49.5rem] max-lg:w-full max-lg:min-h-[48rem] max-lg:mx-2 px-5 pt-5 bg-white border-[1px] border-border-1'>
          <p className='text-[1.05rem] font-extrabold tracking-tighter pb-3'>내 활동</p>
          <ul className='flex flex-row cursor-pointer text-smoked-black text-md font-extrabold tracking-tighter gap-8'>
            {tabs.map((item, index) => {
              return (
                <li 
                  key={index}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                  {item === selectedTab ? (
                    <motion.div className="h-1 mt-1 bg-purple" layoutId="underline" />
                  ) : null}
                </li>
              )
            })}
          </ul>
          <div className='w-full h-[1px] bg-border-1' />
          <div className='pt-2'>
            { selectedTab === '보고싶다' && (
              <div className='px-1 pb-5'>
                <ul className='p-0 m-0 grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-2'>
                  {wishlist?.map((item, index) => (
                    <li className=''>
                      <AnimeCard key={index} data={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            { selectedTab === '보는중' && (
              <div className='px-1 pb-5'>
                <ul className='p-0 m-0 grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-2'>
                  {watchlist?.map((item, index) => (
                    <li className=''>
                      <AnimeCard key={index} data={item} />
                    </li>
                  ))}
                </ul>
            </div>
            )}
            { selectedTab === '별점' && (
              <div>
                <ul className='p-0 m-0 grid md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-2'>
                  {ratinglist?.map((item, index) => (
                    <li className=''>
                      <AnimeCard key={index} data={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            { selectedTab === '리뷰' && (
              <div className='mt-3'>
                {reviews?.map((item, index) => (
                  <div key={index} className='flex flex-col px-3 py-3 rounded-md gap-2 border-[1px] border-border-1'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='text-smoked-black'>{item.content}</p>
                    <p className='text-sm text-charcoal'>{dayjs(item.date).fromNow()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;

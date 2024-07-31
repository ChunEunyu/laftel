import React, { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector  } from '@/app/hooks';
import { toggle } from '@/features/modal/animeModalSlice';
import { selectId } from '@/features/modal/animeModalSlice';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getItemById } from '@/apis/getAPIs';
import { Item } from '@/types/item';
import { RxCross2 } from "react-icons/rx";
import { RiMore2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

export default function AnimeModal() {
  const isMobile = useScreenWidth();
  
  const id: number = useAppSelector(selectId);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggle());
  };

  const { data: detailed }: UseQueryResult<Item> = useQuery({
    queryKey: ['DetailedData', id],
    queryFn: () => getItemById(id),
    enabled: !!id,
  })

  return (
    <div>
      {isMobile? (
        <div className='fixed top-0 left-0 w-full h-full bg-white z-40'>
          <Content data={detailed} />
        </div>
      ) : (
        <div className='flex justify-center'>
          <div onClick={handleClick} className='fixed top-0 left-0 w-full h-full bg-background-dim-1 z-30' />
          <div 
            className='fixed z-40 top-4 bottom-4 overflow-y-auto rounded-sm'
            style={{ maxWidth: 'calc(-2rem + 100vw)'}}
          >
            <Content data={detailed} />
          </div>
        </div>
      )}
    </div>
  );
}

const Content = ({ data }: { data?: Item }) => {
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();

  const [expandedContent, setExpandedContent] = useState<boolean>(false);

  const handleExpandedToggle = () => {
    setExpandedContent(!expandedContent);
  }

  const img = data?.images[0]?.img_url;
  const genresS = data?.genres?.length ? 
                (data.genres.length > 1 ? data.genres.join('·') : data.genres.join()) 
                : '';

  return (
    <div className='relative max-w-full w-[67.5rem] h-full overflow-y-auto'>
      <div className='absolute top-0 left-0 right-0 w-full h-full'>
        <div className='relative top-0 left-0 right-0 bg-navy w-full min-h-[35.3125rem]'>
          <div 
            style={{
              background: `linear-gradient(
                to left,
                rgba(25, 27, 42, 0) 10%,
                rgba(25, 27, 42, 0) 25%,
                rgba(25, 27, 42, 0.25) 50%,
                rgba(25, 27, 42, 0.75) 75%,
                rgba(25, 27, 42, 1) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(25, 27, 42, 0) 10%,
                rgba(25, 27, 42, 0) 25%,
                rgba(25, 27, 42, 0) 50%,
                rgba(25, 27, 42, 0.25) 75%,
                rgba(25, 27, 42, 1) 100%
              ),
              url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center', // 추가하여 배경 이미지의 위치 조정
            }}
            className='absolute top-0 right-0 bottom-0 left-auto w-[48.75rem] max-w-full h-auto aspect-[780/440] object-cover opacity-50'
          />
          <div className='relative top-0 right-1 flex justify-end pt-6 pr-5 gap-2'>
            <BackgroundCircle>
              <RiMore2Fill className='w-7 h-7 text-white' />
            </BackgroundCircle>
            <div onClick={() => dispatch(toggle())}>
              <BackgroundCircle>
                <RxCross2 className='w-7 h-7 text-white' />
              </BackgroundCircle>
            </div>
          </div>
          <div className='flex-1 min-h-[29.125rem] flex flex-col justify-between select-none p-[3rem] pt-[3rem] pb-[2rem]'>
            <>
              { !isMobile && 
                <div className='absolute top-[7.5rem] right-[3.5rem]'>
                  <img 
                    className='relative object-cover border-none h-[16.6875rem] w-[12.5rem] rounded-[0.37625rem]' 
                    src={img} 
                    alt='' 
                  />
                  {data?.production? (
                    <p className='relative top-8 text-white text-sm'>
                      <span className='font-bold'>제작</span>&nbsp;&nbsp;
                      <span className='text-xs'>{data?.production}</span>
                    </p>
                  ) : ''} 
                  {data?.air_year_quarter? (
                    <p className='relative top-8 text-white text-sm'>
                      <span className='font-bold'>출시</span>&nbsp;&nbsp;
                      <span className='text-xs'>{data?.air_year_quarter}</span>
                    </p>
                  ): ''}
                </div>
              }
            </>
            <div className='relative max-w-[37.5rem] min-h-[11.4375rem] top-0 text-white'>
              <div className='top-0 w-[3.6rem] flex flex-row gap-1 bg-white bg-opacity-15 px-2 py-[0.4rem] rounded-md'>
                <FaStar className='w-[0.7rem] h-[0.7rem] mt-[5px]' />
                <p className='text-[0.88rem] font-bold tracking-widest'>
                  {data?.avg_rating}
                </p>
              </div>
              <p 
                className='relative top-3 text-4xl leading-relaxed font-extrabold '
                style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}
              >
                {data?.name}
              </p>
              <div className='relative top-6 text-[0.85rem] flex flex-row'>
                <p>{genresS}</p>
                <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                <p>{data?.medium}</p>
                <p>·</p>
                { data?.is_ending === false ? 
                  <p>방영중</p> : <p>완결</p>
                }
                <p>·</p>
                <p>{data?.content_rating}</p>
              </div>
              <div className='relative top-16 flex flex-row gap-6'>
                <div>
                  <FaPlus className='w-6 h-6 ml-3 mb-1 hover:bg-white hover:bg-opacity-10 hover:rounded-full cursor-pointer' />
                  <p className='text-sm'>보고싶다</p>
                </div>
                <div>
                  <FaRegEye className='w-6 h-6 ml-2 mb-1 hover:bg-white hover:bg-opacity-10 hover:rounded-full cursor-pointer' />
                  <p className='text-sm'>보는중</p>
                </div>
              </div>
              <div className='relative top-24'>
                <p className={`overflow-hidden ${expandedContent ? 'line-clamp-none' : 'line-clamp-2'}`}>
                  {data?.content}
                </p>
                <br />
                { expandedContent && (
                  <div className='flex flex-row gap-2'>
                    {data?.tags.map((item, index) => (
                      <p key={index} className='text-sm text-purple-2 bg-white bg-opacity-15 px-1 py-1 rounded-md'>
                        #{item}
                      </p>
                    ))}
                  </div>
                )}
                <br />
                <p onClick={handleExpandedToggle}>
                  { data?.content !== '' && (
                    <>
                      { expandedContent ? 
                        (
                          <div className='flex cursor-pointer'>
                            <span>접기</span>
                            <MdOutlineExpandMore className='w-6 h-6' />
                          </div>
                        ) : (
                          <div className='flex cursor-pointer'>
                            <span>더보기</span>
                            <MdOutlineExpandMore className='w-6 h-6' />
                          </div>
                      )}
                      <br />
                    </>
                  )}
                </p>
                <br />
              </div>
            </div>    
          </div>
          <br /><br />
        </div>
        <div className='relative bottom-0 left-0 w-full h-full bg-white px-10 py-8'>
          <div className='flex flex-row text-charcoal text-lg font-bold gap-10'>
            <button>사용자 평</button>
            <button>비슷한 작품</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BackgroundCircle = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-2 rounded-full bg-smoked-black bg-opacity-15'>
      {children}
    </div>
  )
}
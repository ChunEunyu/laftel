import React, { ReactNode, useState, useEffect } from 'react';
import dayjs from "dayjs";
import { authApi } from '@/apis';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectToggle, toggle } from '@/features/modal/animeModalSlice';
import { selectId } from '@/features/modal/animeModalSlice';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAnimeReviews, getItemById, getRelatedById } from '@/apis/getAPIs';
import { Item } from '@/types/item';
import { RxCross2 } from "react-icons/rx";
import { RiMore2Fill } from "react-icons/ri";
import { FaCheck, FaEye, FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { Related } from '@/types/related';
import AnimeCard from '@/components/AnimeCard';
import profile from '@/assets/profile/profile1.png';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { isInRatinglist, isInWatchlist, isInWishlist } from '@/apis/postApis';
import { Review } from '@/types/review';

export default function AnimeModal() {
  const navigate = useNavigate();
  const isMobile = useScreenWidth();
  const isLoggedIn = sessionStorage.getItem('auth');
  const id: number = useAppSelector(selectId);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggle());
    navigate(-1);
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

type Tabs = '사용자 평' | '비슷한 작품'

const Content = ({ data }: { data?: Item }) => {
  const isLoggedIn = sessionStorage.getItem('auth');
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();
  const id: number = useAppSelector(selectId);

  const { data: isInWish }: UseQueryResult<boolean> = useQuery({
    queryKey: ['inWishlist', id],
    queryFn: () => isInWishlist(id),
    enabled: !!id,
  });

  const { data: isInWatching }: UseQueryResult<boolean> = useQuery({
    queryKey: ['inWatchlist', id],
    queryFn: () => isInWatchlist(id),
    enabled: !!id,
  });

  const { data: isInRating }: UseQueryResult<number> = useQuery({
    queryKey: ['inRatinglist', id],
    queryFn: () => isInRatinglist(id),
    enabled: !!id,
  });

  const [wish, setWish] = useState<boolean>(isInWish ?? false); // 보고싶다 여부
  const [watching, setWatching] = useState<boolean>(isInWatching ?? false); // 보는 중 여부
  const [myRating, setMyRating] = useState<number>(isInRating ?? 0); // 별점
  const [text, setText] = useState<string>(''); // 리뷰 쓰기
  const isDisabled = text.trim() === '';
  
  const [expandedContent, setExpandedContent] = useState<boolean>(false); // 줄거리 더보기 여부
  
  const tabs:Tabs[] = ['사용자 평', '비슷한 작품']; // 애니메이션 정보 소개 아래 탭
  const [selectedTab, setSelectedTab] = useState<Tabs>(tabs[0]); 

  const bgImg = data?.images[1]? data.images[1].img_url : data?.images[0].img_url;
  const posterImg = data?.images[0].img_url;
  const genresS = data?.genres?.length ? 
                (data.genres.length > 1 ? data.genres.join('·') : data.genres.join()) 
                : '';

  const { data:related }: UseQueryResult<Related> = useQuery({
    queryKey: ['RelatedData', data?.id as number],
    queryFn: () => getRelatedById(data?.id as number),
    enabled: !!data?.id,
  })

  const { data: reviews }: UseQueryResult<Review[]> = useQuery({
    queryKey: ['reviews', data?.id as number],
    queryFn: () => getAnimeReviews(data?.id as number),
    enabled: !!data?.id,
  })

  reviews?.reverse();

  const handleExpandedToggle = () => {
    setExpandedContent(!expandedContent);
  }

  // 보고싶다 클릭
  const handleClickWish = async () => {
    if (isLoggedIn && data) {
      const auth = JSON.parse(isLoggedIn);
      const email = auth.email;
      const animeId = data.id;
      
      const formData = {
        email: email,
        animeId: animeId
      }
      
      try {
        const res = await authApi.post(`/user/actions/wish/${animeId}/update`, formData);
        setWish(res.data.state);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
              const status = error.response.status;
              const message = error.response.data.msg || error.response.data.message || 'An error occurred';
              console.log(status, message);
          }
        } else {
          console.log(`${data.name} 담기/취소에 실패했습니다.`);
        }
      }
      
    } else {
      console.log('로그인 후에 이용해주세요');
    }
  }

  // 보는중 클릭
  const handleClickWatching = async () => {
    if (isLoggedIn && data) {
      const auth = JSON.parse(isLoggedIn);
      const email = auth.email;
      const animeId = data.id;
      
      const formData = {
        email: email,
        animeId: animeId
      }
      
      try { 
        const res = await authApi.post(`/user/actions/watch/${animeId}/update`, formData);
        setWatching(res.data.state);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
              const status = error.response.status;
              const message = error.response.data.msg || error.response.data.message || 'An error occurred';
              console.log(status, message);
          }
        } else {
          console.log(`${data.name} 담기/취소에 실패했습니다.`);
        }
      }
      
    } else {
      alert('로그인 후에 이용해주세요');
    }
  }

  // 별점 매기기
  const handleMyRating = async (value: number) => {
    if (isLoggedIn && data) {
      const auth = JSON.parse(isLoggedIn);
      const email = auth.email;
      const animeId = data.id;
      const rating = value;
      
      const formData = {
        email: email,
        animeId: animeId,
        rating: rating
      }
      
      try { 
        const res = await authApi.post(`/user/actions/rating/${animeId}/update`, formData);
        setMyRating(rating);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
              const status = error.response.status;
              const message = error.response.data.msg || error.response.data.message || 'An error occurred';
              console.log(status, message);
          }
        } else {
          console.log('별점 남기기에 실패했습니다.');
        }
      }
      
    } else {
      alert('로그인 후에 이용해주세요');
    }
  }

  // 리뷰 남기기
  const handleReview = async () => {
    if (isLoggedIn && data) {
      const auth = JSON.parse(isLoggedIn);
      const email = auth.email;
      const name =  auth.name;
      const img = auth.img;
      const rating = myRating;

      const animeId = data.id;
      const now = dayjs().format();
      
      const formData = {
        email: email,
        animeId: animeId,
        img: img,
        name: name,
        rating: rating,
        date: now,
        content: text,
      }
      
      try { 
        const res = await authApi.post(`/user/actions/review/${animeId}/add`, formData);
        console.log(res.data)
        setText('');
        
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
              const status = error.response.status;
              const message = error.response.data.msg || error.response.data.message || 'An error occurred';
              console.log(status, message);
          }
        } else {
          alert('리뷰 남기기에 실패했습니다.');
        }
      }
      
    } else {
      alert('로그인 후에 이용해주세요');
    }
  }

  // 리뷰 삭제하기
  const handleDeleteReview = async (itemEmail: string, reviewId: number) => {
    if (isLoggedIn && data && (itemEmail === JSON.parse(isLoggedIn).email)) {
      const auth = JSON.parse(isLoggedIn);

      const email = auth.email;
      const animeId = data.id;
      
      const formData = {
        email: email,
        animeId: animeId,
        reviewId: reviewId
      }
      
      try { 
        const res = await authApi.post(`/user/actions/review/${animeId}/remove`, formData);
        console.log(res.data)
        
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
              const status = error.response.status;
              const message = error.response.data.msg || error.response.data.message || 'An error occurred';
              console.log(status, message);
          }
        } else {
          alert('리뷰 남기기에 실패했습니다.');
        }
      }
      
    } else {
      alert('로그인 후에 이용해주세요');
    }
  }

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
              url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center', // 추가하여 배경 이미지의 위치 조정
            }}
            className='absolute top-0 right-0 bottom-0 bg-no-repeat left-auto w-[48.75rem] max-w-full h-[28rem] object-cover opacity-50'
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
                    src={posterImg} 
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
                  {data?.avg_rating.toFixed(1)}
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
                  <div onClick={handleClickWish}>
                    { wish === true ? 
                      <FaCheck
                        className='w-6 h-6 ml-3 mb-1 cursor-pointer text-purple' 
                      /> : 
                      <FaPlus 
                        className='w-6 h-6 ml-3 mb-1 hover:bg-white hover:bg-opacity-10 hover:rounded-full cursor-pointer' 
                      />
                    }
                  </div>
                  <p className='text-sm'>보고싶다</p>
                </div>
                <div>
                  <div onClick={handleClickWatching}>
                    { watching === true ? 
                      <FaEye 
                        className='w-6 h-6 ml-2 mb-1 cursor-pointer text-purple'
                      />
                      :
                      <FaRegEye 
                        className='w-6 h-6 ml-2 mb-1 hover:bg-white hover:bg-opacity-10 hover:rounded-full cursor-pointer' 
                      />
                    }
                  </div>        
                  <p className='text-sm'>보는중</p>
                </div>
              </div>
              <div className='relative top-24'>
                <p className={`overflow-hidden ${expandedContent ? 'line-clamp-none' : 'line-clamp-2'}`}>
                  {data?.content}
                </p>
                <br />
                { expandedContent && (
                  <div className='p-0 max-w-[29.375rem] flex flex-wrap mb-[-0.375rem] gap-2'>
                    {data?.tags.map((item, index) => (
                      <p key={index} className='text-[0.92rem] font-extrabold text-purple-2 bg-white bg-opacity-15 px-1 py-1 rounded-md'>
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
                            <MdOutlineExpandLess className='w-6 h-6' />
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
          <ul className='flex flex-row cursor-pointer text-charcoal text-lg font-bold gap-10'>
            {tabs.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedTab(item)}
              >
                {item}
                {item === selectedTab ? (
                  <motion.div className="h-1 mt-1 bg-purple" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
          { selectedTab === '사용자 평' ? (
            <div className='pt-5 px-1 flex flex-col'>
              <div className='flex flex-row gap-8 justify-center'>
                <div>
                  <p className='font-bold text-smoked-black text-center'>
                    내 별점
                  </p>
                  <div className='flex flex-col justify-center items-center pt-1 gap-2'>
                    <p className={`${myRating ? 'text-black text-4xl font-extrabold' : 'text-grey-button text-4xl font-extrabold'}`}>
                      {myRating}
                    </p>
                    <p className='text-[#7e7e7e] text-sm'>
                      별점을 남겨주세요
                    </p>
                    <Rating
                      className='mt-[1px]'
                      value={myRating}
                      onChange={(event, value) => handleMyRating(value as number)}
                      precision={0.5}
                      icon={<StarIcon className='text-purple' fontSize='large' />}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='large' />}
                    />
                  </div>
                </div>
                <div>
                  <p className='font-bold text-smoked-black text-center'>
                    평균 별점
                  </p>
                  <div className='flex flex-col justify-center items-center pt-1 gap-2'>
                    <p className='text-black text-4xl font-extrabold'>
                      {data?.avg_rating}
                    </p>
                    <p className='text-[#7e7e7e] text-sm'>
                      {data?.cnt_short_review}개의 별점
                    </p>
                    <Rating
                        className='mt-[1px]'
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon className='text-purple' fontSize='large' />}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='large' />}
                      />
                  </div>
                </div>
              </div>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='mt-16 p-3 border border-border-2 rounded-md focus:outline-none '
                placeholder='이 작품에 대한 내 평가를 남겨보세요'
                minLength={1} 
                maxLength={1000} 
              />
              <button 
                onClick={handleReview}
                disabled={isDisabled}
                className='flex justify-end p-2 font-bold disabled:text-grey-button text-purple'
              >
                등록
              </button>
              <div>
                <p className='text-sm font-bold'>리뷰</p>
                {reviews?.map((item, index) => (
                  <div key={index} className='pt-7 flex justify-between'>
                    <div className='text-[0.8rem] flex flex-col gap-3'>
                      <div className='flex flex-row gap-2'>
                        {(item.rating !== 0) && 
                          <Rating
                            className='mt-[1px]'
                            name="read-only"
                            value={item.rating}
                            precision={0.5}
                            readOnly
                            icon={<StarIcon className='text-purple' />}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                          />
                        }
                        <p className='text-lg font-bold'>{(item.rating !== 0) && item.rating}</p>
                      </div>
                      <p className='text-[0.9rem]'>
                        {item.content}
                      </p>
                    </div>
                    <div className='flex flex-col items-end gap-5'>
                      <div className='flex flex-row text-xs gap-2'>
                        <p className='mt-[0.35rem]'>
                          {item.name}
                        </p>
                        <img
                          className='rounded-full w-7 h-7' 
                          src={item.img} 
                          alt='' 
                        />
                      </div>
                      { isLoggedIn && item.email === JSON.parse(isLoggedIn).email && (
                        <button
                          onClick={() => handleDeleteReview(item.email, item.reviewId)} 
                          className='text-purple text-sm font-extrabold mr-1'
                        >
                          삭제
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className='pt-6'>
              <ul className='p-0 m-0 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-2 gap-2'>
                  {related?.relatedData.results?.map((item, index) => (
                    <li>
                      <AnimeCard key={index} data={item} />
                    </li>
                  ))}
              </ul>
              {related?.relatedData.results === null && <p>비슷한 작품이 없습니다.</p>}
            </div>
          )}
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
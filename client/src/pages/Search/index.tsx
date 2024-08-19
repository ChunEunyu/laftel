import { useEffect, useState } from 'react';
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { keyword, selectKeyword } from '@/features/search/searchSlice';
import { setClickSearch } from '@/features/nav/clickSlice';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import AnimeCard from '@/components/AnimeCard';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RxCrossCircled } from 'react-icons/rx';
import { getRanking, getSearch } from '@/apis/getAPIs';
import { RankingItem } from "@/types/ranking";
import { Item } from "@/types/item";
import { useLocation, useNavigate  } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate(); 
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();
  const searchKeyword = useAppSelector(selectKeyword)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keywordQuery = queryParams.get('keyword');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(keyword(e.target.value));
    navigate(`/search?keyword=${searchKeyword}`); 
  }

  const { data: resultData }: UseQueryResult<Item[]> = useQuery({
    queryKey: ['searchResult', searchKeyword],
    queryFn: () => getSearch(searchKeyword),
    staleTime: 60000 * 2,
  })

  const { data: rankingData }: UseQueryResult<RankingItem[]> = useQuery({
    queryKey: ['ranking', '4hour'],
    queryFn: () => getRanking('4hour'),
    staleTime: 60000 * 10,
  });

  const slicedRankingData = 
    rankingData && rankingData.length > 10 ? rankingData.slice(0, 10) : rankingData;

  return (
    <>
    { isMobile ? (
      <>
        <div className='flex flex-row w-full pt-3 pl-4 pr-4 pb-2 gap-4 fixed top-0 z-50'>
          <MdOutlineArrowBackIosNew className='w-6 h-6 mt-2 mb-2' />
          <div className='flex flex-row bg-border-1 w-full rounded-md'>
            <BiSearch className='w-6 h-6 mt-2 mr-2 ml-2' />
            <input 
              onChange={(e) => handleSearchInput(e)}
              placeholder='제목, 제작사, 장르로 검색'
              className='bg-border-1 w-full focus:outline-none' 
            />
            <RxCrossCircled className='w-5 h-5 mt-2.5 mr-3 flex flex-row justify-end' />
          </div>
        </div>
        <div className='w-full h-[0.05rem] bg-border-1' />
        {!searchKeyword && (
          <div className='bg-white rounded-md w-full h-auto mt-16'>
            <p className='text-purple text-sm font-bold pl-4 pr-4 pt-3 pb-2'>
              지금 사람들이 많이 보는 작품
            </p>
            {slicedRankingData?.map((item, index) => (
              <div key={index} className=' pl-4 pr-4 flex pt-2 pb-2'>
                <span className='font-extrabold text-md mr-3'>{index+1}</span>
                <p className='cursor-pointer'>{item.name}</p>
              </div>
            ))}
          </div>
        )}
        <div className='pt-[4.5rem] px-2'>
          <ul className='p-0 m-0 grid md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 gap-2'>
              {resultData?.map((item, index) => (
                <li className=''>
                  <AnimeCard key={index} data={item} />
                </li>
              ))}
          </ul>
        </div>
      </>
    ) : (
      <div className='pt-28 pr-16 pl-16'>
        <p className='text-3xl font-black text-[#8A8A8A] pb-8'>
          <span className='text-black'>'{searchKeyword}' </span>검색 결과
        </p>
        <ul className='p-0 m-0 grid xl:grid-cols-6 lg:grid-cols-4 gap-1'>
            {resultData?.map((item, index) => (
              <li className=''>
                <AnimeCard key={index} data={item} />
              </li>
            ))}
        </ul>
      </div>
    )} 
    </>
  );
}

const data: { name:string, img:string } = {
  name: "귀멸의 칼날: 합동 강화 훈련편",
  img: "https://image.laftel.net/items/thumbs/big/dc55e1de-0ade-482d-bceb-aba6bc776673.jpg"
}

export default Search;

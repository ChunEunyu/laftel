import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  toggleClickSearch, setClickSearch
} from "@/features/nav/clickSlice";
import { keyword, selectKeyword } from '@/features/search/searchSlice';
import { RankingItem } from "@/types/ranking";
import { getRanking } from '@/apis/getAPIs';
import { BiSearch } from 'react-icons/bi';
import { RxCrossCircled } from "react-icons/rx";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();
  const searchKeyword = useAppSelector(selectKeyword);

  // 돋보기 버튼을 누르면 인풋 상자가 열리거나 닫힌다
  const handleClickSearch = () => {
    if (searchKeyword) { 
      navigate(`/search?keyword=${searchKeyword}`)
    } else {
      dispatch(keyword(''))
      dispatch(toggleClickSearch());
    }
  }
  
  // 키워드 입력한 내용을 keyword에 저장
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(keyword(e.target.value));
  }

  // 엔터를 누르면 검색 결과 페이지로 이동
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search?keyword=${searchKeyword}`); 
    }
  };

  // [지금 사람들이 많이 보는 작품]에서 아이템을 클릭한 경우 
  const handleClickTrendingItem = async (itemName: string) => {
    dispatch(keyword(itemName));
    navigate(`/search?keyword=${itemName}`); 
  }

  // 모바일 화면에서 자동으로 /search 페이지로 이동
  useEffect(() => {
    if (isMobile) {
      handleClickSearch();
      navigate('/search'); 
    } 
  }, [isMobile, navigate])

  const { data: rankingData }: UseQueryResult<RankingItem[]> = useQuery({
    queryKey: ['ranking', '4hour'],
    queryFn: () => getRanking('4hour'),
    staleTime: 60000 * 10,
  });

  const slicedRankingData = 
    rankingData && rankingData.length > 10 ? rankingData.slice(0, 10) : rankingData;

  return (
    <div className='z-30'>
      { isMobile ? null : ( 
        <div className='max-lg:hidden flex flex-col'>
          <div className='bg-white pt-1 pb-1 pl-1 pr-1 flex flex-row border-[0.01rem] border-border-1 mr-4 rounded-md '>
            <BiSearch onClick={handleClickSearch} className='w-6 h-6 pt-[0.1rem] bg-white mr-2 ml-2' />
            <input 
              value={searchKeyword}
              onKeyDown={handleKeyDown}
              onChange={(e) => handleSearchInput(e)}
              placeholder='제목, 제작사, 장르로 검색'
              type='text'
              className='focus:outline-none text-md w-48' 
            />
            <RxCrossCircled onClick={() => { dispatch(setClickSearch(false)), dispatch(keyword('')) }} className='w-5 h-5 pt-[0.3rem]' />
          </div>
          <div className='bg-white rounded-md w-[16.4rem] h-auto mt-2'>
            <p className='text-purple text-sm font-bold pl-4 pr-4 pt-3 pb-2'>
              지금 사람들이 많이 보는 작품
            </p>
            {slicedRankingData?.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleClickTrendingItem(item.name) } 
                className='hover:bg-border-1 pl-4 pr-4 flex pt-2 pb-2'
              >
                <span className='font-extrabold text-md mr-3'>{index+1}</span>
                <p className='cursor-pointer'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
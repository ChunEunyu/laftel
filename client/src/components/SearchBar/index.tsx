import React, { useEffect, useState } from 'react';
import clsx from "clsx";

import { BiSearch } from 'react-icons/bi';
import { RxCrossCircled } from "react-icons/rx";

import {
  toggleClickSearch, 
} from "@/features/nav/clickSlice";
import { useAppDispatch } from "@/app/hooks";
import { useNavigate } from 'react-router-dom';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export default function Search() {
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickSearch = () => {
    dispatch(toggleClickSearch());
  }

  useEffect(() => {
    if (isMobile) {
      handleClickSearch();
      navigate('/search'); // 모바일 화면에서 자동으로 /search 페이지로 이동
    }
  }, [isMobile, navigate])

  return (
    <div className='z-30'>
      { isMobile ? null : ( 
        <div className='max-lg:hidden flex flex-col'>
          <div className='bg-white pt-1 pb-1 pl-1 pr-1 flex flex-row border-[0.01rem] border-border-1 mr-4 rounded-md '>
            <BiSearch onClick={handleClickSearch} className='w-6 h-6 pt-[0.1rem] bg-white mr-2 ml-2' />
            <input className='focus:outline-none text-md w-48 ' />
            <RxCrossCircled onClick={handleClickSearch} className='w-5 h-5 pt-[0.3rem]' />
          </div>
          <div className='bg-white rounded-md w-[16.4rem] h-[20rem] mt-2'>
            <p className='text-purple text-sm font-bold pl-4 pr-4 pt-3 pb-2'>
              지금 사람들이 많이 보는 작품
            </p>
            <div className='hover:bg-border-1 pl-4 pr-4 flex pt-2 pb-2'>
              <span className='font-extrabold text-md mr-3'>1</span>
              <p>문호스트레이독스 5기</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
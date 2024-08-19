import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';

import {
  toggleClickHamburger,
} from "@/features/nav/clickSlice";
import { useAppDispatch } from "@/app/hooks";

import { Character } from '@/assets/logo/Character';
import { Logo } from '@/assets/logo/Logo';

import { FaRegCheckSquare } from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { VscSparkle } from 'react-icons/vsc';

export default function SideMenuBar() {
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();

  const handleClickHamburger = () => {
    dispatch(toggleClickHamburger());
  }

  useEffect(() => {
    if (isMobile === false) {
      handleClickHamburger();
    }
  }, [isMobile]);

  return (
    <div className='fixed top-0 right-0 pt-3 w-[19rem] h-screen flex flex-col bg-white z-30'>
      <div className='flex justify-end mb-2 pl-4 pr-2'>
        <IoCloseOutline onClick={handleClickHamburger} className='w-9 h-9 text-[#121212]' />
      </div>
      <div className='flex flex-row pl-4 pr-2 gap-4'>
        <div>
          <Logo color='#816bff' width={80} height={30} />
          <p className='mt-2 text-sm'>라프텔에 오신 것을 <br /> 환영합니다! </p>
        </div>
        <div className='pl-2'><Character width={110} height={100} /></div>
      </div>
      <Link to='/auth' className='bg-purple ml-2 mr-2 pt-3 pb-3 mb-4 text-white text-bold rounded-md'>
        <button className='pl-24'>
          로그인 가입
        </button>
      </Link>
      <div className='h-2 bg-border-1 w-inherit' />
      <Link to="/finder" className='flex ml-3 mt-4 mb-4 hover:text-purple' >
        <FaRegCheckSquare className='mt-[0.1rem] mr-2' />
        <p className='font-bold text-sm'>태그검색</p>
      </Link>
      <Link to="/daily" className='flex ml-3 mt-4 mb-4 hover:text-purple' >
        <MdOutlineCalendarToday className='mt-[0.1rem] mr-2' />
        <p className='font-bold text-sm'>요일별 신작</p>
      </Link>
      <Link to="/themes" className='flex ml-3 mt-4 mb-4 hover:text-purple' >
        <VscSparkle className='mt-[0.1rem] mr-2' />
        <p className='font-bold text-sm'>테마추천</p>
      </Link>
      <div className='h-2 bg-border-1 w-inherit' />
      <Link to="/membership" className='flex ml-3 mt-4 mb-4 hover:text-purple' >
        <IoMdCard className='mt-[0.1rem] mr-2' />
        <p className='font-bold text-sm'>라프텔 멤버십</p>
      </Link>
      <div className='h-2 bg-border-1 w-inherit' />
    </div>
  );
}

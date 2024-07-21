import React from 'react';
import DetailCard from './components/DetailCard';

export default function ThemeDetail() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='w-full bg-smoked-black h-[283px]'>
        <div className='flex flex-col lg:mx-auto justify-center items-start max-lg:px-6 h-full w-[calc(70vw)] max-w-[1180px]'>
          <p className='text-white text-3xl font-bold mb-4'>
            2024년에도 라프텔과 함께
          </p>
          <p className='text-white font-semibold'>
            푸른 용의 기운을 이번 분기 신작으로 받아가시고 즐거운 설 연휴 보내세요~
          </p>
        </div>
      </div>
      <div className='max-w-[1232px] w-full my-4 mx-auto mt-4 mr-auto mb-4 ml-auto'>
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
    </div>
  );
}

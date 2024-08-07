import React, { useState } from 'react';
import MembershipBg from "@/assets/background/MembershipBg.png";
import { FaCheck } from "react-icons/fa6";

const memberBenefits: string[] = [
  '프로필 1인','프로필 1인 · 동시재생 1회선',
  '최신화 시청','다운로드 지원','FHD 화질 지원','TV 앱 지원',
]

export default function Subscribed() {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleButtonClick = () => {
    if (clicked) {
      alert('멤버십이 취소되었습니다.');
    } else {
      alert('멤버십에 가입하였습니다.');
    }

    setClicked(!clicked);
  }

  return (
    <div className='relative'>
        <img 
          className='w-full h-[18rem] object-cover'
          src={MembershipBg} 
          alt='' 
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
          <p className='text-[1.65rem] max-lg:text-[1.5rem] font-extrabold mb-5'>
            라프텔 멤버십으로 스마트한 덕질!
          </p>
          <p className='text-lg max-lg:text-[1rem]'>동시방영 신작부터 역대 인기 애니까지</p>
          <p className='text-lg max-lg:text-[1rem]'>멤버십으로 최애 애니 광고없이 편안하게 즐기세요</p>
        </div>
        <div className='my-0 mx-auto'>
          <div className='absolute px-6 py-10 top-64 left-1/2 -translate-x-1/2 bg-white w-[36.25rem] h-20 max-lg:w-full max-lg:pl-10 rounded-md'>
            <p className='text-2xl font-bold mb-4'>베이직</p>
            <p className='font-bold'>월 9,900원</p>
            <div className='px-1 pt-4 space-y-1 mb-7'>
              {memberBenefits.map((item, index) => (
                <p key={index} className='flex flex-row gap-2'>
                  <FaCheck className='text-purple text-md mt-1' />
                  <span className='text-[1.08rem]'>{item}</span>
                </p>
              ))}
            </div>
            <button 
              className='w-full rounded-md py-4 bg-light-purple text-lg font-bold text-purple'
              onClick={handleButtonClick}
            >
              멤버십 가입하기
            </button>
          </div>
        </div>
        
    </div>
  );
}

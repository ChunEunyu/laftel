import React from 'react';

export default function EmailBox() {
  return (
    <div className='z-20 fixed w-[360px] h-[339px] border-[#323232] border-solid border bg-[#121212] pt-7 pb-7 pl-7 pr-7 tracking-tighter rounded-[12px] text-white flex flex-col items-start top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full relative'>
            <p className='absolute top-0 text-sm text-[#fff] font-medium pb-4'>이메일로 시작</p>
            <div className='absolute top-12 flex flex-col w-full' >
                <label className='font-medium text-xs mb-1'>
                    이메일
                </label>
                <input 
                    className='text-xs pt-1 pb-1 text-white bg-[#121212] border-b-[#323232] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-purple' 
                    placeholder='이메일을 입력해주세요'
                />
            </div>
            <div className='absolute top-32 flex flex-col w-full' >
                <label className='font-medium text-xs mb-1'>
                    비밀번호
                </label>
                <input 
                    className='text-xs pt-1 pb-1 text-white bg-[#121212] border-b-[#323232] border border-t-0 border-l-0 border-r-0 focus:outline-none focus:border-b-purple' 
                    placeholder='비밀번호를 입력해주세요'
                />
            </div>
            <button className='absolute top-60 w-full bg-purple pt-2 pb-2 text-sm rounded-md '>
                다음
            </button>
        </div>
    </div>
  );
}

import React from 'react';

const ThemesCard = () => {
  return (
    <div>
        <img 
            className='w-full object-cover lg:h-56 max-lg:h-36 rounded-sm'
            src="https://image.laftel.net/items/thumbs/big/dc55e1de-0ade-482d-bceb-aba6bc776673.jpg" 
            alt='' 
        />
        <p className='text-lg font-bold mb-1 truncate'>
            2024년에도 라프텔과 함께
        </p>
        <p className="text-sm font-normal m-0 " >
            푸른 용의 기운을 이번 분기 신작으로 받아가시고 즐거운 설 연휴 보내세요~
        </p>
    </div>
  );
}

export default ThemesCard;

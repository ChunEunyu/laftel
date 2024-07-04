import { useState } from 'react';

import { 
    MdExpandMore,
    MdExpandLess 
} from "react-icons/md";

export default function FooterBusinessInformation() {
    const [toggle, setToggle] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setToggle(prevState => !prevState);
    }

    return (
        <div className='flex flex-col pt-8 max-lg:items-center'>
            <button onClick={handleClick}>
                <p className='flex text-sm font-semibold'>
                    (주)라프텔 사업자 정보 
                    { toggle ? 
                        <div className='mt-[0.5px]'><MdExpandLess /></div> 
                        : 
                        <div className='mt-[0.5px]'><MdExpandMore /></div>
                    }
                </p>
            </button>
            {toggle && (
                <div className='text-start text-[0.75rem] mt-3 font-medium max-lg:justify-center'>
                    상호 : 주식회사 라프텔 / 대표 : 박종원 <br />
                    주소 : 서울특별시 영등포구 국제금융로 10, 12층 1208호(여의도동, 서울국제 금융센터 투아이에프씨) <br />
                    사업자등록번호 : 535-86-02250 / 통신판매번호 : 제 2022-서울영등포-3578호 <br />
                    이메일 : contact@laftel.net / 대표전화 : 1644-1052 <br />
                </div>
            )}
        </div>
    );
}

import { useState } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { IoFilter } from "react-icons/io5";

import FilteringBar from './FilteringBar';

const Filter = () => {
    const isMobile = useScreenWidth();
    const [isMobileBarVisible, setMobileBarVisible] = useState<boolean>(false);

    const toggleMobileBar = () => {
        setMobileBarVisible(!isMobileBarVisible);
    }

    return (
        <>
            { !isMobile ? (
                <FilteringBar />
            ) : (
                <div>
                    <div className='flex justify-between'>
                        <p className='text-sm mt-3 ml-4'>선택된 필터</p>
                        <button 
                            onClick={toggleMobileBar}
                            className='flex gap-[1px] border py-[3px] px-[5px] mr-4 border-border-2 rounded-md'
                        >
                            <IoFilter className='text-lg pt-[3px]' />
                            <span className='text-sm font-semibold'>필터</span>
                        </button>
                    </div>
                    <div className='w-full h-[1px] bg-border-1 mt-3 mb-3' />
                    { isMobileBarVisible && 
                        <FilteringBar handleClickClose={toggleMobileBar} /> 
                    }
                </div>
            )}
        </>
    );
}

export default Filter;

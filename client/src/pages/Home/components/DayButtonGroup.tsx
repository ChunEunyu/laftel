import { useState } from 'react';

import { getCurrentDayOfWeek } from '@/utils/getCurrentDay';

import clsx from "clsx";


type DayOfWeek = '일' | '월' | '화' | '수' | '목' | '금' | '토';
type Today = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const today: Today = getCurrentDayOfWeek();

const DayButtonGroup = ({ isHomePage }: { isHomePage: boolean }) => {
    const days: DayOfWeek[] = ['일', '월', '화', '수', '목', '금', '토'];
    const [day, setDay] = useState<Today>(today);

    const handleClick = (index: Today) => {
        setDay(index);
    }

    return (
        <div className='space-x-5 mb-2 max-sm:space-x-2'>
            {days.map((item, index) => (
                <button 
                    key={index} 
                    onClick={() => handleClick(index as Today)}
                    className={clsx(
                        baseClasses,
                        isHomePage ? homeStyleClasses : dailyStyleClasses,
                        day === index ? selectedClasses : unselectedClasses
                    )}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

const baseClasses = 'rounded-full font-semibold text-white';
const homeStyleClasses = 'lg:size-16 lg:text-2xl max-lg:size-11 max-lg:text-lg max-sm:text-sm max-sm:size-9';
const dailyStyleClasses = 'size-16 text-[22px] max-sm:text-sm max-sm:size-9';
const selectedClasses = 'bg-purple';
const unselectedClasses = 'bg-grey-button';

export default DayButtonGroup;

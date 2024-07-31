import clsx from "clsx";
import { useEffect, useState } from 'react';
import { getCurrentDayOfWeek } from '@/utils/getCurrentDay';
import { useScreenWidth } from "@/hooks/useScreenWidth";
import DailyAnimeCard from "@/pages/Daily/components/DailyAnimeCard";
import { Daily } from "@/types/daily";
import { getDaily } from "@/apis/getAPIs";
import AnimeSlider from "@/pages/Home/components/AnimeSlider/AnimeSlider";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

type DayOfWeek = '월요일' | '화요일' | '수요일' | '목요일' | '금요일' | '토요일' | '일요일' ;
type Today = 1 | 2 | 3 | 4 | 5 | 6 | 0;

const today: Today = getCurrentDayOfWeek();

const DayButtonGroup = ({ isHomePage }: { isHomePage: boolean }) => {
    const isMobile = useScreenWidth();

    const days: DayOfWeek[] = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    const [day, setDay] = useState<Today>(today);

    const handleClick = (index: Today) => {
        setDay(index);
    }

    const dailyQueries: UseQueryResult<Daily[], Error>[] = useQueries({
        queries: days.map((_, index) => {
            const dayIndex = (index + 1) % 7 as Today;
            return {
                queryKey: ['daily', index as Today],
                queryFn: () => getDaily(index as Today),
                staleTime: 60000 * 5,
            };
        })
    });
    
    const getDataForDay = (day: Today) => {
        const result = dailyQueries[day];
        return result?.data || [];
    };

    return (
        <>
            { isHomePage ? (
                <>  
                    <p className="mb-3 font-extrabold xl:text-[1.65rem] lg:text-[1.3rem] md:text-[1.25] sm:text-[1.2rem]">
                        요일별 신작
                    </p>
                    <div className='space-x-5 mb-4 max-sm:space-x-2'>
                        {days.map((item, index) => (
                            <button 
                                key={index} 
                                onClick={() => handleClick((index + 1) % 7 as Today)}
                                className={clsx(day === (index + 1) % 7 ? homeSelected : homeUnselected, home)}
                            >
                                {item.slice(0, 1)}
                            </button>
                        ))}
                    </div>
                    { getDataForDay(day).length > 0 ? ( 
                            <AnimeSlider data={getDataForDay(day)} /> 
                        ) : (
                            <div>
                                <Skeleton variant="rectangular" width="100%" height={140} />
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton width="100%" />
                                    <Skeleton width="70%" />
                                </Box>
                            </div>
                        )
                    }
                </>
                
            ) : (
                <div className="h-screen pb-6">
                    { isMobile ? (
                        <>
                            <div className='space-x-5 mb-5 max-sm:space-x-2'>
                                {days.map((item, index) => (
                                    <>
                                        <button 
                                            key={index} 
                                            onClick={() => handleClick((index + 1) % 7 as Today)}
                                            className={clsx(day === (index + 1) % 7 ? homeSelected : homeUnselected, dailyMobile)}
                                        >
                                            {item.slice(0, 1)}
                                        </button>
                                    </>
                                ))}
                            </div>
                            <div className="grid md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 gap-x-2">
                                { getDataForDay(day).length > 0 ? (
                                    <>
                                        {getDataForDay(day).map((item, index) => (
                                            <DailyAnimeCard key={index} data={item} />
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {Array.from({ length: 6 }).map((_, index) => (
                                            <Box key={index} sx={{ pt: 1, pb: 0.5 }}>
                                                <Skeleton variant="rectangular" width={220} height={120} />
                                            </Box>
                                        ))}
                                    </>
                                )
                                }
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-7">
                            {days.map((item, index) => {
                                const dayIndex = (index + 1) % 7 as Today;
                                
                                return (
                                    <div key={index} className={clsx(today === dayIndex && dailySelected)}>
                                        <p className={clsx(today === dayIndex ? dailySelected : dailyUnselected, dailyDesk)}>
                                            {item}
                                        </p>
                                        <div className="pt-2 pb-10 space-y-10">
                                            { getDataForDay(dayIndex).length > 0 ? (
                                                <>
                                                    {getDataForDay(dayIndex).map((animeItem, animeIndex) => (
                                                        <DailyAnimeCard key={animeIndex} data={animeItem} />
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    {Array.from({ length: 6 }).map((_, index) => (
                                                        <Box key={index} sx={{ pt: 1, pb: 0.5 }}>
                                                            <Skeleton variant="rectangular" width={180} height={120} />
                                                        </Box>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}



const home = 'xl:size-16 xl:text-2xl lg:size-12 lg:text-lg md:size-10 md:text-md sm:size-10 sm:text-md xs:size-9 xs:text-sm rounded-full font-semibold text-white';
const homeSelected = 'bg-purple';
const homeUnselected = 'bg-grey-button';

const dailyMobile = 'md:size-16 md:text-[22px] sm:size-16 sm:text-[22px] max-sm:size-10 rounded-full font-semibold text-white';
const dailyDesk = 'text-xl font-semibold text-center grid grid-row pt-4';
const dailySelected = 'text-purple bg-light-purple rounded-xl';
const dailyUnselected = 'text-black';

export default DayButtonGroup;

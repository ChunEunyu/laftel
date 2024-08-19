import clsx from "clsx";
import { useState } from 'react';
import RankingSlider from "./RankingSlider";
import { Ranking as RankingValue } from "@/types/time";
import { RankingItem } from "@/types/ranking";
import { getRanking } from "@/apis/getAPIs";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import AnimeCardSkeleton from "@/components/Skeleton/AnimeCardSkeleton";

type RankingKey = '실시간'|'이번주'|'분기'|'역대';

type ButtonEntry = {
  [key in RankingKey]?: RankingValue;
};

type Button = ButtonEntry[];

const AnimeRank = () => {
  const btn: Button = [{'실시간':'4hour'}, {'이번주':'week'}, {'분기':'quarter'}, {'역대':'history'}];
  const [selected, setSelected] = useState<ButtonEntry>(btn[0]);
  const selectedEntry = Object.entries(selected)[0];
  const selectedValue = selectedEntry[1] as RankingValue;

  const { data: rankingData, isLoading }: UseQueryResult<RankingItem[]> = useQuery({
    queryKey: ['ranking', selectedValue],
    queryFn: () => getRanking(selectedValue),
    staleTime: 60000 * 60,
  });

  const handleClick = (item: ButtonEntry) => {
    setSelected(item);
  }

  return (
    <div>
        <p className='lg:text-[1.6rem] max-lg:text-xl font-semibold lg:mb-4 max-lg:mb-2'>
            라프텔 인기 애니
        </p>
        <div className="pb-5">
          {btn.map((item, index) => {
            const name = Object.keys(item)[0] as RankingKey;
            const isSelected = Object.keys(selected)[0] === name && selected[name] === item[name];

            return (
              <button 
                  key={index}
                  onClick={() => handleClick(item)}
                  className={clsx(baseClass, isSelected ? selectedClass : unselectedClass)}
              >
                {name}
              </button>
            )
          })}
        </div>
        { isLoading ? (
            <><AnimeCardSkeleton /><br /></>
          ) : (
            <RankingSlider data={rankingData ?? []} />
          )
        }
    </div>
  );
}

const SkeletonUI = () => (
  <div>
    <Skeleton variant="rectangular" width="100%" height={140} />
    <Box sx={{ pt: 0.5 }}>
      <Skeleton width="100%" />
      <Skeleton width="70%" />
    </Box>
  </div>
);


const baseClass = 'lg:mr-4 max-lg:mr-2 lg:text-[1.5rem] max-lg:text-lg font-semibold pt-1.5 pb-1.5 pl-3 pr-3 rounded-3xl border-border-1 border-[1px]';
const unselectedClass = 'text-smoked-black';
const selectedClass = 'bg-purple text-white';

export default AnimeRank;

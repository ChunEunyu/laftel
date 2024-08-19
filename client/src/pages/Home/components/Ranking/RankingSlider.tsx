import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import RankingAnimeCard from './RankingAnimeCard';
import { RankingItem } from "@/types/ranking";
import { breakpoints } from '@/utils/breakpoints';

type Props =  RankingItem[];

const RankingSlider = ({ data } : { data : Props}) => {
  const AnimeDataArray = data;

  return (
    <div >
      <Swiper
        className='w-full min-h-[9.5em] overflow-hidden'
        spaceBetween={30}
        centeredSlides={false}
        loop={false}
        navigation={false}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {AnimeDataArray.map((item, index) => (
          <SwiperSlide key={item.id} className=''>
            <RankingAnimeCard number={index + 1} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RankingSlider;
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AnimeCard from "@/components/AnimeCard";
import { Daily } from "@/types/daily";
import { breakpoints } from '@/utils/breakpoints';

type Props =  Daily[];

const DailyAnimeSlider = ({ data } : { data : Props}) => {
  const AnimeDataArray = data;

  return (
    <>
      <Swiper
        className='w-full min-h-[9.5em] overflow-hidden'
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {AnimeDataArray.map((item) => (
          <SwiperSlide key={item.id} className=''>
            <AnimeCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default DailyAnimeSlider;
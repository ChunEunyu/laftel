import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AnimeCard from "@/components/AnimeCard";
import { Themes } from '@/types/recommends-themes';
import { breakpoints } from '@/utils/breakpoints';

const ThemeAnimeSlider = ({ data }: { data: Themes }) => {
  const animeList = data.theme_item_list;
  
  return (
    <div>
      <p className="mb-3 font-extrabold xl:text-[1.65rem] lg:text-[1.3rem] md:text-[1.25] sm:text-[1.2rem]">
        {data.title}
      </p>
      <Swiper
        className='w-full min-h-[9.5em] overflow-hidden'
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakpoints}
      >
        {animeList.map((item) => (
          <SwiperSlide key={item.id} className=''>
            <AnimeCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default ThemeAnimeSlider;

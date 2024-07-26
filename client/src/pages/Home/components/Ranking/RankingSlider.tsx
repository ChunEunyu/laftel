import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import RankingAnimeCard from './RankingAnimeCard';
import { RankingItem } from "@/types/ranking";

type Props =  RankingItem[];

const RankingSlider = ({ data } : { data : Props}) => {
  const AnimeDataArray = data;

  return (
    <div >
      <Swiper
        className='w-full min-h-[9.5em] overflow-hidden'
        slidesPerView={5}
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


const breakpoints= {
    640: {
      slidesPerView: 3, // sm
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4, // md
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 4, // lg
      spaceBetween: 5,
    },
    1280: {
      slidesPerView: 5, // xl
      spaceBetween: 5,
    },
    1536: {
      slidesPerView: 6, // 2xl
      spaceBetween: 5,
    },
  }

export default RankingSlider;
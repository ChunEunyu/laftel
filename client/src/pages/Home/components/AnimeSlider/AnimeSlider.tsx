import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AnimeCard from "@/components/AnimeCard";
import { Daily } from "@/types/daily";

type Props =  Daily[];

const AnimeSlider = ({ data } : { data : Props}) => {
  const AnimeDataArray = data;

  return (
    <div >
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
        {AnimeDataArray.map((item) => (
          <SwiperSlide key={item.id} className=''>
            <AnimeCard data={item} />
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

export default AnimeSlider;
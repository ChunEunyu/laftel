import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GrNext } from "react-icons/gr";
import { Carousel } from '@/types/carousels';
import { useAppDispatch } from '@/app/hooks';
import { toggle, animeId } from '@/features/modal/animeModalSlice';

const MainCarousels = ({ data }: { data?: Carousel[] }) => {
  const dispatch = useAppDispatch();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
        style={customStyle}
      >
        {data?.map((item, index) => {
          const handleClick = () => {
            if (item.item_destination) {
              dispatch(toggle());
              dispatch(animeId(item.item_destination));
            } else if (item.external_destination) {
              window.open(item.external_destination, '_blank');
            }
          }

          return (
            <SwiperSlide key={index}>
              <img 
                className='relative max-sm:h-[500px] max-sm:object-cover' 
                src={item.web_img} 
                alt={`Slide ${index + 1}`} 
              />
              <div className='absolute 2xl:bottom-44 xl:bottom-20 lg:bottom-16 md:bottom-12 left-10 max-lg:left-5 sm:bottom-10 max-sm:bottom-5'>
                <img className='static 2xl:size-1/2 xl:size lg:size-2/5 max-lg:size-1/4 max-sm:size-1/2' src={item.logo_img} />
                <div className='static xl:text-xl lg:text-lg max-lg:text-xs text-white font-semibold pt-3'>{item.content}</div>
                <button 
                  onClick={handleClick}
                  className='flex flex-row bg-white xl:text-xl lg:text-sm max-lg:mt-3 max-lg:text-xs lg:mt-6 font-semibold lg:pt-3 lg:pb-3 lg:pl-3 lg:pr-3 max-lg:pt-2 max-lg:pb-2 max-lg:pl-2 max-lg:pr-2 max-lg:rounded-sm lg:rounded-md'
                >
                  <p>보러가기</p>
                  <GrNext className='max-lg:mt-0.5 lg:mt-1' /> 
                </button>                
              </div>
            </SwiperSlide>
          )})}
    </Swiper>
  );
}

interface CustomCSSProperties extends React.CSSProperties {
  '--swiper-pagination-color'?: string;
  '--swiper-navigation-color'?: string;
}

const customStyle: CustomCSSProperties = {
  '--swiper-pagination-color': '#fff',
  '--swiper-navigation-color': '#fff',
};

export default MainCarousels;
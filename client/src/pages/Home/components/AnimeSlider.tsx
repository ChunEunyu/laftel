import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AnimeCard from "@/components/AnimeCard";

const AnimeSlider = () => {
    return (
      <div>
        <p className='text-xl font-semibold'>title</p>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={breakpoints}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <AnimeCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  const breakpoints= {
    320: {
      slidesPerView: 2, // 모바일
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3, // 작은 태블릿
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 4, // 중간 태블릿
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5, // 큰 태블릿
      spaceBetween: 10,
    },
    1250: {
      slidesPerView: 6, // 노트북
      spaceBetween: 10,
    },
  }

  interface Image {
    option_name: string;
    img_url: string;
    crop_ratio: string;
  }
  
  interface Props {
    id: number;
    name: string;
    img: string;
    cropped_img: string;
    is_adult: boolean;
    images: Image[];
    genres: string[];
    highlight_video: string | null;
    is_laftel_only: boolean;
    is_laftel_original: boolean;
    is_uncensored: boolean;
    is_dubbed: boolean;
    is_avod: boolean;
    avod_status: string;
    is_viewing: boolean;
    content_rating: string;
  }
  
  const data: Props[] = [
    {
      "id": 42040,
      "name": "귀멸의 칼날: 합동 강화 훈련편",
      "img": "https://image.laftel.net/items/thumbs/big/dc55e1de-0ade-482d-bceb-aba6bc776673.jpg",
      "cropped_img": "0,102,240,237",
      "is_adult": true,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/dc55e1de-0ade-482d-bceb-aba6bc776673.jpg",
          "crop_ratio": "130,288,865,702"
        }
      ],
      "genres": [
        "판타지",
        "액션",
        "시대물"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "성인 이용가"
    },
    {
      "id": 42046,
      "name": "윈브레 -WINBRE-",
      "img": "https://image.laftel.net/items/thumbs/big/8399833e-adcf-471f-8678-d964163811e1.jpg",
      "cropped_img": "0,102,240,237",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/1243daf4-2991-4b72-8f8d-3d0a4f5e884c.jpg",
          "crop_ratio": "0,294,1024,870"
        },
        {
          "option_name": "home_custom",
          "img_url": "https://thumbnail.laftel.net/items/home/28992522-f841-4a46-99ac-594f3b123b14.jpg",
          "crop_ratio": "0,3,1024,578"
        }
      ],
      "genres": [
        "액션"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 42087,
      "name": "무직전생 Ⅱ ~이세계에 갔으면 최선을 다한다~ part 2",
      "img": "https://image.laftel.net/items/thumbs/big/3dc406de-5a4d-4223-b1b9-b47862b1ef60.jpg",
      "cropped_img": "0,102,240,237",
      "is_adult": true,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/87663c19-77a6-4f7b-ae58-cdfd62f378b7.jpg",
          "crop_ratio": "0,416,1024,992"
        }
      ],
      "genres": [
        "이세계",
        "판타지",
        "액션"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "성인 이용가"
    },
    {
      "id": 42047,
      "name": "(자막) 괴수 8호",
      "img": "https://image.laftel.net/items/thumbs/big/0fde8a97-0a4f-4998-a828-ed7eb1ed10a2.jpg",
      "cropped_img": "0,102,240,237",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/6749a408-2b64-4a5f-8849-c8f925c66b42.jpg",
          "crop_ratio": "0,459,1021,1034"
        }
      ],
      "genres": [
        "액션",
        "재난"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 39022,
      "name": "물드는 세계의 내일로부터",
      "img": "https://image.laftel.net/items/thumbs/big/78f6faf9-833b-4246-84a1-a4b387276bc3.jpg",
      "cropped_img": "0,98,240,232",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/9afd546e-1edc-4a95-af83-1b529cb68b4f.jpg",
          "crop_ratio": "0,317,1024,893"
        }
      ],
      "genres": [
        "판타지",
        "치유",
        "드라마"
      ],
      "highlight_video": null,
      "is_laftel_only": true,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "전체 이용가"
    },
    {
      "id": 42058,
      "name": "전생했더니 슬라임이었던 건에 대하여 3기",
      "img": "https://image.laftel.net/items/thumbs/big/6748a4eb-5109-409e-bfc4-1a69dbea1906.jpg",
      "cropped_img": "0,106,240,240",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/4ffc1399-3483-4f3d-a59e-953e490be5cf.jpg",
          "crop_ratio": "0,784,1024,1360"
        }
      ],
      "genres": [
        "모험",
        "개그",
        "액션",
        "판타지",
        "이세계"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 42042,
      "name": "(자막) 나의 히어로 아카데미아 7기",
      "img": "https://image.laftel.net/items/thumbs/big/513f6ab4-7cb7-4481-a638-40c34da8fa9b.jpg",
      "cropped_img": "0,92,240,228",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/7a7ced49-841b-4b08-9af9-4e78a0a3d616.jpg",
          "crop_ratio": "0,169,1024,745"
        },
        {
          "option_name": "home_custom",
          "img_url": "https://thumbnail.laftel.net/items/home/b3c9ced4-0fa2-47b1-aedb-8ede4460c6f1.jpg",
          "crop_ratio": "0,4,1024,580"
        }
      ],
      "genres": [
        "판타지",
        "액션",
        "SF"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 39431,
      "name": "(무삭제) 귀멸의 칼날",
      "img": "https://image.laftel.net/items/thumbs/big/9ec007f6-bc13-4c9d-88e0-3783e5507ecd.jpg",
      "cropped_img": "0,85,216,207",
      "is_adult": true,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/9ec007f6-bc13-4c9d-88e0-3783e5507ecd.jpg",
          "crop_ratio": "0,188,480,459"
        },
        {
          "option_name": "home_custom",
          "img_url": "https://thumbnail.laftel.net/items/home/5047bade-341f-43f8-b9d3-722280054cee.jpg",
          "crop_ratio": "0,0,940,529"
        }
      ],
      "genres": [
        "판타지",
        "액션",
        "시대물"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": true,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "성인 이용가"
    },
    {
      "id": 41666,
      "name": "장송의 프리렌",
      "img": "https://image.laftel.net/items/thumbs/big/9efd9291-b0df-4f8e-9832-fb09dde27b65.jpg",
      "cropped_img": "0,102,240,236",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/ec327547-3f22-43ee-a1b1-8fe3a9b49ae6.jpg",
          "crop_ratio": "0,274,624,625"
        }
      ],
      "genres": [
        "판타지",
        "드라마",
        "모험",
        "액션"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": true,
      "avod_status": "partial",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 16073,
      "name": "(자막) NANA -나나-",
      "img": "https://image.laftel.net/items/thumbs/big/b802c66b-6e3d-4ae9-8a01-0b07d86806cd.jpg",
      "cropped_img": "0,75,160,165",
      "is_adult": true,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/319120ff-4a85-4865-b996-35d0de02c715.jpg",
          "crop_ratio": "31,62,993,603"
        }
      ],
      "genres": [
        "음악",
        "로맨스",
        "일상"
      ],
      "highlight_video": null,
      "is_laftel_only": true,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "성인 이용가"
    },
    {
      "id": 41848,
      "name": "달이 이끄는 이세계 여행 제2막",
      "img": "https://image.laftel.net/items/thumbs/big/ac330c38-edc7-4a07-a079-46839728a546.jpg",
      "cropped_img": "0,100,240,236",
      "is_adult": false,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/717e2318-3f21-4856-ab3c-fed653d43463.jpg",
          "crop_ratio": "0,341,623,691"
        }
      ],
      "genres": [
        "판타지",
        "이세계"
      ],
      "highlight_video": null,
      "is_laftel_only": false,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "15세 이용가"
    },
    {
      "id": 16107,
      "name": "MONSTER",
      "img": "https://image.laftel.net/items/thumbs/big/49ce8335-c7b2-41f8-93ae-23c31a594c34.jpg",
      "cropped_img": "0,75,160,165",
      "is_adult": true,
      "images": [
        {
          "option_name": "home_default",
          "img_url": "https://thumbnail.laftel.net/items/full/49ce8335-c7b2-41f8-93ae-23c31a594c34.jpg",
          "crop_ratio": "0,229,822,691"
        }
      ],
      "genres": [
        "성인",
        "시대물",
        "추리",
        "미스터리",
        "범죄",
        "스릴러"
      ],
      "highlight_video": null,
      "is_laftel_only": true,
      "is_laftel_original": false,
      "is_uncensored": false,
      "is_dubbed": false,
      "is_avod": false,
      "avod_status": "",
      "is_viewing": true,
      "content_rating": "성인 이용가"
    }
  ]

  export default AnimeSlider;
  

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { motion } from 'framer-motion';
import Intro from "@/assets/background/Intro.mp4";
import center1 from "@/assets/membership/center1.png"
import center2 from "@/assets/membership/center2.png";
import center3 from "@/assets/membership/center3.png";


export default function Landing() {
  const isMobile = useScreenWidth();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState<boolean>(false);
  const targetRef = useRef(null);

  const handleButtonClick = () => {
    navigate('/auth');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
      <div className='bg-black w-full h-max pt-5 text-white'>
        { isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-col justify-center items-center space-y-9'>
              <div className='space-y-3 text-2xl font-extrabold text-center'>
                  <p>동시방영 신작부터</p>
                  <p>역대 인기작까지 한 곳에서</p>
              </div>
              <button 
                onClick={handleButtonClick}
                className='bg-purple text-md font-extrabold py-3 px-8 rounded-3xl'
              >
                멤버십 시작하기
              </button>
              <br /><br />
            </div>
          </motion.div>
        ) }
        <div className='bg-black bg-opacity-75 w-full'>
          <video muted autoPlay loop className='w-full rounded-3xl px-10 max-lg:px-0 max-lg:rounded-none'>
            <source src={Intro} type='video/mp4' />
          </video>
        </div>
        { !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl text-center font-extrabold tracking-tight space-y-12'>
              <div className='space-y-5'>
                <p>동시방영 신작부터</p>
                <p>역대 인기작까지 한 곳에서</p>
              </div>
              <button 
                onClick={handleButtonClick}
                className='bg-purple text-xl py-3 px-16 rounded-3xl'
              >
                멤버십 시작하기
              </button>
            </div>
          </motion.div>
        )}
        <div ref={targetRef} className='mt-40 max-lg:mx-4 flex flex-col justify-center items-center'>
          <AnimatedComponent>
            <div className='text-center max-lg:text-center space-y-8'>
              <p className='text-5xl max-lg:text-3xl font-extrabold'>
                  광고없이 감상하세요
              </p>
              <div className='text-2xl flex flex-row max-lg:flex-col max-lg:text-xl font-bold'>
                <p>멤버십으로 다양한 장르의 애니들을&nbsp;</p>
                <p>끊김없이 쾌-적하게 즐기세요.</p>
              </div>
            </div>
          </AnimatedComponent>
          <br /><br />
          <AnimatedComponent>
            <div className='flex flex-row max-lg:flex-col justify-between'>
              <div className='lg:pl-40 lg:pt-40 max-lg:mb-10 text-start max-lg:text-center space-y-8'> 
                <p className='text-5xl max-lg:text-3xl font-extrabold'>
                  초고화질로 선명하게 감상하세요
                </p>
                <div className='text-2xl flex flex-col max-lg:text-xl font-bold'>
                  <p>FHD 해상도로 생생한 감동을 느껴보세요.</p>
                  <p>최애캐의 작은 디테일까지 놓치지 않고 감상할 수 있어요.</p>
                </div>
              </div>
              <img
                className='w-1/2 max-lg:w-full' 
                src={center1} 
                alt='' 
              />
            </div>
          </AnimatedComponent>
          <br /><br /><br /><br />
          <AnimatedComponent>
            <div className='flex lg:flex-row-reverse max-lg:flex-col justify-between'>
              <div className='max-lg:mb-10 max-lg:text-center lg:text-end lg:mr-44 lg:mt-36 space-y-8'>
                <p className='text-5xl max-lg:text-3xl font-extrabold'>
                  TV에서 웅장하게 감상하세요
                </p>
                <div className='text-2xl flex flex-col max-lg:text-xl font-bold'>
                  <p>스마트 TV, 크롬캐스트 등 큰 화면에서&nbsp;</p>
                  <p>최애 애니를 몰입해서 즐겨보세요.</p>
                </div>
              </div>
              <img
                className='w-1/2 max-lg:w-full' 
                src={center2} 
                alt='' 
              />
            </div>
          </AnimatedComponent>
          <br /><br /><br /><br />
          <AnimatedComponent>
            <div className='justify-between flex lg:flex-row max-lg:flex-col'>
              <div className='text-center space-y-8 lg:pt-40 lg:pl-44 max-lg:pb-10'>
                <p className='text-5xl max-lg:text-3xl font-extrabold'>
                  프로필 최대 4인으로 함께 즐기세요
                </p>
                <div className='max-lg:text-center text-2xl flex flex-col max-lg:text-xl font-bold text-start'>
                  <p>동시 4개 기기에서 재생가능한 프리미엄 멤버십으로 여럿이</p>
                  <p>즐기세요. PC, 모바일, 태블릿 등 다양한 기기에서도 사용이</p>
                  <p>가능합니다.</p>
                </div>
              </div>
              <img
                className='w-1/2 max-lg:w-full' 
                src={center3} 
                alt='' 
              />
            </div>
          </AnimatedComponent>
          {showButton && (
            <motion.button
              onClick={handleButtonClick}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{
                duration: 0.5,
                ease: 'circInOut',
              }}
              className='bg-purple text-xl py-3 px-60 font-bold tracking-tighter rounded-3xl fixed bottom-5'
            >
              멤버십 시작하기
            </motion.button>
          )}
          <br /><br /><br /><br />
        </div>
      </div>
  );
}

const AnimatedComponent  = ({ children }: { children : ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  )
}

import { lazy, Suspense } from 'react';
import { Carousel } from '@/types/carousels';
import { Themes } from '@/types/recommends-themes';
import MainCarousels from './components/MainCarousels/MainCarousels';
import Footer from '@/components/Footer';
import DayButtonGroup from '../../components/DayButtonGroup';
import StartMembership from './components/StartMembership';
import AnimeRank from './components/Ranking/AnimeRank';
import ThemeAnimeSlider from './components/AnimeSlider/ThemeAnimeSlider';
import MainCarouselSkeleton from './components/MainCarousels/MainCarouselSkeleton';
import AnimeCardSkeleton from '@/components/Skeleton/AnimeCardSkeleton';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getCarousels, getRecommendsThemesBySize } from '@/apis/getAPIs';


const Home = () => {
  const { data: carouselsData, isSuccess, isFetched }: UseQueryResult<Carousel[]> = useQuery({
    queryKey: ['carousels'],
    queryFn: () => getCarousels(),
    staleTime: 60000 * 3,
  })

  const { data: themesBySizeData, isLoading: loadingThemes }: UseQueryResult<Themes[]> = useQuery({
    queryKey: ['themesBySize'],
    queryFn: () => getRecommendsThemesBySize(20),
    staleTime: 60000 * 3,
  })

  const numbers = Array.from({ length: 19 }, (_, i) => i + 1);
  
  return (
    <div>
      { isFetched && isSuccess ? (
        <MainCarousels data={carouselsData} />
        
      ) : (
        <MainCarouselSkeleton />
      )}
      <div className='pl-8 pr-8 pt-5 pb-5'>
        <DayButtonGroup isHomePage={true} />
        { !loadingThemes && themesBySizeData ? (
          <ThemeAnimeSlider data={themesBySizeData[0]} />
        ) : (
          <AnimeCardSkeleton />
        )}
        <StartMembership />
        <AnimeRank />
        { !loadingThemes && themesBySizeData ? (
          <>
            { numbers.map((i) => {
              const themeData = themesBySizeData[i];
              return (
                <ThemeAnimeSlider 
                  key={themeData.id} 
                  data={themeData} 
                />
              );
            })}
          </>
        ) : (
          <AnimeCardSkeleton />
        )
        }
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;

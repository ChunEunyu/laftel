import { RankingItem } from "@/types/ranking";
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { toggle, animeId } from '@/features/modal/animeModalSlice';

type Props =  RankingItem;

const RankingAnimeCard = ({ data, number }: { data: Props, number: number }) => {
  const { id, name, img, genres } = data;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggle());
    dispatch(animeId(id));
  }

  const genresS = genres.length > 1 ? genres.slice(0, 2).join('/') : genres.join();
  
  return (
    <>
        <div
            onClick={handleClick} 
            className="grow-0 shrink-0 mx-auto 2xl:h-56 xl:h-52 lg:h-48 md:h-40 sm:h-36 max-sm:h-32"
        >
            <img 
                className="object-cover rounded-md w-full h-4/6"
                src={img}
                alt=""
            />
            <div className="flex flex-row gap-1 pt-1">
                <p className="lg:text-3xl max-lg:text-2xl font-bold">
                    {number}
                </p>
                <div className="flex flex-col">
                    <p 
                        className="text-smoked-black xl:my-1 xl:text-[1.05rem]  lg:text-md md:text-sm max-md:text-xs overflow-hidden overflow-ellipsis whitespace-normal" 
                        style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'}}
                    >
                        {name}
                    </p>
                    <p 
                        className="xl:text-[1rem] lg:text-sm md:text-xs max-md:text-[0.65rem] text-charcoal overflow-hidden overflow-ellipsis whitespace-normal" 
                        style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'}}
                    >
                        {genresS}
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default RankingAnimeCard;

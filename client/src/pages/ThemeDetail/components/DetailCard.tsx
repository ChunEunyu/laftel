import { useAppDispatch } from "@/app/hooks";
import { FaStar } from "react-icons/fa";
import { ThemeItem } from "@/types/recommends-themes";
import { toggle, animeId } from "@/features/modal/animeModalSlice";

const DetailCard = ({ data }: { data: ThemeItem }) => {
  const dispatch = useAppDispatch();
  const anime = data.item;
  const img = anime.images[1] ? anime.images[1].img_url : anime.images[0].img_url;

  const handleClick = () => {
    dispatch(toggle());
    dispatch(animeId(anime.id));
  }

  return (
    <div className='flex items-start p-6 cursor-pointer gap-6' onClick={handleClick}>
        <img 
            className='flex-shrink-0 p-0 lg:w-[22.5rem] lg:h-48 max-lg:w-[13rem] max-lg:h-32 object-cover rounded-md'
            src={img}
            alt='' 
        />
        <div className='flex flex-col shrink w-full'>
            <p className='text-[1.4rem] font-bold'>{anime.name}</p>
            <div className='flex pt-1 gap-2 text-smoked-black'>
                <div className="flex flex-row gap-1">
                    <FaStar className="text-purple text-xl" />
                    <p className="text-purple font-bold">
                        {anime.avg_rating.toFixed(1)}
                    </p>
                </div>
                <div className="flex flex-row gap-1">
                    <p>
                        {anime.genre.length > 1 ? 
                            anime.genre.slice(0, 2).join('·') : 
                            anime.genre.join()
                        }
                    </p>
                    <p>|</p>
                    <p>{anime.medium}</p>
                    <p>·</p>
                    <p>{ anime.content_rating.includes('성인')? 
                            anime.content_rating.slice(0,2) : anime.content_rating.slice(0,3)
                        }
                    </p>
                    <p>·</p>
                    { anime.is_ending === true? <p>완결</p> : <p>방영중</p> }
                </div>
            </div>
            <p className="pt-7">
                {data.ment}
            </p>
        </div>
    </div>
  );
}

export default DetailCard;

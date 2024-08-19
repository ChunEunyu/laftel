import { Daily } from "@/types/daily";
import { RankingItem } from "@/types/ranking";
import { ThemeItem, Anime as ThemeAnime } from "@/types/recommends-themes";
import { Item } from "@/types/item";
import { useAppDispatch } from '@/app/hooks';
import { toggle, animeId } from '@/features/modal/animeModalSlice';

type Props =  Daily | RankingItem | Item | ThemeItem;
type Anime = Daily | RankingItem | Item | ThemeAnime;

const AnimeCard = ({ data }: { data: Props }) => {
  const dispatch = useAppDispatch();

  let anime: Anime | undefined = undefined;

  if ('item' in data ) {
    anime = data.item;
  } else {
    anime = data;
  }
  
  const { id, name } = anime;
  const img = anime.images[0].img_url;

  const handleClick = () => {
    dispatch(toggle());
    dispatch(animeId(id));
  }
  
  return (
    <div
      onClick={handleClick} 
      className="grow-0 shrink-0 mx-auto 2xl:h-56 xl:h-52 lg:h-48 md:h-40 sm:h-36 max-sm:h-24"
    >
        <img 
            className="object-cover rounded-md w-full h-4/5"
            src={img}
            alt=""
        />
        <p 
          className="text-smoked-black overflow-hidden overflow-ellipsis whitespace-normal xl:text-[1.03rem] lg:text-[0.9rem] md:text-[0.85rem] sm:text-[0.8rem] max-sm:text-[0.75rem]" 
          style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'}}
        >
          {name}
        </p>
    </div>
  );
}

export default AnimeCard;

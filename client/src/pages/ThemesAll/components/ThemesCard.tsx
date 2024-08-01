import { useNavigate } from 'react-router-dom';
import { Themes } from '@/types/recommends-themes';

const ThemesCard = ({ data }: { data: Themes }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/themes/${data.id}`);
  };

  return (
    <div onClick={handleClick}>
        <img 
            className='w-full object-cover lg:h-56 max-lg:h-36 rounded-sm'
            src={data.theme_item_list[1].item.images[0].img_url}
            alt='' 
        />
        <p className='text-lg font-bold mb-1 truncate'>
            {data.title}
        </p>
        <p className="text-sm font-normal m-0 " >
            {data.content}
        </p>
    </div>
  );
}

export default ThemesCard;

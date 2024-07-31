import { Logo } from "@/assets/Logo/Logo";
import { Link } from "react-router-dom";

type categoryType = {
  name: string;
  src: string;
}[]

const categories: categoryType = [
  { name: "태그검색", src:"/finder"},
  { name: "요일별 신작", src: "/daily" },
  { name: "테마추천", src: "/themes" },
  { name: "멤버십", src: "/membership" },
];

export default function NavLeftList({ isScroll }: { isScroll: boolean }) {
  const mappedCategories = categories.map((item, index)=>(
    <li key={index} className={ isScroll ? listStyle.scrolled : listStyle.base }>
        <Link to={item.src} className={ isScroll ? menuStyle.scrolled : menuStyle.base } >
            {item.name}
        </Link>
    </li>
  ));
  
  return (
    <div className={ isScroll ? navStyle.scrolled : navStyle.base }>
      <Link to="/">
        <Logo color={ isScroll ? dark : white } width={72} height={24} />
      </Link>
      {mappedCategories}
    </div>
  );
}

const dark = "#191B2A"
const white = "#fff"

const menuStyle = {
  base: 'hover:text-border-2 hover:text-opacity-90  text-white text-medium no-underline text-[16px] font-extrabold text-opacity-90 tracking-tighter', 
  scrolled: 'hover:text-[#816bff] purple-gray text-medium no-underline text-[16px] font-extrabold text-opacity-90 tracking-tighter ',
}; 

const listStyle = {
  base: 'list-none flex-row text-white',
  scrolled: 'list-none flex-row',
};

const navStyle = {
  base: 'flex gap-8 hover:text-gray-500 max-lg:hidden',
  scrolled: 'max-lg:hidden flex gap-8'
};

import { Logo } from '@/assets/Logo';

type menuType = {
    name: string;
    src: string;
}[]

const menuList: menuType = [
    { name: "회사소개", src: "https://laftel.oopy.io/" },
    { name: "고객센터", src: "https://help.laftel.net/hc/ko"}, 
    { name: "공지사항", src: "https://help.laftel.net/hc/ko/sections/5987589202959"}, 
    { name: "이용약관", src: "https://policy.laftel.net/youth/2023/"}, 
    { name: "청소년보호정책", src: "https://policy.laftel.net/youth/2023/"}, 
    { name: "개인정보 처리방침", src: "https://policy.laftel.net/privacy/2023_12/"}, 
    { name: "저작권 표기", src: "https://laftel.net/copyrights/"}
];

const mappedMenuList = menuList.map((item, index) => (
    <li key={index} className="grid grid-cols-1 max-lg:self-start pt-1">
        <a 
            href={item.src} 
            target="_blank"
            className="text-white no-underline text-sm pb-0 pt-0 mb-0 mt-0"
        >
            {item.name}
        </a>
    </li>
));

export default function FooterMenuList() {
  return (
    <div className='flex gap-4 mt-3 max-lg:flex-col max-lg:gap-3 max-lg:items-center'>
        <li className='list-none max-lg:flex max-lg:justify-center'>
            <Logo color="white" width={96} height={32} />
        </li>
        {mappedMenuList}
    </div>

  );
}

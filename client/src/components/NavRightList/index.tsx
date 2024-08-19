import clsx from "clsx";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { Logo } from "@/assets/logo/Logo";
import SideMenuBar from "../SideMenuBar";
import SearchBar from "../SearchBar"
import {
  toggleClickSearch, 
  toggleClickHamburger,
  selectClickSearch,
  selectClickHamburger
} from "@/features/nav/clickSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

export default function NavRightList({ isScroll }: { isScroll: boolean } ) {
  const clickSearch = useAppSelector(selectClickSearch);
  const clickHamburger = useAppSelector(selectClickHamburger);
  const dispatch = useAppDispatch();


  const handleClickSearch = () => {
    dispatch(toggleClickSearch());
  }

  const handleClickHamburger = () => {
    dispatch(toggleClickHamburger());
  }

  const combinedToAuth = clsx(baseToAuth, { [scrolledToAuth]: isScroll, [nonScrolledToAuth]: !isScroll });
  const combinedHamburger = clsx(baseHamburger, { [scrolledHamburger]: isScroll, [nonScrolledHamburger]: !isScroll });
  const combinedSearch = clsx(baseSearch, { [scrolledSearch]: isScroll, [nonScrolledSearch]: !isScroll });
  const combinedLogo = clsx({ [scrolledLogo]: isScroll, [baseLogo]: !isScroll });

  return (
    <>
      <div className='flex flex-row max-lg:w-full max-lg:justify-end '>
        <div className="flex flex-row">
          { clickSearch ? <SearchBar /> : <BiSearch onClick={handleClickSearch} className={combinedSearch} /> }
        </div>
        <Link to="/auth" className={combinedToAuth}>
          로그인/가입
        </Link>
        <div>
          <RxHamburgerMenu onClick={handleClickHamburger} className={combinedHamburger} />
        </div>
      </div>
      <div className={combinedLogo}>
        <Logo color='black' width={80} height={25} />
      </div>
      { clickHamburger && ( 
        <div 
          onClick={handleClickHamburger}
          className='fixed top-0 left-0 w-full h-full bg-background-dim-1 z-20'
        >
          <SideMenuBar /> 
        </div>
      )}
    </>
  );
}

const baseSearch = 'max-lg:w-6 max-lg:h-6 max-lg:mt-[1px] max-lg:mr-3 lg:w-8 lg:h-8 tracking-tighter lg:mr-5 lg:pt-[0.35rem] lg:pb-1 lg:pl-1 lg:pr-1';
const scrolledSearch = 'text-black xl:hover:text-purple';
const nonScrolledSearch = 'text-white rounded-full lg:hover:bg-white lg:hover:bg-opacity-25';

const baseToAuth = 'max-lg:hidden pb-0 pt-0 mt-1 text-md no-underline font-bold tracking-tighter';
const scrolledToAuth = 'text-black hover:text-purple';
const nonScrolledToAuth = 'text-white text-opacity-80 hover:text-opacity-100';

const baseHamburger = 'lg:hidden w-full w-6 h-6 tracking-tighter';
const scrolledHamburger = 'text-black';
const nonScrolledHamburger = 'text-white';

const baseLogo = 'hidden';
const scrolledLogo = 'lg:hidden max-lg:fixed max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2';
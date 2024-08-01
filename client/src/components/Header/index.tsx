import clsx from "clsx";

import NavLeftList from "../NavLeftList";
import NavRightList from "../NavRightList";

import { useScroll } from "../../hooks/useScroll";
import { useLocation } from "react-router-dom";

const noneHeaderRoutes = ['auth', 'profile'];
const isHome = location.pathname === '/';

const Header = () => {
  const location = useLocation();
  const isScroll = useScroll();

  const isNoneHeaderRoute = noneHeaderRoutes.some(route => location.pathname.startsWith('/'+route))

  if (isNoneHeaderRoute) {
    return null; 
  }
  
  const homeClasses = clsx(baseClasses, { [additionalClasses]: isScroll });
  const pageClasses = clsx(baseClasses, additionalClasses)

  return (
    <>
      {
        isHome ? (
          <div className={homeClasses}>
            <NavLeftList isScroll={isScroll} />
            <NavRightList isScroll={isScroll} />
          </div>
        ) : (
          <div className={pageClasses}>
            <NavLeftList isScroll={true} />
            <NavRightList isScroll={true} />
          </div>
        )
      }
    </>
  );
}

const baseClasses = 'fixed w-full z-10 pt-5 pl-12 pr-12 pb-5 max-lg:pl-4 max-lg:pr-4 flex justify-between';
const additionalClasses = 'bg-white h-16 border-b-[2px] border-border-1';

export default Header;





import clsx from "clsx";

import NavLeftList from "../NavLeftList";
import NavRightList from "../NavRightList";

import { useScroll } from "../../hooks/useScroll";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isScroll = useScroll();

  const isHome = location.pathname === '/';
  const isMembership = location.pathname === '/membership';
  const isExcludedPath = /(profile|auth).*/.test(location.pathname);

  if (isExcludedPath) {
    return null; 
  }
  
  const homeClasses = clsx(baseClasses, { [additionalClasses]: isScroll });
  const pageClasses = clsx(baseClasses, additionalClasses);
  const membershipClasses = clsx(baseClasses, membershipAdditionalClasses)

  return (
    <>
      { isHome && (
        <div className={homeClasses}>
          <NavLeftList isScroll={isScroll} />
          <NavRightList isScroll={isScroll} />
        </div>
      )}
      { isMembership && (
        <div className={membershipClasses}>
          <NavLeftList isScroll={false} />
          <NavRightList isScroll={false} />
        </div>
      )}
      { !isHome && !isMembership && (
        <div className={pageClasses}>
          <NavLeftList isScroll={true} />
          <NavRightList isScroll={true} />
        </div>
      )}
    </>
  );
}

const baseClasses = 'fixed w-full z-10 pt-5 pl-12 pr-12 pb-5 max-lg:pl-4 max-lg:pr-4 flex justify-between';
const additionalClasses = 'bg-white h-16 border-b-[2px] border-border-1';
const membershipAdditionalClasses = 'bg-black h-16 border-b-[2px] border-border-1';

export default Header;





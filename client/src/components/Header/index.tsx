import clsx from "clsx";

import NavLeftList from "../NavLeftList";
import NavRightList from "../NavRightList";

import { useScroll } from "../../hooks/useScroll";

const Header = () => {
  const isScroll = useScroll();
  const combinedClasses = clsx(baseClasses, { [additionalClasses]: isScroll });

  return (
    <>
      <div className={combinedClasses}>
        <NavLeftList isScroll={isScroll} />
        <NavRightList isScroll={isScroll} />
      </div>
    </>
  );
}

const baseClasses = 'fixed w-full z-10 pt-5 pl-12 pr-12 pb-5 flex justify-between';
const additionalClasses = 'bg-white';

export default Header;





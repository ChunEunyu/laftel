import { Link } from 'react-router-dom';

export default function NavRightList({ isScroll }: { isScroll: boolean } ) {
  return (
    <div>
      <Link to="/auth" className={ isScroll ? linkStyle.scrolled : linkStyle.base }>
        로그인/가입
      </Link>
    </div>
  );
}

const linkStyle = {
  base: 'text-[#fff] pb-0 pt-0 mt-1 text-md text-opacity-80 no-underline font-bold tracking-tighter',
  scrolled: 'text-[#000] hover:text-[#816bff] pb-0 mt-1 pt-0 text-md text-opacity-80 no-underline font-bold tracking-tighter'
};


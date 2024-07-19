import { Logo } from '@/assets/Logo';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { ImBubble } from "react-icons/im";


export default function AuthBox() {
  return (
    <div className='z-20 fixed w-[360px] h-[339px] bg-[#121212] pt-[28px] pb-[28px] pl-[32px] pr-[32px] tracking-tighter rounded-[12px] text-white flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Logo color='white' width={136} height={33} />
        <div className='font-semibold text-[19px] text-center mt-4'>
            <p>동시방영 신작부터 역대 인기작까지</p>
            <p>한 곳에서 편-안하게!</p>
        </div>
        <Link to="/auth/email" className='w-full mt-6 mb-4'>
            <div className='flex items-center justify-center bg-purple pt-2 pb-2 rounded-md'>
                <MdEmail className="mr-3" />
                <p className='text-sm font-semibold'>이메일로 시작</p>
            </div>
        </Link>
        <p className='text-xs pb-4'>또는</p>
        <Link to='/' className='rounded-full bg-[#fee500] w-12 h-12 flex items-center justify-center'>
            <ImBubble className='text-[#371D1E]'/>
        </Link>
    </div>
  );
}

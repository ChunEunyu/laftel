import React from 'react';
import StartMembershipLogo from '@/assets/Logo/StartMembershipLogo';
import { Link } from 'react-router-dom';

const StartMembership = () => {
  return (
    <Link to='/membership' className='w-full mt-5 mb-5 max-lg:h-16 lg:h-20 lg:pt-1 lg:pb-1 max-lg:pt-3 max-lg:pb-3 rounded-sm bg-light-purple flex flex-col justify-center items-center'>
      <StartMembershipLogo />
    </Link>
  );
}

export default StartMembership;


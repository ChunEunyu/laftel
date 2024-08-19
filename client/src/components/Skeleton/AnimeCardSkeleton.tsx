import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const AnimeCardSkeleton = () => {
  return (
    <Skeleton 
        variant="rectangular" 
        sx={{ 
            width: '100%', 
            height: {
                xs: '14vh', 
                sm: '18vh', 
                md: '22vh', 
                lg: '23vh', 
                xl: '24vh',
            } 
        }} 
    /> 
  );
}

export default AnimeCardSkeleton;

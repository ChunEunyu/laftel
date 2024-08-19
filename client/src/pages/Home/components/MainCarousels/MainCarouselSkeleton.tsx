import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const MainCarouselSkeleton = () => {
  return (
    <Skeleton 
        variant="rectangular" 
        sx={{ 
            width: '100%', 
            height: {
                xs: '25vh', 
                sm: '35vh', 
                md: '45vh', 
                lg: '80vh', 
                xl: '90vh',
            } 
        }} 
    /> 
  );
}

export default MainCarouselSkeleton;

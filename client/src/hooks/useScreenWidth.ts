import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

export const useScreenWidth = (breakpoint: number = 1024) => {
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = throttle(() => {
            const belowBreakpoint = window.innerWidth <= breakpoint;
            setIsBelowBreakpoint(belowBreakpoint);
        }, 500); 

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        handleResize.cancel(); 
        };
    }, [breakpoint]);

    return isBelowBreakpoint;
}

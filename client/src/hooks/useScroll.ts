import debounce from 'lodash.debounce';
import { useState, useEffect, useCallback  } from 'react';

export function useScroll() {
    const [state, setState] = useState<boolean>(false); // 스크롤 여부만 확인

    const handleScroll = useCallback(
        debounce(() => {
            const y = window.scrollY;
            setState((prev) => {
                if ((prev === false && y !== 0) || (prev === true && y === 0)) {
                    return y !== 0;
                }
                return prev;
            });
        }, 100), []
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll]);
    
    return state;
}


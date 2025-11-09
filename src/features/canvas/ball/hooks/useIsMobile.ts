import { useEffect, useState } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 600px)');
    
    setIsMobile(mobileMediaQuery.matches);

    const handleMobileMediaQueryChange = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileMediaQueryChange);
    };
  }, []);

  return isMobile;
};


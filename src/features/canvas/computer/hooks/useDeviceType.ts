import { useEffect, useState } from 'react';

interface UseDeviceTypeReturn {
  isMobile: boolean;
  isTablet: boolean;
}

export const useDeviceType = (): UseDeviceTypeReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 600px)');
    const tabletMediaQuery = window.matchMedia('(max-width: 900px)');

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    const handleMobileMediaQueryChange = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches);
    };

    const handleTabletMediaQueryChange = (event: MediaQueryListEvent): void => {
      setIsTablet(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileMediaQueryChange);
    tabletMediaQuery.addEventListener('change', handleTabletMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileMediaQueryChange);
      tabletMediaQuery.removeEventListener('change', handleTabletMediaQueryChange);
    };
  }, []);

  return { isMobile, isTablet };
};


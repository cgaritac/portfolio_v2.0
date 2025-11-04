import { logPageView } from '@/shared/analytics/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from '@/shared/configuration/firebase.configuration';
import { setAnalyticsInstance } from '@/shared/analytics/analytics';

let isInitialized = false;

export const initFirebase = () => {
  if (isInitialized) return;

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  setAnalyticsInstance(analytics);
  isInitialized = true;

  console.log('Firebase inicializado');
};
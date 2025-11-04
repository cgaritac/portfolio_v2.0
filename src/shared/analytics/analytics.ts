import { logEvent, setUserId } from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';

let analyticsInstance: Analytics | null = null;

export const setAnalyticsInstance = (analytics: Analytics) => {
  analyticsInstance = analytics;
};

export const logPageView = (page: string) => {
  if (analyticsInstance) logEvent(analyticsInstance, 'page_view', { page });
};

export const logButtonClick = (name: string) => {
  if (analyticsInstance) logEvent(analyticsInstance, 'button_click', { name });
};

export const setAnalyticsUser = (userId: string) => {
  if (analyticsInstance) setUserId(analyticsInstance, userId);
};
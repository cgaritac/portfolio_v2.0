import { RefObject, useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

export const useIntersectionObserver = (options?: IntersectionObserverOptions): [RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};


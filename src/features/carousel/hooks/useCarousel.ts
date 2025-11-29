import { useRef, useState, useEffect, useCallback } from "react";

interface UseCarouselOptions {
  scrollAmount?: number;
  scrollThreshold?: number;
}

interface UseCarouselReturn {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  isDragging: boolean;
  disableSnap: boolean;
  scrollPrevious: () => void;
  scrollNext: () => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleMouseLeave: () => void;
}

export const useCarousel = (options: UseCarouselOptions = {}): UseCarouselReturn => {
  const { scrollAmount = 350, scrollThreshold = 5 } = options;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [isDragging, setIsDragging] = useState(false);
  const [disableSnap, setDisableSnap] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > scrollThreshold);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - scrollThreshold);
  }, [scrollThreshold]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDirection = useCallback(
    (direction: "left" | "right") => {
      const container = scrollContainerRef.current;
      if (!container) return;

      setDisableSnap(false);

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    },
    [scrollAmount]
  );

  const scrollPrevious = useCallback(() => scrollByDirection("left"), [scrollByDirection]);
  const scrollNext = useCallback(() => scrollByDirection("right"), [scrollByDirection]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setDisableSnap(true);
    setStartX(e.pageX);
    setScrollLeftStart(container.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const container = scrollContainerRef.current;
      if (!container) return;

      e.preventDefault();
      const x = e.pageX;
      const walk = x - startX;
      container.scrollLeft = scrollLeftStart - walk;
    },
    [isDragging, startX, scrollLeftStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    isDragging,
    disableSnap,
    scrollPrevious,
    scrollNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  };
};

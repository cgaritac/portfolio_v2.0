import { FC, ReactNode } from "react";
import { useCarousel } from "../hooks";
import { CarouselArrow } from "../components";

interface CarouselProps {
  children: ReactNode;
  scrollAmount?: number;
  gap?: string;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
  className?: string;
  itemsContainerClassName?: string;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  scrollAmount = 350,
  gap = "gap-7",
  ariaLabelPrev = "Previous items",
  ariaLabelNext = "Next items",
  className = "",
  itemsContainerClassName = "",
}) => {
  const {
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
  } = useCarousel({ scrollAmount });

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div className="flex items-center gap-2 sm:gap-4 w-full">
        <CarouselArrow
          direction="left"
          onClick={scrollPrevious}
          disabled={!canScrollLeft}
          ariaLabel={ariaLabelPrev}
        />

        <div
          ref={scrollContainerRef}
          className={`
            flex-1 overflow-x-auto scrollbar-hide fade-scroll-x
            ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}
            ${disableSnap ? "" : "snap-x snap-mandatory"}
          `}
          style={
            {
              "--fade-left": canScrollLeft ? "transparent" : "black",
              "--fade-right": canScrollRight ? "transparent" : "black",
              scrollBehavior: isDragging ? "auto" : "smooth",
            } as React.CSSProperties
          }
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex ${gap} py-2 px-1 ${itemsContainerClassName} ${isDragging ? "pointer-events-none" : ""}`}
          >
            {children}
          </div>
        </div>

        <CarouselArrow
          direction="right"
          onClick={scrollNext}
          disabled={!canScrollRight}
          ariaLabel={ariaLabelNext}
        />
      </div>
    </div>
  );
};

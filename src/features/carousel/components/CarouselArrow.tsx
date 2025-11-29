import { FC } from "react";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  ariaLabel?: string;
}

export const CarouselArrow: FC<CarouselArrowProps> = ({
  direction,
  onClick,
  disabled,
  ariaLabel,
}) => {
  const defaultAriaLabel = direction === "left" ? "Previous items" : "Next items";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? defaultAriaLabel}
      className={`
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12 rounded-full
        bg-green-100/20 backdrop-blur-sm
        border border-green-200/30
        text-white text-lg sm:text-xl font-bold
        transition-all duration-300 cursor-pointer
        hover:bg-green-100/40 hover:scale-110
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-green-400/50
        shrink-0
      `}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

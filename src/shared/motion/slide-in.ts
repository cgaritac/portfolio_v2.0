interface SlideInProps {
    direction: "left" | "right" | "up" | "down";
    type: "spring" | "tween" | "keyframes";
    delay: number;
    duration: number;
}

export const slideIn = ({ direction, type, delay, duration }: SlideInProps) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut" as const,
        },
      },
    };
  };
interface TextVariantProps {
    delay: number;
}

export const textVariant = ({ delay }: TextVariantProps) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring" as const,
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
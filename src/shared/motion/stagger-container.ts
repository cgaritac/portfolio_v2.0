interface StaggerContainerProps {
    staggerChildren: number;
    delayChildren?: number;
}
   
export const staggerContainer = ({ staggerChildren, delayChildren }: StaggerContainerProps) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
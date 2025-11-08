import { staggerContainer, styles } from "@/shared";
import { motion } from "framer-motion";
import { ComponentType, ReactNode } from "react";

interface HOCProps {
  Component: ComponentType;
  idName: string;
}

export const HOC = ({ Component, idName }: HOCProps): ComponentType => {
  return (): ReactNode => {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 0.1, delayChildren: 0.1 })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};
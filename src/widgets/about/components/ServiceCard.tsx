import { fadeIn } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { Tilt } from "react-tilt";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
        <motion.article
          variants={fadeIn({ direction: "right", type: "spring", delay: index * 0.5, duration: 0.75 })} 
          className="w-full green-subtle-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-card"
        >
          <img 
            src={icon} 
            alt={`${title} service icon`} 
            title={`${title} service`}
            className="w-16 h-16 object-contain" 
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </motion.article>
      </Tilt>
    )
  }
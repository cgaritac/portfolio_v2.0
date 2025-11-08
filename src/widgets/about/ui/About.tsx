import { fadeIn, HOC, services } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { ServiceCard } from "../components";
import { ABOUT_CONSTANTS } from "../constants";
import { ParagraphSplitter } from "@/features";
import { SectionTitle } from "@/shared/components";

const About: FC = () => {
  return (
    <>
      <SectionTitle 
        titleDescription={ABOUT_CONSTANTS.TitleDescription} 
        title={ABOUT_CONSTANTS.Title} 
      />

      <motion.div 
        variants={fadeIn({ direction: "up", type: "tween", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
      >
        <ParagraphSplitter text={ABOUT_CONSTANTS.Presentation} />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

export const AboutWithHOC = HOC({ Component: About, idName: "about" });
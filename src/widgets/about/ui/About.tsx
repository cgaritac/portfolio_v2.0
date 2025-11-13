import { HOC, ParagraphSplitter } from "@/features";
import { fadeIn, SectionTitle } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { ServiceCard } from "../components";
import { ABOUT_CONSTANTS } from "../constants";
import { SERVICES } from "../content";

const About: FC = () => {
  return (
    <section aria-labelledby="about-title">
      <header>
        <SectionTitle 
          titleDescription={ABOUT_CONSTANTS.TitleDescription} 
          title={ABOUT_CONSTANTS.Title} 
        />
      </header>

      <motion.div 
        variants={fadeIn({ direction: "up", type: "tween", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
      >
        <ParagraphSplitter text={ABOUT_CONSTANTS.Presentation} />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10" role="list" aria-label="Services and expertise">
        {SERVICES.map((service, index) => (
          <article key={service.title} role="listitem" itemScope itemType="https://schema.org/Service">
            <ServiceCard index={index} title={service.title} icon={service.icon} />
          </article>
        ))}
      </div>
    </section>
  )
}

export const AboutWithHOC = HOC({ Component: About, idName: "about" });
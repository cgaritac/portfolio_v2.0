import { fadeIn, HOC, services, styles, textVariant } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { ServiceCard } from "../components";

const About: FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a full-stack engineer with a robust foundation in computer science, I specialize in 
        architecting and delivering comprehensive software solutions. 
        <br /> <br /> My expertise encompasses developing responsive user interfaces, designing robust back-end services, managing databases, 
        and deploying applications in cloud environments. 
        <br /> <br /> I thrive on solving complex technical 
        challenges and collaborating to translate abstract concepts into tangible, high-performing 
        digital experiences, consistently embracing continuous learning and technological evolution.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

export const AboutWithHOC = HOC({ Component: About, idName: "about" });
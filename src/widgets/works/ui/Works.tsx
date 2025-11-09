import { HOC, ParagraphSplitter } from "@/features";
import { fadeIn, SectionTitle } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { WORKS_CONSTANTS } from "../constants";
import { PROJECTS } from "../content";
import { ProjectCard } from "../components";

const Works: FC = () => {
  return (
    <>
      <SectionTitle 
        titleDescription={WORKS_CONSTANTS.TitleDescription} 
        title={WORKS_CONSTANTS.Title} 
      />

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn({ direction: "left", type: "keyframes", delay: 0.1, duration: 1 })}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
        >
          <ParagraphSplitter text={WORKS_CONSTANTS.Description} />
        </motion.p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-7 mt-14">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} name={project.name}
            description={project.description}
            tags={project.tags}
            source_code_link={project.source_code_link} />
        ))}	
      </div>
    </>
  )
}

export const WorksWithHOC = HOC({Component: Works, idName: 'works'})
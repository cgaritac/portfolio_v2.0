import { HOC, ParagraphSplitter } from "@/features";
import { fadeIn, SectionTitle } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { ProjectCard } from "../components";
import { WORKS_CONSTANTS } from "../constants";
import { PROJECTS } from "../content";

const Works: FC = () => {
  return (
    <section aria-labelledby="works-title">
      <header>
        <SectionTitle 
          titleDescription={WORKS_CONSTANTS.TitleDescription} 
          title={WORKS_CONSTANTS.Title} 
        />
      </header>

      <div className="w-full flex">
        <motion.div 
          variants={fadeIn({ direction: "left", type: "keyframes", delay: 0.1, duration: 1 })}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
        >
          <ParagraphSplitter text={WORKS_CONSTANTS.Description} />
        </motion.div>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-7 mt-14" role="list" aria-label="Portfolio projects">
        {PROJECTS.map((project, index) => (
          <article key={`project-${index}`} role="listitem" itemScope itemType="https://schema.org/CreativeWork">
            <ProjectCard 
              index={index} name={project.name}
              description={project.description}
              tags={project.tags}
              source_code_link={project.source_code_link} />
          </article>
        ))}	
      </div>
    </section>
  )
}

export const WorksWithHOC = HOC({Component: Works, idName: 'works'})
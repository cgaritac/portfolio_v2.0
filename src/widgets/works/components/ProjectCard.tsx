import { ParagraphSplitter } from "@/features";
import { fadeIn } from "@/shared";
import { logButtonClick } from "@/shared/analytics/analytics";
import { motion } from "framer-motion";
import { FC } from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { PROJECTS } from "../content";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  source_code_link: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({ index, name, description, tags, source_code_link }) => {
  return (
    <motion.article
      variants={fadeIn({ direction: "up", type: "spring", delay: index * 0.5, duration: 0.75 })}
    >
      <Tilt 
        className="bg-green-50/15 rounded-2xl p-5 sm:w-[360px] w-full h-[510px]" 
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={PROJECTS[index].image} 
            alt={`${name} project preview`} 
            title={`Preview of ${name} project`}
            className="w-full h-full object-fill rounded-2xl" 
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <button
              type="button"
              aria-label={`View source code for ${name}`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                logButtonClick(`github_project_${name}`)
                window.open(source_code_link, "_blank")
              }}
            >
              <img 
                src={github} 
                alt={`GitHub logo for ${name} project`} 
                title="View source code on GitHub"
                className="w-3/4 h-3/4" 
                aria-hidden="true" 
              />
            </button>
          </div>
        </div>

        <div className="mt-5 h-[185px]">
          <h3 className="text-white font-bold text-2xl">
            {name}
          </h3>
          <ParagraphSplitter 
            text={description} 
            className="text-secondary text-sm leading-5 mt-2"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="list">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[14px] ${tag.color}`} role="listitem">
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.article>
  )
}
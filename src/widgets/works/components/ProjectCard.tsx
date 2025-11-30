import { ParagraphSplitter } from "@/features";
import { fadeIn } from "@/shared";
import { logButtonClick } from "@/shared/analytics/analytics";
import { motion } from "framer-motion";
import { FC } from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.article
      variants={fadeIn({ direction: "up", type: "spring", delay: index * 0.5, duration: 0.75 })}
    >
      <Tilt 
        className="bg-green-50/15 rounded-2xl xs:p-5 p-4 xs:w-[360px] w-[190px] xs:h-[510px] h-[550px]" 
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full xs:h-[230px] h-[150px]">
          <img 
            src={image} 
            alt={`${name} project preview`} 
            title={`Preview of ${name} project`}
            className="w-full h-full object-fill rounded-2xl" 
          />
          <div className="absolute inset-0 flex justify-end xs:m-3 m-2 card-img_hover">
            <button
              type="button"
              aria-label={`View source code for ${name}`}
              className="black-gradient xs:w-10 xs:h-10 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                logButtonClick(`github_project_${name}`)
                window.open(source_code_link, "_blank")
              }}
            >
              <img 
                src={github} 
                alt={`GitHub logo for ${name} project`} 
                title="View source code on GitHub"
                className="xs:w-3/4 xs:h-3/4 w-2/3 h-2/3" 
                aria-hidden="true" 
              />
            </button>
          </div>
        </div>

        <div className="mt-5 xs:h-[185px] h-[290px]">
          <h3 className="text-white font-bold xs:text-2xl text-md">
            {name}
          </h3>
          <ParagraphSplitter 
            text={description} 
            className="text-secondary xs:text-sm text-xs leading-5 mt-2"
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
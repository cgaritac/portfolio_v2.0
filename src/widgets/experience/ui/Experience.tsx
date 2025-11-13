import { HOC } from "@/features";
import { SectionTitle } from "@/shared";
import { FC } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceCard } from "../components";
import { EXPERIENCE_CONSTANTS } from "../constants";
import { EXPERIENCES } from "../content";

const Experience: FC = () => {
  return (
    <>
      <header>
        <SectionTitle 
          titleDescription={EXPERIENCE_CONSTANTS.TitleDescription} 
          title={EXPERIENCE_CONSTANTS.Title} 
        />
      </header>

      <div className="mt-20 flex flex-col gap-10"> 
        <VerticalTimeline>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export const ExperienceWithHOC = HOC({Component: Experience, idName: 'work'});
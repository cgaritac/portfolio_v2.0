import { HOC } from "@/features";
import { experiences, SectionTitle } from "@/shared";
import { FC } from "react";
import 'react-vertical-timeline-component/style.min.css';
import { EXPERIENCE_CONSTANTS } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "../components";

const Experience: FC = () => {
  return (
    <>
      <SectionTitle 
        titleDescription={EXPERIENCE_CONSTANTS.TitleDescription} 
        title={EXPERIENCE_CONSTANTS.Title} 
      />

      <div className="mt-20 flex flex-col gap-10"> 
        <VerticalTimeline>
          {experiences.map((experience, index) => (
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
import { HOC } from "@/features";
import { SectionTitle } from "@/shared";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceCard } from "../components";
import { useExperiences } from "../hooks";

const Experience: FC = () => {
  const { t } = useTranslation();
  const experiences = useExperiences();

  return (
    <section aria-labelledby="experience-title">
      <header>
        <SectionTitle 
          titleDescription={t("experience.titleDescription")} 
          title={t("experience.title")} 
        />
      </header>

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
    </section>
  )
}

export const ExperienceWithHOC = HOC({Component: Experience, idName: 'work'});
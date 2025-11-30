import { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: '#00CDA726', 
        color: '#fff', 
        borderRadius: '15px', 
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: '#fff' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon} 
            alt={experience.company_name} 
            title={`${experience.company_name} company logo`}
            className="w-[60%] h-[60%] object-contain" 
          />
        </div>
      }

    >
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-lg font-semibold m-0!">{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li 
            key={`experience-point-${index}`} 
            className="text-white-100 text-sm pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      
    </VerticalTimelineElement>
  )
}
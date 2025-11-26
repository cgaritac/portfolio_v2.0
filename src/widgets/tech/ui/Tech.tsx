import { BallCanvas, HOC, useIsMobile } from "@/features";
import { SectionTitle } from "@/shared";
import { FC, useMemo } from "react";
import { TECHNOLOGIES } from "../content";
import { TECH_CONSTANTS } from "../constants";

const Tech: FC = () => {
  const isMobile = useIsMobile();
  const technologiesToRender = useMemo(() => {
    return isMobile ? TECHNOLOGIES.slice(0, 4) : TECHNOLOGIES;
  }, [isMobile]);

  return (
    <section aria-labelledby="tech-title">
      <header>
        <SectionTitle
          titleDescription={TECH_CONSTANTS.TitleDescription}
          title={TECH_CONSTANTS.Title}
        />
      </header>

      <div role="list" aria-label="Technologies and skills" className="mt-10 w-full flex flex-row flex-wrap justify-center items-center gap-10">
        {technologiesToRender.map((technology) => (
          <article className="w-27 h-27" key={technology.name} role="listitem" itemScope itemType="https://schema.org/Thing">
            <BallCanvas icon={technology.icon} name={technology.name} />
          </article>
        ))}
      </div>
    </section>
  )
}

export const TechWithHOC = HOC({Component: Tech, idName:'tech'})
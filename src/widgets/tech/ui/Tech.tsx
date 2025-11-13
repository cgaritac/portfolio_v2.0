import { BallCanvas, HOC } from "@/features";
import { useIsMobile } from "@/features/canvas/ball/hooks";
import { FC, useMemo } from "react";
import { TECHNOLOGIES } from "../content";

const Tech: FC = () => {
  const isMobile = useIsMobile();
  
  const technologiesToRender = useMemo(() => {
    return isMobile ? TECHNOLOGIES.slice(0, 4) : TECHNOLOGIES;
  }, [isMobile]);

  return (
    <section aria-labelledby="tech-title">
      <div role="list" aria-label="Technologies and skills" className="w-full flex flex-row flex-wrap justify-center items-center gap-10">
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
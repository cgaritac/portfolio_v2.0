import { BallCanvas, HOC, useIsMobile } from "@/features";
import { SectionTitle } from "@/shared";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TECHNOLOGIES } from "../content";

const Tech: FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const technologiesToRender = useMemo(() => {
    return isMobile ? TECHNOLOGIES.slice(0, 4) : TECHNOLOGIES;
  }, [isMobile]);

  return (
    <section aria-labelledby="tech-title">
      <header>
        <SectionTitle
          titleDescription={t("tech.titleDescription")}
          title={t("tech.title")}
        />
      </header>

      <div role="list" aria-label={t("tech.ariaLabelTechnologies")} className="mt-10 w-full flex flex-row flex-wrap justify-center items-center gap-10">
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
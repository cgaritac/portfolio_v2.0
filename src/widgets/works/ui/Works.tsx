import { Carousel, HOC, ParagraphSplitter } from "@/features";
import { fadeIn, SectionTitle } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components";
import { useProjects } from "../hooks";

const Works: FC = () => {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <section aria-labelledby="works-title">
      <header>
        <SectionTitle
          titleDescription={t("works.titleDescription")}
          title={t("works.title")}
        />
      </header>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn({
            direction: "left",
            type: "keyframes",
            delay: 0.1,
            duration: 1,
          })}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
        >
          <ParagraphSplitter text={t("works.description")} />
        </motion.div>
      </div>

      <div
        className="w-full flex flex-wrap justify-center gap-7 mt-14"
        role="list"
        aria-label={t("works.ariaLabelProjects")}
      >
        <Carousel
          scrollAmount={350}
          ariaLabelPrev={t("feedback.ariaLabelPrev")}
          ariaLabelNext={t("feedback.ariaLabelNext")}
        >
          {projects.map((project, index) => (
            <article
              key={`project-${index}`}
              role="listitem"
              itemScope
              itemType="https://schema.org/CreativeWork"
              className="snap-center shrink-0 first:ml-auto last:mr-auto"
            >
              <ProjectCard
                index={index}
                name={project.name}
                description={project.description}
                tags={project.tags}
                image={project.image}
                source_code_link={project.source_code_link}
              />
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export const WorksWithHOC = HOC({ Component: Works, idName: "works" });

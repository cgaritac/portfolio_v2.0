import { HOC, ParagraphSplitter } from "@/features";
import { fadeIn, SectionTitle } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "../components";
import { useServices } from "../hooks";

const About: FC = () => {
  const { t } = useTranslation();
  const services = useServices();

  return (
    <section aria-labelledby="about-title">
      <header>
        <SectionTitle 
          titleDescription={t("about.titleDescription")} 
          title={t("about.title")} 
        />
      </header>

      <motion.div 
        variants={fadeIn({ direction: "up", type: "tween", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] space-y-4"
      >
        <ParagraphSplitter text={t("about.presentation")} />
      </motion.div>

      <div className="mt-20 flex justify-center flex-wrap gap-10" role="list" aria-label={t("about.ariaLabelServices")}>
        {services.map((service, index) => (
          <article key={service.title} role="listitem" itemScope itemType="https://schema.org/Service">
            <ServiceCard index={index} title={service.title} icon={service.icon} />
          </article>
        ))}
      </div>
    </section>
  )
}

export const AboutWithHOC = HOC({ Component: About, idName: "about" });
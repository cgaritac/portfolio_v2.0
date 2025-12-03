import { ComputersCanvas } from "@/features";
import { styles } from "@/shared";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Line, ScrollButton, Socials } from "../components";

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto" aria-label={t("hero.ariaLabelSection")}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}>
        <Line />
        <header>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.title")}
            &nbsp;
            <span className="text-green-100">
              {t("hero.name")}
            </span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            {t("hero.subtitle")}
            <br className="sm:block hidden" />
            {t("hero.subtitle2")}
          </p>
          <Socials />
        </header>
      </div>

      <ComputersCanvas />

      <ScrollButton />
    </section>
  )
}
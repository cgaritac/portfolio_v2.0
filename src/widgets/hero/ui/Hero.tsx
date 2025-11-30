import { ComputersCanvas } from "@/features";
import { styles, logButtonClick } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto" aria-label={t("hero.ariaLabelSection")}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5" aria-hidden="true">
          <div className="w-5 h-5 rounded-full bg-green-100" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
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
        </header>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a 
          href="#about" 
          aria-label={t("hero.scrollToAbout")}
          title={t("hero.scrollToAbout")}
          onClick={() => logButtonClick('hero_scroll_to_about')}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2" role="img" aria-label={t("hero.ariaLabelScrollIndicator")}>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
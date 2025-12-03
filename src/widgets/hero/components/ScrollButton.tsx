import { logButtonClick } from "@/shared";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ScrollButton = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a
        href="#about"
        aria-label={t("hero.scrollToAbout")}
        title={t("hero.scrollToAbout")}
        onClick={() => logButtonClick("hero_scroll_to_about")}
      >
        <div
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          role="img"
          aria-label={t("hero.ariaLabelScrollIndicator")}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            aria-hidden="true"
          />
        </div>
      </a>
    </div>
  );
};

import { styles } from "@/shared";
import { FC } from "react";
import { HERO_CONSTANTS } from "../constants";
import ComputersCanvas from "@/features/canvas/computer/ui/Computers";

export const Hero: FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {HERO_CONSTANTS.title}
            &nbsp;
            <span className="text-purple">
              {HERO_CONSTANTS.name}
            </span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            {HERO_CONSTANTS.subtitle}
            <br className="sm:block hidden" />
            {HERO_CONSTANTS.subtitle2}
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}
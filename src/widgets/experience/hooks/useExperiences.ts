import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { sibudigital, criticalmasslatam, factork } from "../assets";

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export const useExperiences = (): Experience[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    {
      title: "Full Stack Developer",
      company_name: "Factor K Software",
      icon: factork,
      iconBg: "#E6DEDD",
      date: t("experience.factorK.date"),
      points: t("experience.factorK.points", { returnObjects: true }) as string[],
    },
    {
      title: "AEM Content Developer",
      company_name: "Critical Mass Latam",
      icon: criticalmasslatam,
      iconBg: "#383E56",
      date: t("experience.criticalMass.date"),
      points: t("experience.criticalMass.points", { returnObjects: true }) as string[],
    },
    {
      title: "Jr. Content Developer",
      company_name: "Sibú Digital",
      icon: sibudigital,
      iconBg: "#E6DEDD",
      date: t("experience.sibu.date"),
      points: t("experience.sibu.points", { returnObjects: true }) as string[],
    },
  ], [t]);
};

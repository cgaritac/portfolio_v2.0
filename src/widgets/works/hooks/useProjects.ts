import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { expropriation, helicopterGame, paceBE, paceFE, uiLibrary, airplanePassengers } from "../assets";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

export const useProjects = (): Project[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    {
      name: t("works.projects.uiLibrary.name"),
      description: t("works.projects.uiLibrary.description"),
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "storybook", color: "green-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
      ],
      image: uiLibrary,
      source_code_link: "https://github.com/cgaritac/ui_library",
    },
    {
      name: t("works.projects.expropriation.name"),
      description: t("works.projects.expropriation.description"),
      tags: [
        { name: "c#", color: "blue-text-gradient" },
        { name: ".NET", color: "green-text-gradient" },
        { name: "blazor", color: "pink-text-gradient" },
        { name: "sql server", color: "yellow-text-gradient" },
      ],
      image: expropriation,
      source_code_link: "https://github.com/cgaritac/expropriation_management_system",
    },
    {
      name: t("works.projects.paceFE.name"),
      description: t("works.projects.paceFE.description"),
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwind css", color: "green-text-gradient" },
      ],
      image: paceFE,
      source_code_link: "https://github.com/cgaritac/performance_evaluation_system_FE",
    },
    {
      name: t("works.projects.paceBE.name"),
      description: t("works.projects.paceBE.description"),
      tags: [
        { name: "c#", color: "blue-text-gradient" },
        { name: ".NET", color: "green-text-gradient" },
        { name: "mysql", color: "blue-text-gradient" },
      ],
      image: paceBE,
      source_code_link: "https://github.com/cgaritac/performance_evaluation_system_BE",
    },
    {
      name: t("works.projects.helicopter.name"),
      description: t("works.projects.helicopter.description"),
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "pygame", color: "green-text-gradient" },
      ],
      image: helicopterGame,
      source_code_link: "https://github.com/cgaritac/helicopter_game/blob/main/game.py",
    },
    {
      name: t("works.projects.airplane.name"),
      description: t("works.projects.airplane.description"),
      tags: [
        { name: "java", color: "blue-text-gradient" },
        { name: "swing", color: "green-text-gradient" },
      ],
      image: airplanePassengers,
      source_code_link: "https://github.com/cgaritac/airplane_passengers",
    },
  ], [t]);
};

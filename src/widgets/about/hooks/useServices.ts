import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { backend, software, frontend, database } from "../assets";

interface Service {
  id: string;
  title: string;
  icon: string;
}

export const useServices = (): Service[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    { id: "frontend", title: t("about.services.frontend"), icon: frontend },
    { id: "backend", title: t("about.services.backend"), icon: backend },
    { id: "software", title: t("about.services.software"), icon: software },
    { id: "database", title: t("about.services.database"), icon: database },
  ], [t]);
};

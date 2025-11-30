import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { backend, software, frontend, database } from "../assets";

interface Service {
  title: string;
  icon: string;
}

export const useServices = (): Service[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    { title: t("about.services.frontend"), icon: frontend },
    { title: t("about.services.backend"), icon: backend },
    { title: t("about.services.software"), icon: software },
    { title: t("about.services.database"), icon: database },
  ], [t]);
};

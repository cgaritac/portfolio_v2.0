import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface NavLink {
  id: string;
  title: string;
}

export const useNavLinks = (): NavLink[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    { id: "about", title: t("navLinks.about") },
    { id: "work", title: t("navLinks.work") },
    { id: "contact", title: t("navLinks.contact") },
  ], [t]);
};

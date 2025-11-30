import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { logo } from "../assets";

interface LogoRefreshProps {
  setActive: (active: string) => void;
}

export const LogoRefresh: FC<LogoRefreshProps> = ({ setActive }) => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      title="Go to homepage"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={logo}
        alt={t("navbar.logoAlt")}
        title={`${t("navbar.name")} ${t("navbar.lastName")} - ${t("navbar.jobTitle")}`}
        className="w-9 h-9 sm:w-14 sm:h-14 object-contain shrink-0"
      />
      <p className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
        {t("navbar.name")}
        &nbsp;
        <span className="hidden md:inline">
          {t("navbar.lastName")}
          &nbsp; | &nbsp;
          {t("navbar.jobTitle")}
        </span>
      </p>
    </Link>
  );
};

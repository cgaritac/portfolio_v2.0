import { FC } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_CONSTANTS } from "../constants/navbar.constants";
import { logo } from "../assets";

interface LogoRefreshProps {
  setActive: (active: string) => void;
}

export const LogoRefresh: FC<LogoRefreshProps> = ({ setActive }) => {
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
        alt={NAVBAR_CONSTANTS.logo.imageAlt}
        title={`${NAVBAR_CONSTANTS.logo.Name} ${NAVBAR_CONSTANTS.logo.LastName} - ${NAVBAR_CONSTANTS.logo.JobTitle}`}
        className="w-9 h-9 sm:w-14 sm:h-14 object-contain shrink-0"
      />
      <p className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
        {NAVBAR_CONSTANTS.logo.Name}
        &nbsp;
        <span className="hidden md:inline">
          {NAVBAR_CONSTANTS.logo.LastName}
          &nbsp; | &nbsp;
          {NAVBAR_CONSTANTS.logo.JobTitle}
        </span>
      </p>
    </Link>
  );
};

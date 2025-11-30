import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavLinks } from "../hooks";
import { LanguageToggle } from "@/features";

interface MenuProps {
  active: string;
  setActive: (value: string) => void;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export const Menu: FC<MenuProps> = ({ 
  active, 
  setActive, 
  isMobile = false,
  onLinkClick 
}) => {
  const { t } = useTranslation();
  const navLinks = useNavLinks();

  const handleClick = (title: string) => {
    setActive(title);
    onLinkClick?.();
  };

  const listClasses = isMobile
    ? "list-none flex justify-center items-center flex-col gap-4"
    : "list-none hidden md:flex flex-row gap-10";

  const linkClasses = isMobile
    ? "font-poppins font-medium cursor-pointer text-[16px]"
    : "text-[18px] font-medium cursor-pointer";

  const menuContent = (
    <ul className={listClasses}>
      {!isMobile && <LanguageToggle />}
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-green-100" : "text-white"
          } ${linkClasses} hover:text-green-200`}
          onClick={() => handleClick(link.title)}
        >
          <a
            href={`#${link.id}`}
            title={`Go to ${link.title} section`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );

  if (isMobile) {
    return (
      <nav
        id="mobile-menu"
        className="p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[135px] z-10 rounded-xl"
        aria-label={t("navbar.ariaLabelMobile")}
      >
        {menuContent}
      </nav>
    );
  }

  return menuContent;
};

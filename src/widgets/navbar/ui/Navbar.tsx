import { styles } from "@/shared";
import { FC, useState } from "react";
import { close, menu } from "../assets";
import { NAVBAR_CONSTANTS } from "../constants";
import { Menu, LogoRefresh } from "../components";

export const Navbar: FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-center items-center py-4 fixed top-0 z-20 bg-primary/5
         backdrop-blur-sm border-b border-white/10 shadow-lg`}
      aria-label="Main navigation"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <LogoRefresh setActive={setActive} />
        <Menu active={active} setActive={setActive} />
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-label={
              toggle
                ? NAVBAR_CONSTANTS.close.imageAlt
                : NAVBAR_CONSTANTS.menu.imageAlt
            }
            {...(toggle
              ? { "aria-expanded": "true" }
              : { "aria-expanded": "false" })}
            aria-controls="mobile-menu"
            className="w-7 h-7 flex items-center justify-center cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt={
                toggle
                  ? NAVBAR_CONSTANTS.close.imageAlt
                  : NAVBAR_CONSTANTS.menu.imageAlt
              }
              title={
                toggle
                  ? NAVBAR_CONSTANTS.close.imageAlt
                  : NAVBAR_CONSTANTS.menu.imageAlt
              }
              className="w-7 h-7 object-contain"
            />
          </button>
          {toggle && (
            <Menu
              active={active}
              setActive={setActive}
              isMobile
              onLinkClick={() => setToggle(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

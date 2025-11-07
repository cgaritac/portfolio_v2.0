import { close, menu, navLinks, styles } from "@/shared";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { NAVBAR_CONSTANTS } from "../constants";

export const Navbar: FC = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav className={`${styles.paddingX} w-full flex justify-center items-center py-4 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <img src={logo} alt={NAVBAR_CONSTANTS.logo.imageAlt} className="w-9 h-9 sm:w-14 sm:h-14 object-contain shrink-0" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap">
                      {NAVBAR_CONSTANTS.logo.Name}
                      &nbsp;
                      <span className="hidden md:inline">
                        {NAVBAR_CONSTANTS.logo.LastName}
                        &nbsp;
                        |
                        &nbsp;
                        {NAVBAR_CONSTANTS.logo.JobTitle}
                      </span>
                    </p>
                </Link>
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li 
                          key={link.id}
                          className={`${active === link.title
                            ? "text-white"
                            : "text-secondary"}
                            hover:text-white text-[18px] font-medium cursor-pointer`}
                          onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img 
                      src={toggle ? close : menu} 
                      alt={toggle ? NAVBAR_CONSTANTS.close.imageAlt : NAVBAR_CONSTANTS.menu.imageAlt} 
                      className="w-7 h-7 object-contain cursor-pointer" 
                      onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-16
                                    right-0 mx-4 my-2 min-w-[135px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-center items-center flex-col gap-4">
                            {navLinks.map((link) => (
                                <li 
                                  key={link.id}
                                  className={`${active === link.title
                                    ? "text-white"
                                    : "text-secondary"}
                                    font-poppins font-medium cursor-pointer text-[16px]`}
                                  onClick={() => {
                                    setActive(link.title);
                                    setToggle(!toggle);
                                  }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
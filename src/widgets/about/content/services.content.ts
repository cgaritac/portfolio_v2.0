import { backend, software, frontend, database } from "../assets";
import { ABOUT_CONSTANTS } from "../constants";

export const SERVICES = [
    {
      title: ABOUT_CONSTANTS.ServicesTitle[0],
      icon: frontend,
    },
    {
      title: ABOUT_CONSTANTS.ServicesTitle[1],
      icon: backend,
    },
    {
      title: ABOUT_CONSTANTS.ServicesTitle[2],
      icon: software,
    },
    {
      title: ABOUT_CONSTANTS.ServicesTitle[3],
      icon: database,
    },
  ];
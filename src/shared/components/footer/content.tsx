import { LinkedInIcon, GitHubIcon, EmailIcon } from "../../assets";
import { OWNER } from "../../constants";
import { t } from "i18next";

export const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      url: OWNER.social.linkedIn,
      ariaLabel: t("footer.ariaLabelLinkedIn"),
      icon: (
        <LinkedInIcon />
      ),
    },
    {
      name: "GitHub",
      url: OWNER.social.gitHub,
      ariaLabel: t("footer.ariaLabelGitHub"),
      icon: (
        <GitHubIcon />
      ),
    },
    {
      name: "Email",
      url: `mailto:${OWNER.email}`,
      ariaLabel: t("footer.ariaLabelEmail"),
      icon: (
        <EmailIcon />
      ),
    },
  ];
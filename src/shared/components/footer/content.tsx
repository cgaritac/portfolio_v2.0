import { LinkedInIcon, GitHubIcon, EmailIcon } from "../../assets";
import { OWNER } from "../../constants";

export const SOCIAL_LINKS = [
    {
      name: "LinkedIn",
      url: OWNER.social.linkedIn,
      ariaLabelKey: "footer.ariaLabelLinkedIn",
      icon: (
        <LinkedInIcon />
      ),
    },
    {
      name: "GitHub",
      url: OWNER.social.gitHub,
      ariaLabelKey: "footer.ariaLabelGitHub",
      icon: (
        <GitHubIcon />
      ),
    },
    {
      name: "Email",
      url: `mailto:${OWNER.email}`,
      ariaLabelKey: "footer.ariaLabelEmail",
      icon: (
        <EmailIcon />
      ),
    },
  ];
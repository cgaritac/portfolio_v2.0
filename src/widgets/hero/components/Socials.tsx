import { EmailIcon, GitHubIcon, LinkedInIcon, OWNER, YouTubeIcon } from "@/shared";
import { useTranslation } from "react-i18next";

export const Socials = () => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t("hero.ariaLabelSocials")} className="pt-3 pointer-events-auto">
      <ul className="text-white-100 text-sm flex gap-8 list-none">
        <li>
          <a
            href={OWNER.social.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.ariaLabelLinkedIn")}
            title="LinkedIn"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href={OWNER.social.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.ariaLabelGitHub")}
            title="GitHub"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href={OWNER.social.youTube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.ariaLabelYouTube")}
            title="YouTube"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <YouTubeIcon />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${OWNER.email}`}
            aria-label={t("hero.ariaLabelEmail")}
            title="Email"
            className="hover:text-green-200 transition-colors duration-200"
          >
            <EmailIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

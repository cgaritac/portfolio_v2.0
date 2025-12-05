import { styles, OWNER } from "@/shared";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "./content";

export const FooterComponent: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`${styles.paddingX} w-full py-6 bg-primary/5 backdrop-blur-sm border-t border-white/10 shadow-lg`}
      itemScope 
      itemType="https://schema.org/WPFooter"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand info */}
          <div 
            className="flex flex-col items-center md:items-start gap-1"
            itemScope 
            itemType="https://schema.org/Person"
          >
            <span className="text-white font-bold text-lg" itemProp="name">
              {OWNER.fullName}
            </span>
            <span className="text-secondary text-sm" itemProp="jobTitle">
              {t("navbar.jobTitle")}
            </span>
            <meta itemProp="url" content={OWNER.website} />
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label={t("footer.ariaLabelNav")}>
            <a
              href="#about"
              className="text-white-100 hover:text-green-200 text-[18px] font-medium transition-colors duration-200"
            >
              {t("navLinks.about")}
            </a>
            <a
              href="#work"
              className="text-white-100 hover:text-green-200 text-[18px] font-medium transition-colors duration-200"
            >
              {t("navLinks.work")}
            </a>
            <a
              href="#works"
              className="text-white-100 hover:text-green-200 text-[18px] font-medium transition-colors duration-200"
            >
              {t("works.title").replace(".", "")}
            </a>
            <a
              href="#contact"
              className="text-white-100 hover:text-green-200 text-[18px] font-medium transition-colors duration-200"
            >
              {t("navLinks.contact")}
            </a>
          </nav>

          {/* Social links */}
          <div className="flex gap-5" role="list" aria-label={t("footer.ariaLabelSocials")}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-100 hover:text-green-200 transition-colors duration-200"
                aria-label={t(social.ariaLabelKey)}
                title={social.name}
                role="listitem"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-secondary text-center text-sm">
            © {currentYear} {OWNER.fullName}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
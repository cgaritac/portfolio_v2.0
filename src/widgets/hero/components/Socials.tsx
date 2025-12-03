import { EmailIcon, GitHubIcon, LinkedInIcon, YouTubeIcon } from "../assets";

export const Socials = () => {
  return (
    <span className="text-white-100 text-sm flex gap-8 pt-3 pointer-events-auto">
      <a
        href="https://www.linkedin.com/in/carlos-garita-campos-44881a111"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className="hover:text-green-200 transition-colors duration-200"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/cgaritac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className="hover:text-green-200 transition-colors duration-200"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.youtube.com/@cgcode1701"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        title="YouTube"
        className="hover:text-green-200 transition-colors duration-200"
      >
        <YouTubeIcon />
      </a>
      <a
        href="mailto:cgaritac@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Email"
        className="hover:text-green-200 transition-colors duration-200"
      >
        <EmailIcon />
      </a>
    </span>
  );
};

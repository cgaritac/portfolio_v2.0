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
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/cgaritac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.youtube.com/@cgcode1701"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        title="YouTube"
      >
        <YouTubeIcon />
      </a>
      <a
        href="mailto:cgaritac@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Email"
      >
        <EmailIcon />
      </a>
    </span>
  );
};

// import { NAVBAR_CONSTANTS } from "@/widgets/navbar/constants";
// import { NAV_LINKS } from "@/widgets/navbar/links";
import { FC } from "react";
// import { logo } from "@/widgets/navbar/assets";

// const SOCIAL_LINKS = [
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/carlos-garita-campos-44881a111",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Email",
//     url: "mailto:cgaritac@gmail.com",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//   },
// ];

export const FooterComponent: FC = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black-200 border-t border-tertiary">
      {/* <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src={logo} alt={NAVBAR_CONSTANTS.logo.imageAlt} className="w-12 h-12 sm:w-26 sm:h-26 object-contain shrink-0" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-secondary hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-purple transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-tertiary">
          <p className="text-secondary text-center text-sm">
            © {currentYear} {NAVBAR_CONSTANTS.logo.Name} {NAVBAR_CONSTANTS.logo.LastName}. All rights reserved.
          </p>
        </div>
      </div> */}
    </footer>
  );
};
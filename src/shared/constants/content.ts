import {
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    frontend,
    docker,
    factork,
    sibudigital,
    criticalmasslatam,
    carrent,
    software,
    database,
    jobit,
    tripguide,
    threejs,
  } from "@/shared";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: software,
    },
    {
      title: "Database Administrator",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Jr. Content Developer",
      company_name: "Sibú Digital",
      icon: sibudigital,
      iconBg: "#E6DEDD",
      date: "April 2023 – June 2023",
      points: [
        "Performed AEM authoring activities, including content entry, formatting, and publishing through predefined templates and reusable components.",
        "Managed and organized digital assets within AEM DAM, ensuring proper usage, metadata tagging, and consistency across multiple campaigns.",
        "Collaborated with designers and developers to maintain brand consistency, usability, and responsive design standards.",
        "Verified content accuracy and display across browsers and devices, resolving issues related to formatting and layout.",
        "Supported internal stakeholders by documenting authoring best practices and assisting in troubleshooting content-related issues.",
      ],
    },
    {
      title: "AEM Content Developer",
      company_name: "Critical Mass Latam",
      icon: criticalmasslatam,
      iconBg: "#383E56",
      date: "July 2023 – October 2023",
      points: [
        "Executed authoring tasks in Adobe Experience Manager (AEM), creating and updating web pages while ensuring alignment with client brand and technical requirements.",
        "Customized and configured AEM components using HTML, CSS, and JavaScript, adapting content to meet business and design specifications.",
        "Partnered with Creative, Business, Technology, and QA teams to deliver content solutions on time and with high quality standards.",
        "Conducted content validation, functional testing, and accessibility checks to guarantee compliance before release.",
        "Provided feedback on AEM templates and workflows, contributing to continuous improvement of content authoring processes.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Factor K Software",
      icon: factork,
      iconBg: "#E6DEDD",
      date: "July 2024 – Present",
      points: [
        "Develop and maintain web applications following SCRUM methodology.",
        "Implement front-end solutions using JavaScript, Angular, and React, applying Feature-Sliced Design (FSD) architecture.",
        "Build and integrate microfrontend architectures using single-spa.",
        "Integrate authentication systems with Microsoft Entra ID (Azure AD) and Clerk.",
        "Develop back-end services with C#, .NET, and Docker.",
        "Configure and maintain CI/CD pipelines in Microsoft Azure, automating build, test, and deployment processes.",
        "Collaborate with QA to deliver high-quality, bug-free code, ensuring requirementscompliance.",
        "Design and update MySQL databases, ensuring data integrity and efficient query performance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
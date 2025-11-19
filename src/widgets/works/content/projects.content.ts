import { expropriation, project, uiLibrary } from "../assets";

export const PROJECTS = [
    {
      name: "UI Component Library",
      description:
        "UI Component Library is a collection of reusable UI components that can be used to build web applications. It is built with React and CSS, using storybook for documentation and testing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "storybook",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: uiLibrary,
      source_code_link: "https://github.com/cgaritac/ui_library",
    },
    {
      name: "Expropriation Management System",
      description:
        "Expropriation Management System is a web application that enables users to manage the expropriation process. It is built with c# and .NET, using using blazor for the frontend and sql server for the database.",
      tags: [
        {
          name: "c#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "blazor",
          color: "pink-text-gradient",
        },
        {
          name: "sql server",
          color: "yellow-text-gradient",
        },
      ],
      image: expropriation,
      source_code_link: "https://github.com/cgaritac/expropriation_management_system",
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
      image: project,
      source_code_link: "https://github.com/",
    },
  ];
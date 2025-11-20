import { expropriation, helicopterGame, paceBE, paceFE, uiLibrary, airplanePassengers } from "../assets";

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
      name: "Performance Evaluation System Frontend",
      description:
        "Performance Evaluation System Frontend is a web application that enables a company to manage the performance evaluation process. It is built with React and tailwind css.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: paceFE,
      source_code_link: "https://github.com/cgaritac/performance_evaluation_system_FE",
    },
    {
      name: "Performance Evaluation System Backend",
      description:
        "Performance Evaluation System Backend is a web application that enables a company to manage the performance evaluation process. It is built with c# and .NET, using mysql for the database.",
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
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: paceBE,
      source_code_link: "https://github.com/cgaritac/performance_evaluation_system_BE",
    },
    {
      name: "Helicopter game",
      description:
        "Helicopter is a game about a vessel that tries not to crash into obstacles. It enables a user to control a helicopter and avoid obstacles. It is built with python and pygame.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
      ],
      image: helicopterGame,
      source_code_link: "https://github.com/cgaritac/helicopter_game/blob/main/game.py",
    },
    {
      name: "Airplane passengers",
      description:
        "Airplane passengers is a project that simulates the registration of passengers of an airline. It is built with java and swing.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
      ],
      image: airplanePassengers,
      source_code_link: "https://github.com/cgaritac/airplane_passengers",
    },
  ];
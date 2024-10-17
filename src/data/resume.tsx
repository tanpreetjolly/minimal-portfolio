import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanpreet",
  initials: "DV",
  url: "https://tanpreet.me",
  description: "Trying to build cool shit. I work with web apps",
  summary:
    "will keep it simple - i build web applications. good with frontend heavy projects. build and ship with high velocity. can do both frontend/backend (design too) and techstack is not a constraint. find my projects and skills 👉",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Mongo",
    "Redux",
    "Azure",
    "TailwindCSS",
    "C++",
    "Nest.Js",
    "GraphQL",
    "Supabase",
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tanpreetjolly",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanpreet-singh-jolly-2002web/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/jollytanpreet",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tanpreet2002@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fountane Inc.",
      href: "https://fountane.com",
      badges: [],
      location: "Remote",
      title: "Software Development Engineer Intern",
      logoUrl: "/fountane.png",
      start: "June 2024",
      end: "current",
      description:
        "Won the Fueled Contest 2024 and got the internship offer. Architected and developed the entire frontend for an MVP of an event management application in TypeScript and React. Worked with the backend team to design and implement RESTful APIs in Node.js and Express. ",
    },
    {
      company: "Eutopia",
      badges: [],
      href: "https://vetmedman.com",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/eutopia.png",
      start: "August 2023",
      end: "January 2024",
      description:
        "Imple/home/tanpreetjolly/Downloads/medware.mp4mented the entire frontend for a veterinary product store using React, Redux, Tailwind and Material-UI. Designed and developed custom CMS for blogs in the store using jodit editor and react.",
    },
    {
      company: "Genci Education",
      href: "https://www.linkedin.com/company/genciedu/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer Intern",
      logoUrl: "/genci.png",
      start: "August 2023",
      end: "October 2023",
      description:
        "Implemented a dashboard component for a learning platform using Next.js, TailwindCSS and Chart.js. Designed APIs for the dashboard using Node.js and Express. Launched the landing page of the platform in less than 48 hours as the team lead.",
    },
  ],
  projects: [
    {
      title: "Medware Healthcare",
      href: "https://medware.onrender.com",
      dates: "May 2022 - June 2022",
      active: true,
      description:
        "A platform that can predict diseases based on input symptoms using machine-learning. Includes a medical dashboard for patients to monitor their health records and also includes a doctors list filtered with specialization for patients to connect with",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://medware.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tanpreetjolly/medware",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medware.png",
    },
    {
      title: "Creativerse Blogging App",
      href: "https://blogminds.onrender.com",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "A full fledged blogging website with AI powered features utilizing Stable Diffusion XL and llama ",
      technologies: [
        "React.Js",
        "Typescript",
        "MongoDB",
        "Hugging Face",
        "TailwindCSS",
        "Flowbite",
        "Express",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://blogminds.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tanpreetjolly/creativerse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/creativerse.png",
    },
    {
      title: "Swift Chat Application",
      href: "https://swifty-chatty-appy.onrender.com",
      dates: "December 2023 - Jan 2024",
      active: true,
      description:
        "a simple chat website that I built and designed from absolute scratch. It uses websockets for real-time communication and has a simple and clean UI.",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
        "WebSockets",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://swifty-chatty-appy.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tanpreetjolly/simple-chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatapp.png",
    },
    {
      title: "Slideshots",
      href: "https://slideshots.com",
      dates: "October 2024 - present",
      active: true,
      description:
        "A video creation tool to create video content for your products.",
      technologies: [
        "Next.js",
        "Typescript",
        "Turso",
        "Drizzle",
        "tRPC",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://slideshots.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/slideshots.png",
    },
  ],
} as const;

import { BiSend } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbServer2 } from "react-icons/tb";
import { CiGrid31, CiMail } from "react-icons/ci";
import { FiHome, FiFileText } from "react-icons/fi";
import { ImFilePicture, ImMoveUp } from "react-icons/im";
import { AiOutlineCode, AiOutlineUser } from "react-icons/ai";
import { BsBraces, BsCode, BsTelephone } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLocationMarker } from "react-icons/hi";

import rawaaDashboard from "../assets/rawa-dashboard.png";
import omnifood from "../assets/omnifood.png";
import forkify from "../assets/forkify.png";
import rawaa from "../assets/rawaafood.png";

export const SKILLS = [
  {
    title: "Programming",
    subtitle: "More than 2 Year",
    Icon: AiOutlineCode,
    content: [
      {
        name: "C++",
        progress: 60,
      },
      {
        name: "Python",
        progress: 40,
      },
      {
        name: "OOP",
        progress: 75,
      },
      {
        name: "Data Structures",
        progress: 85,
      },
      {
        name: "Algorithms",
        progress: 70,
      },
    ],
  },
  {
    title: "Frontend developer",
    subtitle: "Experienced",
    Icon: BsBraces,
    content: [
      {
        name: "HTML",
        progress: 90,
      },
      {
        name: "CSS",
        progress: 80,
      },
      {
        name: "JavaScript",
        progress: 60,
      },
      {
        name: "Chakra UI",
        progress: 75,
      },
      {
        name: "React",
        progress: 85,
      },
    ],
  },
  {
    title: "Backend developer",
    subtitle: "Entry Level",
    Icon: TbServer2,
    content: [
      {
        name: "Node.JS",
        progress: 50,
      },
      {
        name: "Express.JS",
        progress: 40,
      },
      {
        name: "SQL Server",
        progress: 60,
      },
      {
        name: "AWS",
        progress: 10,
      },
    ],
  },
];

export const NAV_LIST = [
  { name: "Home", Icon: FiHome },
  { name: "About", Icon: AiOutlineUser },
  { name: "Skills", Icon: FiFileText },
  { name: "Services", Icon: HiOutlineBriefcase },
  { name: "Portfolio", Icon: ImFilePicture },
  { name: "Contactme", Icon: BiSend },
];

export const SERVICES_LIST = [
  {
    Icon: FaReact,
    title: "ReactJS Development",
    content: [
      "Provide React.js Development From Scratch.",
      "Leverage our React software development services to build a project from start to go.",
      "Share your project requirements for the perfect mix of talent and expertise.",
    ],
  },
  {
    Icon: ImMoveUp,
    title: "Migration to React",
    content: [
      "Assists in adopting React functionality.",
      "Wrapping the code of your existing architecture into React components.",
      "Update your application while eliminating challenges and issues.",
    ],
  },
  {
    Icon: CiGrid31,
    title: "UI/UX Development",
    content: [
      "Build interactive UIs and impressive web applications that attract users.",
      "Deliver highly-engaging interface development using the latest features of ReactJS.",
    ],
  },
  {
    Icon: BsCode,
    title: "Maintenance and Support",
    content: [
      "Renders maintenance and support services for consistent and stable performance of applications.",
      "We can also update your app functionality on demand.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Rawaa App",
    description:
      "web-based food ordering application. The app is fully responsive to small devices (e.g., mobiles or tablets).",
    image: rawaa,
    demo: "https://rawaa-app.vercel.app/",
    github: "https://github.com/hossam7amdy/rawaa-app",
  },
  {
    name: "Rawaa Dashboard",
    description:
      "UI management tool for managing Rawaa-app. The app has quick summary widgets, graphs for displaying data, and sortable, paginated, and filtered tables to display data.",
    image: rawaaDashboard,
    demo: "https://rawaa-dashboard.vercel.app/",
    github: "https://github.com/hossam7amdy/rawaa-dashboard",
  },
  {
    name: "Forkify",
    description: "recipe application with custom recipe upload.",
    image: forkify,
    demo: "https://forkify-hossam.netlify.app/",
    github:
      "https://github.com/hossam7amdy/learning-projects/tree/main/Javascript/04-forkify",
  },
  {
    name: "Omnifood",
    description:
      "Landing page for an ai-food company. Website adaptable to all devices, with-ui components and animated interactions.",
    image: omnifood,
    demo: "https://omnifood-hossam.netlify.app/",
    github:
      "https://github.com/hossam7amdy/learning-projects/tree/main/HTML-CSS/omnifood",
  },
];

export const CONTACT = [
  {
    Icon: BsTelephone,
    title: "Contact Me",
    subtitle: "+20-100-5861-198",
  },
  {
    Icon: CiMail,
    title: "Email",
    subtitle: "hossamhamdy117@gmail.com",
  },
  {
    Icon: HiOutlineLocationMarker,
    title: "Location",
    subtitle: "6th of October, Giza, EG",
  },
];

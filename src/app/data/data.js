import { BiSend } from 'react-icons/bi';
import { TbServer2 } from 'react-icons/tb';
import { CiGrid31, CiMail } from 'react-icons/ci';
import { FiHome, FiFileText } from 'react-icons/fi';
import { MdOutlineDynamicForm } from 'react-icons/md';
import { ImFilePicture, ImMoveUp } from 'react-icons/im';
import { AiOutlineCode, AiOutlineUser } from 'react-icons/ai';
import { BsBraces, BsCode, BsTelephone } from 'react-icons/bs';
import { HiOutlineBriefcase, HiOutlineLocationMarker } from 'react-icons/hi';
import { VscTools } from 'react-icons/vsc';

export const SKILLS = [
  {
    title: 'Programming',
    subtitle: 'More than 2 Year',
    Icon: AiOutlineCode,
    content: [
      {
        name: 'C++',
        progress: 60,
      },
      {
        name: 'Python',
        progress: 40,
      },
      {
        name: 'OOP',
        progress: 75,
      },
      {
        name: 'Data Structures',
        progress: 85,
      },
      {
        name: 'Algorithms',
        progress: 70,
      },
    ],
  },
  {
    title: 'Frontend developer',
    subtitle: 'Experienced',
    Icon: BsBraces,
    content: [
      {
        name: 'HTML & CSS',
        progress: 90,
      },
      {
        name: 'JavaScript',
        progress: 70,
      },
      {
        name: 'Ant Design',
        progress: 80,
      },
      {
        name: 'Chakra UI',
        progress: 75,
      },
      {
        name: 'React',
        progress: 85,
      },
    ],
  },
  {
    title: 'Backend developer',
    subtitle: 'Experienced',
    Icon: TbServer2,
    content: [
      {
        name: 'Node.JS',
        progress: 75,
      },
      {
        name: 'Express.JS',
        progress: 70,
      },
      {
        name: 'MongoDB',
        progress: 70,
      },
      {
        name: 'MySQL',
        progress: 80,
      },
      {
        name: 'RESTful API',
        progress: 80,
      },
    ],
  },
  {
    title: 'Tools & Technologies',
    subtitle: 'Experienced',
    Icon: VscTools,
    content: [
      {
        name: 'Git & Github',
        progress: 80,
      },
      {
        name: 'ORM [Mongoose, Sequelize]',
        progress: 70,
      },
      {
        name: 'AWS Web Services',
        progress: 80,
      },
      {
        name: 'Unit Testing [Jest]',
        progress: 70,
      },
      {
        name: 'CI/CD',
        progress: 70,
      },
    ],
  },
];

export const NAV_LIST = [
  { name: 'Home', Icon: FiHome },
  { name: 'About', Icon: AiOutlineUser },
  { name: 'Skills', Icon: FiFileText },
  { name: 'Services', Icon: HiOutlineBriefcase },
  { name: 'Portfolio', Icon: ImFilePicture },
  { name: 'Contact me', Icon: BiSend },
];

export const SERVICES_LIST = [
  {
    Icon: MdOutlineDynamicForm,
    title: 'Dynamic Websites Development',
    content: [
      'Flexible and quick change on the user’s computer without new page request to the web browser.',
      'Provide ability to simply update and add new content to the site.',
      'Share your project requirements for the perfect mix of talent and expertise.',
    ],
  },
  {
    Icon: ImMoveUp,
    title: 'Migrating Apps from Legacy Systems',
    content: [
      'Assists in adopting system functionality.',
      'Wrapping the code of your existing architecture into modules.',
      'Update your application while eliminating challenges and issues.',
    ],
  },
  {
    Icon: CiGrid31,
    title: 'UI/UX Development',
    content: [
      'Build interactive UIs and impressive web applications that attract users.',
      'Deliver highly-engaging interface development using the latest features of ReactJS.',
    ],
  },
  {
    Icon: BsCode,
    title: 'Maintenance and Support',
    content: [
      'Renders maintenance and support services for consistent and stable performance of applications.',
      'I can also update your app functionality on demand.',
    ],
  },
];

export const PROJECTS = [
  {
    name: 'Rawaa App',
    description:
      'web-based food ordering application. The app is fully responsive to small devices (e.g., mobiles or tablets).',
    image: '/rawaafood.png',
    demo: 'https://rawaa-app.vercel.app/',
    github: 'https://github.com/hossam7amdy/rawaa-app',
    tools: ['react.js', 'redux toolkit', 'chakra ui', '.net', 'rest', 'sql server'],
  },
  {
    name: 'Rawaa Dashboard',
    description:
      'UI management tool for managing Rawaa-app. The app has quick summary widgets, graphs for displaying data, and sortable, paginated, and filtered tables to display data.',
    image: '/rawa-dashboard.png',
    demo: 'https://rawaa-dashboard.vercel.app/',
    github: 'https://github.com/hossam7amdy/rawaa-dashboard',
    tools: ['react.js', 'react query', 'chakra ui', '.net', 'rest', 'sql server'],
  },
  {
    name: 'Forkify',
    description: 'recipe application with custom recipe upload.',
    image: '/forkify.png',
    demo: 'https://forkify-hossam.netlify.app/',
    github: 'https://github.com/hossam7amdy/learning-projects/tree/main/Javascript/04-forkify',
    tools: ['html/css', 'javascript', 'rest'],
  },
  {
    name: 'Omnifood',
    description:
      'Landing page for an ai-food company. Website adaptable to all devices, with-ui components and animated interactions.',
    image: '/omnifood.png',
    demo: 'https://omnifood-hossam.netlify.app/',
    github: 'https://github.com/hossam7amdy/learning-projects/tree/main/HTML-CSS/omnifood',
    tools: ['html/css', 'javascript'],
  },
];

export const CONTACT = [
  {
    Icon: BsTelephone,
    title: 'Contact Me',
    subtitle: '+20 100 5861 198',
  },
  {
    Icon: CiMail,
    title: 'Email',
    subtitle: 'hossamhamdy117@gmail.com',
  },
  {
    Icon: HiOutlineLocationMarker,
    title: 'Location',
    subtitle: '6th of October, Giza, EG',
  },
];

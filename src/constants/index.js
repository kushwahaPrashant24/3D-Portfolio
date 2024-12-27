import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  EditQuasar,
  AccessControl,
  ChitChat,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
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
 
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Edit Quasar",
  
    iconBg: "#383E56",
    date: "May 2024 - Current",
    points: [
      "Develop and maintain web applications using React.js and related technologies, ensuring high performance and responsiveness.",
      "Collaborate closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products aligned with project goals.",
      "Implemented responsive design principles and ensured seamless cross-browser compatibility, enhancing user experience across multiple platforms.",
      "Participated in code reviews, offering constructive feedback and fostering a culture of continuous improvement among the development team.",
    ],
  },
  {
    title: "Full Stack Devloper",
    company_name: "Insiden",
    
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Develop and maintain web applications using React.js and other technologies.",
    "Collaborate with cross-functional teams including designers and product managers to deliver high-quality solutions.",
    "Ensure responsiveness and cross-browser compatibility for enhanced user experience.",
    "Participate in code reviews and provide feedback for continuous improvement."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Software Incubator",
   
    iconBg: "#383E56",
    
    points: [
      "Developed three web development projects, completing all before the deadline.",
      "Utilized modern web technologies such as React.js, and others to build responsive and efficient applications.",
      "Collaborated with cross-functional teams to ensure smooth project delivery.",
      "Enhanced front-end to optimize performance."
    ],
  },
  
];


const projects = [
  {
    name: "RBAC Task Manager",
    description:
      "At RBAC Task Manager, I led the development of the web app using React and TypeScript, ensuring type safety and a responsive interface. I collaborated with administrators to implement role-based task allocation, enabling customization of roles and priorities. Optimizing performance with Tailwind CSS, I ensured sleek design, cross-browser compatibility, and fast load times. The app streamlined task management, boosting productivity with seamless collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: AccessControl,
    source_code_link: "https://github.com/kushwahaPrashant24/RBAC",
  },
  {
    name: "Edit Quasar",
    description:
      "At EditQuaser, I led the development of their website from scratch, utilizing React.js to create a responsive and dynamic user interface. The project involved close collaboration with designers and product managers to implement custom features that aligned with the company’s vision. I ensured cross-browser compatibility and optimized the website for fast load times, improving the overall user experience  and many more. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: EditQuasar,
    source_code_link: "https://github.com/kushwahaPrashant24/EditQuasar",
  },
  {
    name: "ChitChat",
    description:
      "ChitChat is a real-time chatting website that allows users to connect and converse with others. I used Socket.IO for messaging, React and Tailwind CSS for the front-end, and Node.js with Express for the back-end. Zustand managed the state, while MongoDB stored user data and messages. I also integrated Multer for file uploads and Shadcn for UI components, improving functionality and providing a smooth user experience. This project helped me enhance my full-stack development skills.",
    tags: [
      {
        name: "reactjs",
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
    image: ChitChat,
    source_code_link: "",
  },
];

export { services, technologies, experiences, projects };

import React from "react";
import htmlLogo from "../src/assets/Logo/html.png";
import cssLogo from "../src/assets/Logo/css.png";
import javascriptLogo from "../src/assets/Logo/javascript.png";
import reactjsLogo from "../src/assets/Logo/react.png";
import tailwindcssLogo from "../src/assets/Logo/tailwind.png";
import bootstrapLogo from "../src/assets/Logo/bootstrap.jpeg";
import nodejsLogo from "../src/assets/Logo/node.jpeg";
import expressjsLogo from "../src/assets/Logo/express.png";
import mysqlLogo from "../src/assets/Logo/mysql.jpeg";
import mongodbLogo from "../src/assets/Logo/mongoDB.jpeg";
import cLogo from "../src/assets/Logo/c.png";
import javaLogo from "../src/assets/Logo/java.png";
import gitLogo from "../src/assets/Logo/git.jpeg";
import githubLogo from "../src/assets/Logo/github.png";
import vscodeLogo from "../src/assets/Logo/vscode.jpeg";
import postmanLogo from "../src/assets/Logo/postman.jpeg";
import vercelLogo from "../src/assets/Logo/vercel.jpeg";
import netlifyLogo from "../src/assets/Logo/netlify.jpeg";
import AMTLogo from "../src/assets/Logo/AMT.jpeg";
import project from "../src/assets/Logo/project.png";
import PBCOE from "../src/assets/Logo/PBCOE.jpeg";
import Butle from "../src/assets/Logo/Butle.jpeg";
import Dinbai from "../src/assets/Logo/Dinbai.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: AMTLogo,
    role: "MERN stack Developer",
    company: "Auto Mechano Technologies, Nagpur",
    date: "Feb-2024 - March-2024",
    desc: "Successfully completed a 1-month MERN Stack internship at Automechano Technologies, where I contributed to developing full-stack modules including REST APIs, user interfaces, and database operations. I worked on React-based components, Node.js backend logic, MongoDB schema design, and improved application responsiveness and functionality through testing and real-time debugging.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind CSS",
      "Bootstrap",
      "MongoDb",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Bookstore Web App",
    description:
      "A Full-stack MERN application where only authenticated users can access the book collection. Implemented JWT-based login/signup, protected routes and REST APIs using Express and MongoDB. Fronted built with React + Vite and styled with Tailwind CSS deployed on Vercel and Backend hosted on Render.",
    image: project,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vite",
      " Tailwind CSS",
    ],
    github: " https://github.com/shindetushar2004/bookStoreApp",
    webapp: " https://book-store-app-xfb2.vercel.app/",
  },
];

export const education = [
  {
    id: 0,
    img: PBCOE,
    school: "Priyadarshini Bhagwati College Engineering, Nagpur",
    date: "November-2022",
    grade: "72%",
    desc: "I am currently pursuing my B.Tech in Computer Science & Engineering at Priyadarshini Bhagwati College of Engineering (PBCOE), Nagpur.The college provides well-equipped computer labs, experienced faculty, and a supportive environment for technical growth.",
    degree: "B.Tech in Computer Science and Engineering",
  },
  {
    id: 1,
    img: Butle,
    school: "BNB Science College, Digras",
    date: "Aug-2020 - May-2022",
    grade: "60.83%",
    desc: "Completed my Higher Secondary Education (12th) in 2022 from Bapuraoji Butle Arts, Narayanrao Bhat Commerce and Bapusaheb Patil Science College, Digras.",
    degree: "12th Science",
  },
  {
    id: 2,
    img: Dinbai,
    school: "Dinbai Vidyalaya, Digras",
    date: "May-2014 - Mar-2020",
    grade: "87.80%",
    desc: "Completed my Secondary School Certificate (10th) in March 2020 from Dinbai Vidyalaya, Digras.",
    degree: "10th",
  },
];

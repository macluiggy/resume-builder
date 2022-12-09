import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  // FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from "react-icons/fa";
import { BiMovie } from "react-icons/bi";
import "./styles.css";

const data = {
  /**
   * Full name
   */
  fullName: "Luiggy Macias",

  /**
   * Summary - short "about me" paragraph
   old summary : 
   Hello, my name is Luiggy. I'm a self-taught frontend developer with 1+ year of programming experience, developing web applications and building websites. I primarly focus on writing clean, elegant and efficient code. I am proficient in HTML, CSS, JavaScript and React.
   */
  summary: {
    title: "Summary",
    text: `
    Hard-working web developer with +1 year of programming experience and flair for creating elegant solutions in the least amount of time. I primary focus on learning by doing and building proyects, currently more than 20 projects built, I am always looking for new ways to improve myself. Passionate about software development and technology.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: "Contact",
    list: [
      {
        text: "macluiggy.github.io",
        url: "https://macluiggy.github.io",
        icon: <FaGlobe />,
      },
      {
        text: "github.com/macluiggy",
        url: "https://github.com/macluiggy",
        icon: <FaGithub />,
      },
      {
        text: "ferrinluiggy@gmail.com",
        icon: <FaEnvelope />,
      },
      {
        text: "+593 985 518 903",
        icon: <FaPhoneAlt />,
      },
      {
        text: "Portoviejo, Ecuador",
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: "Key skills",
    list: [
      { text: "React, JSX" },
      { text: "JavaScript" },
      { text: "Responsive Web Design" },
      { text: "HTML5, CSS3" },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: "Skills",
    list: [
      { text: "Node.js, Express" },
      { text: "PostgreSQL, MongoDB" },
      { text: "TypeScript, JavaScript" },
      { text: "Git, GitHub, npm" },
      { text: "Linux" },
      { text: "React, JSX" },
      { text: "Responsive Web Design" },
      { text: "HTML5, CSS3" },
      { text: "NextJS" },
      { text: "Redux, TDD" },
      { text: "Sass, CSS-in-JS" },
      /*{ text: 'OAuth, Firebase' }*/ 
      /*{ text: 'REST, GraphQL,' }*/ 
    ],
  },

  /**
   * Languages I speak.
   */
  languages: {
    title: "Languages",
    list: [{ text: "English - C1 Avanced" }, { text: "Spanish - Native" }],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: "Interests",
    list: [
      { text: "Learning new things", icon: <FaReact /> },
      { text: "Watching series", icon: <BiMovie /> },
      { text: "Building habits", icon: <FaRegCalendarCheck /> },
      { text: "Reading", icon: <FaBook /> },
      { text: "Being active", icon: <FaRunning /> },
    ],
  },

  projects: {
    title: "Projects",
    text: "You can find all my projects and the technologies I've used to build them here:",
    list: [
      {
        name: "Full Stack Social Media  App",
        techList: [
          "MonogoDB",
          "Express",
          "React",
          "Node.js",
          "TypeScript",
          "Webpack",
          "Material UI",
        ],
        description: `FullStack Social Media App, this app uses advanced concepts like authentication and authorization with json web tokens (JWT) to secure the app, so only authenticated users can access certain parts of the app like creating a post, deleting a post, liking a post, commenting on a post, etc. You can also follow other users and see their profile and posts.`,
        url: "https://bit.ly/3H1m2uR",
      },
      {
        name: "Full Stack PERN Tasks App",
        techList: [
          "PostgreSQL",
          "Express",
          "React",
          "Node.js",
          "TypeScript",
          "Webpack",
          "TDD: Mocha Chai",
        ],
        description: `
        A fullstack PERN Stack Tasks App . This app is a simple todo list app that uses the PERN Stack, where the user can create tasks, edit them, and delete them. The backend is deployed on Heroku and the frontend is deployed on Netlify.`,
        url: "https://bit.ly/pern-tasks",
      },
      {
        name: "Full Stack Movie Reviews App",
        techList: ["MongoDB", "Express", "React", "Node.js"],
        description: `
          Full Stack JavaScript application, made with the MERN stack. This app fetches movies from
          a Mongo database, you can also login and post a review, update or delete the reviews you
           have made in the database.`,
        url: "https://bit.ly/3CcvhXA",
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: "Work experience",
    list: [
      {
        company: "Dolphin Bar & Restaurant",
        location: "Mallorca, Spain",
        date: {
          start: "2018-05",
          end: "2019-10",
        },
        jobTitle: "Bartender/Waiter",
        description: `
          Working in one of the busiest restaurants on the island I became 
          a better team player. Additionally it was a great opportunity to learn 
          Spanish and further improve my English.`,
      },
      {
        company: "Clothes2Order",
        location: "Manchester, United Kingdom",
        date: {
          start: "2017-03",
          end: "2018-05",
        },
        jobTitle: "Customer Service Assistant",
        description: `
          Being a part of Customer Service team and talking over the phone 
          with clients from all around the world helped me improve both my 
          communication and collaboration skills.`,
      },
      {
        company: "Marks & Spencer",
        location: "Castle Donington, United Kingdom",
        date: {
          start: "2015-12",
          end: "2017-01",
        },
        jobTitle: "Production Operative",
        description: `
          Working for the first time abroad and overcoming the challenges along 
          the road taught me how to quickly adapt to new environments.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: "Certificates",
    list: [
      {
        name: "Improving my problem solving skills by doing katas in codewars.",
        provider: "Codewars",
        url: "https://bit.ly/3AHDyCP",
      },
      {
        name: "Responsive Web Design Certification",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3g9k3tr",
      },
      {
        name: "JavaScript Algorithms and Data Structures Certification",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3IRGTSN",
      },
      {
        name: "Front End Libraries Certification",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3IRHgNb",
      },
      {
        name: "Back End Development and APIs Certification",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3G8OPgE",
      },
      {
        name: "Quality Assurance",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3rSi4Pq",
      },
      {
        name: "EFSET English Certificate (C1 Avanced)",
        provider: " EF Standard English Test (EF SET)",
        url: "https://bit.ly/3KSpP0M",
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: "Education",
    list: [
      {
        institution: "Universidad Técnica de Manabí",
        description: "Mechanical Engineering",
        date: {
          start: "2018-09",
          end: "2020-09",
        },
      },
      {
        institution: "freeCodeCamp",
        description: "Full Stack Web Development",
      },
    ],
  },
};

export default data;

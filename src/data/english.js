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
    Backend Developer with +1 years of experience, among which I have gone from my own technological projects to developer jobs in technological companies with great teams of work. The development stack I currently use focuses on Node.js / Express for the Backend and as a database PostgresSQL or similar.`,
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
      { text: "Node.js, Express, Sequelize" },
      { text: "PostgreSQL, MongoDB" },
      { text: "TypeScript, JavaScript" },
      { text: "Git, GitHub, npm" },
      { text: "Linux" },
      { text: "React, JSX" },
      // { text: "Responsive Web Design" },
      { text: "HTML5, CSS3" },
      // { text: "NextJS" },
      // { text: "Redux, TDD" },
      // { text: "Sass, CSS-in-JS" },
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

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: "Work Experience",
    list: [
      {
        company: "Bitekso S.A.",
        location: "Guayaquil, Ecuador",
        date: {
          start: "2022-04",
          end: "Present",
        },
        jobTitle: "Backend Developer",
        description: `
          Working in the Bitekso development team, I have had the opportunity to work with technologies such as Node.js, Express, PostgreSQL, among others for the creation of endpoints and RESTful services for the Bitekso web application.
          I also have experience consuming the endpoints using Angular`,
      },
      {
        company: "Willay",
        location: "Quito, Ecuador",
        date: {
          start: "2022-03",
          end: "2022-04",
        },
        jobTitle: "Web Development Intern",
        description: `
        An internship as a web developer using python and django for the backend and angular for the frontend. PostgreSQL was also used as a database`,
      },
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

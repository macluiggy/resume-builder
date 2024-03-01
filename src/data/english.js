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
    // text: `
    // I am a results-oriented software developer with experience in Node.js, Express, and PostgreSQL. I am passionate about learning and collaborating as a team to create innovative and scalable solutions. I am seeking challenging opportunities to apply my skills and experience in web application development.`,
    text: `As a dedicated and skilled Software Developer, I bring a robust mix of technical expertise, innovative thinking, and effective problem-solving skills. My experience spans developing high-quality, scalable software solutions, primarily focusing on backend development, database management, and API integration. I have a proven track record of collaborating effectively with cross-functional teams to deliver projects that meet both technical standards and business objectives.`,
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
      { text: "Design Patterns" },
      { text: "Data Structures and Algorithms" },
      { text: "Docker" },
      { text: "Testing" },
      // { text: "Github copilot, ChatGPT" },
      { text: "Git, GitHub, npm" },
      { text: "Linux" },
      // { text: "React, JSX" },
      // { text: "Responsive Web Design" },
      { text: "HTML5, CSS3" },
      { text: "Python" },
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
      // { text: "Watching series", icon: <BiMovie /> },
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
        company: "Imagine Apps",
        location: "Bogota, Colombia",
        date: {
          start: "2023-04",
          end: "2024-01",
        },
        jobTitle: "Backend Developer",
        description: (
          <div class="experience">
            <ul>
              {/* <li>
                - Developing backend solution for a 
              </li> */}
            </ul>
            <p>
              As a Backend Developer at Imagine Apps, I have been instrumental
              in developing and maintaining the backend functionalities for
              PayCloud, a cutting-edge financial technology application. My role
              involves a blend of developing new features, optimizing existing
              code, and ensuring the robustness and security of the application.
            </p>
          </div>
        ),
      },
      {
        company: "Bitekso S.A.",
        location: "Guayaquil, Ecuador",
        date: {
          start: "2022-04",
          end: "2023-04",
        },
        jobTitle: "Backend Developer",
        description: (
          <div class="experience">
            {/* <ul>
              <li>
                - Assisted in implementing scalable and efficient backend
                solutions using Node.js, Express, and PostgreSQL.
              </li>
              <li>
                - Worked closely with the frontend development team to ensure
                smooth integration between frontend and backend.
              </li>
              <li>
                - Helped optimize the application's load speed and performance
                using caching techniques and query optimization.
              </li>
            </ul> */}
            <p>
              During my time at the company, I had the opportunity to learn and
              develop my programming skills, and improve my ability to
              work in a team in an agile development environment. Additionally,
              I had the opportunity to work on various exciting and challenging
              projects that enhanced my experience in web application
              development.
            </p>
          </div>
        ),
      },
      {
        company: "Willay",
        location: "Quito, Ecuador",
        date: {
          start: "2022-03",
          end: "2022-04",
        },
        jobTitle: "Web Development Intern",
        // description: `
        // An internship as a web developer using python and django for the backend and angular for the frontend. PostgreSQL was also used as a database`,
        description: `Internship as a web developer using Python and Django for the backend and Angular for the frontend. PostgreSQL was also used as the database.`,
      },
    ],
  },

  projects: {
    title: "Projects",
    // text: "You can find all my projects and the technologies I've used to build them here:",
    list: [
      // {
      //   name: "Full Stack Social Media  App",
      //   techList: [
      //     "MonogoDB",
      //     "Express",
      //     "React",
      //     "Node.js",
      //     "TypeScript",
      //     "Webpack",
      //     "Material UI",
      //   ],
      //   description: `FullStack Social Media App, this app uses advanced concepts like authentication and authorization with json web tokens (JWT) to secure the app, so only authenticated users can access certain parts of the app like creating a post, deleting a post, liking a post, commenting on a post, etc. You can also follow other users and see their profile and posts.`,
      //   url: "https://bit.ly/3H1m2uR",
      // },
      {
        name: "Excercise Tracker",
        techList: [
          "MonogoDB",
          "Express",
          "React",
          "Node.js",
          "TypeScript",
        ],
        description: `A full stack app that allows users to create a new user, add new exercises, and see a list of all the exercises that have been added. The app uses a MongoDB database to store the data, and the backend is built with Node.js and Express. The frontend is built with React and uses TypeScript.`,
        url: "https://boilerplate-project-exercisetracker-ten.vercel.app/",
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: "Certificates",
    list: [
      // {
      //   name: "Improving my problem solving skills by doing katas in codewars.",
      //   provider: "Codewars",
      //   url: "https://bit.ly/3AHDyCP",
      // },
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

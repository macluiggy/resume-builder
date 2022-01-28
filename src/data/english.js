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
    title: "Additional skills",
    list: [
      { text: "Linux" },
      { text: "TypeScript" },
      { text: "Node.js, Express " },
      { text: "NextJS" },
      { text: "MongoDB, PostgreSQL" },
      { text: "Redux, TDD" },
      /*{ text: 'OAuth, Firebase' }*/ { text: "Git, GitHub, npm" },
      /*{ text: 'REST, GraphQL,' }*/ { text: "Sass, CSS-in-JS" },
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
        name: "Full Stack User Registrarion App",
        techList: [
          "MonogoDB",
          "Express",
          "React",
          "NextJS",
          "Node.js",
          "TypeScript",
          "Webpack",
        ],
        description: (
          <div>
            <p>
              Full Stack user registration and login page, this app has the
              following features:
            </p>
            <ul className="project-features">
              <li>User registration and login</li>
              <li>User authentication and authorization using jsonwebtoken</li>
              <li>Password hashing</li>
              <li>User data storage in a database</li>
              <li>
                Redirects depending on the user's current authentication status
              </li>
              <li>Updates user data in the database</li>
            </ul>
          </div>
        ),
        url: "https://bit.ly/3ATSDBv",
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
      // {
      //   name: "Hacker Histories",
      //   techList: [
      //     "JavaScript",
      //     "Hacker News API",
      //     "React",
      //     "TypeScript",
      //     "Sass",
      //     "Jest",
      //   ],
      //   description: `
      //   This is a project where the user can search for a term and it will show the search results, this was done with the Hacker News API`,
      //   url: "https://bit.ly/hacker-news-searcher",
      // },
      // {
      //   name: "Drum Machine App",
      //   techList: ["React", "Redux", "HTML", "JavaScript", "Sass"],
      //   description: `
      //     This application allows you to listen to some clips, you can switch between
      //     two drums, turn the drum on and off and raise and lower the volume of the
      //     drum.`,
      //   url: "https://bit.ly/2ZdQXnB",
      // },
      // {
      //   name: "Room homepage",
      //   techList: [
      //     "React",
      //     "React useEffect & useState",
      //     "HTML",
      //     "JavaScript",
      //     "Sass",
      //   ],
      //   description: `
      //     This homepage were helpful to test my layout skills. There's a slider that
      //     also were helpful to practice React Hooks`,
      //   url: "https://bit.ly/3C8nH05",
      // },

      /*{
        name: 'Habit Tracker App',
        techList: [
          'React',
          'React Query',
          'React Router',
          'Firebase',
          'Material-UI',
        ],
        description: `
          Habit Tracker is my final project for Harvard's CS50 course. It's 
          built as MVP (minimal viable product) and its core functionality is to 
          track user's habits.`,
        url: 'https://habit-tracker.macieksitkowski.com/',
      },
      {
        name: 'Pocket Globe App',
        techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
        description: `
          The app uses D3.js and React to create a highly interactive and responsive 
          globe. It connects to various APIs to get data about selected country.`,
        url: 'https://sitek94.github.io/pocket-globe-app',
      },
      {
        name: 'Pocket Globe App',
        techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
        description: `
          The app uses D3.js and React to create a highly interactive and responsive 
          globe. It connects to various APIs to get data about selected country.`,
        url: 'https://sitek94.github.io/pocket-globe-app',
      },*/
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  /*workExperience: {
    title: 'Work experience',
    list: [
      {
        company: 'Dolphin Bar & Restaurant',
        location: 'Mallorca, Spain',
        date: {
          start: '2018-05',
          end: '2019-10',
        },
        jobTitle: 'Bartender/Waiter',
        description: `
          Working in one of the busiest restaurants on the island I became 
          a better team player. Additionally it was a great opportunity to learn 
          Spanish and further improve my English.`,
      },
      {
        company: 'Clothes2Order',
        location: 'Manchester, United Kingdom',
        date: {
          start: '2017-03',
          end: '2018-05',
        },
        jobTitle: 'Customer Service Assistant',
        description: `
          Being a part of Customer Service team and talking over the phone 
          with clients from all around the world helped me improve both my 
          communication and collaboration skills.`,
      },
      {
        company: 'Marks & Spencer',
        location: 'Castle Donington, United Kingdom',
        date: {
          start: '2015-12',
          end: '2017-01',
        },
        jobTitle: 'Production Operative',
        description: `
          Working for the first time abroad and overcoming the challenges along 
          the road taught me how to quickly adapt to new environments.`,
      },
    ],
  },*/

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
    ],
  },
};

export default data;

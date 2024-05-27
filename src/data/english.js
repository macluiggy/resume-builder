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
// import { BiMovie } from "react-icons/bi";
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
    // text: `As a dedicated and skilled Software Developer, I bring a robust mix of technical expertise, innovative thinking, and effective problem-solving skills. My experience spans developing high-quality, scalable software solutions, primarily focusing on backend development, database management, and API integration. I have a proven track record of collaborating effectively with cross-functional teams to deliver projects that meet both technical standards and business objectives.`,
    // text: `I mainly focus on design patterns instead of knowing every aspect of a technology, since it is more important to know about that, with the advanced of IA it wont be necessary to be a specialist in for example golang, if you already know another language but never have touched go, with AI it should be pretty straightforward to learn it, since a developer that focus on learning patterns rather than a specific technology will thrive more easily, so even if it is not me, i would strongly recommend that you hire someone that focus on patterns rather than a specific technology.`,
    text: `Hi, I'm Luiggy, a software developer with a focus on backend development. I enjoy following best practices, such as design patterns and SOLID principles, to create efficient and maintainable systems that meet business requirements. I am always eager to learn new technologies and improve my skills.`,
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
      { text: "Node.js, NestJS, Express" },
      { text: "PostgreSQL, MongoDB" },
      { text: "TypeScript, JavaScript, Angular" },
      { text: "AWS" },
      { text: "Design Patterns, SOLID principles" },
      { text: "Data Structures and Algorithms" },
      { text: "Docker" },
      { text: "Testing, Vite, Jest" },
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
        // description: (
        //   <div class="experience">
        //     <ul>
        //       {/* <li>
        //         - Developing backend solution for a
        //       </li> */}
        //     </ul>
        //     <p>
        //       As a Backend Developer at Imagine Apps, I have been instrumental
        //       in developing and maintaining the backend functionalities for
        //       PayCloud, a cutting-edge financial technology application. My role
        //       involves a blend of developing new features, optimizing existing
        //       code, and ensuring the robustness and security of the application.
        //     </p>
        //   </div>
        // ),
        description: (
          <div class="experience">
            <ul>
              <li>
                - Implemented a part of the stripe API to handle payments in the
                backend.
              </li>
              <li>
                - Used factory design pattern to create a factory that creates
                different types of payment API's.
              </li>
              <li>
                - Collaborating with the frontend team to ensure smooth
                integration between frontend and backend.
              </li>
              {/* added tests */}
              <li>
                - Wrote tests for the backend to ensure the quality of the code.
                (e2e, unit tests)
              </li>
            </ul>
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
            {/* <p>
              During my time at the company, I had the opportunity to learn and
              develop my programming skills, and improve my ability to work in a
              team in an agile development environment. Additionally, I had the
              opportunity to work on various exciting and challenging projects
              that enhanced my experience in web application development.
            </p> */}
            <ul>
              {/* ayde a creaar el backend para automatizar el proceso de obtencion de data de un predio a traves de mapas con los cuales se podia por ejemplo saber si se le cobraba impuesto si el geom del predio dependiendo de la distancia al servicio que se encontraba (pamiento, luz, etc)   */}
              <li>
                - Developed a backend solution to automate the process of
                obtaining data from a property through maps, which could be used
                to determine if a property should be taxed based on its distance
                from a service (water, electricity, etc).
              </li>
              {/* 
              creacion de pdfs con la informacion de los predios, se podia seleccionar un predio y se generaba un pdf con la informacion del predio, se mostraba informacion como el propietario, el area, el valor del predio, el mapa del predio, etc
              */}
              <li>
                - Implemented features to generate PDFs with information about
                properties. Users could select a property and generate a PDF
                with information such as the owner, area, property value,
                property map, etc.
              </li>
              {/* 
              migraciondes de consulta directas con sp (stored procedures) a consultas con sequelize
              */}
              <li>
                - Migrated direct queries with stored procedures to queries with
                Sequelize ORM.
              </li>
            </ul>
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
      // {
      //   name: "Excercise Tracker",
      //   techList: ["MonogoDB", "Express", "React", "Node.js", "TypeScript"],
      //   description: `A full stack app that allows users to create a new user, add new exercises, and see a list of all the exercises that have been added. The app uses a MongoDB database to store the data, and the backend is built with Node.js and Express. The frontend is built with React and uses TypeScript.`,
      //   url: "https://boilerplate-project-exercisetracker-ten.vercel.app/",
      // },
      {
        name: "Full Stack Social Media App",
        techList: ["PostgreSQL", "NestJS", "Angular", "TypeScript", "Docker", "AWS", "Vitest", ],
        /**
         * red social full stack que permite a los usuarios crear una cuenta, hacer publicaciones, seguir a otros usuarios, ver el perfil de otros usuarios, etc. Para la autenticación se utilizó JWT y para la autorización se utilizó un middleware que verifica si el usuario tiene permisos para realizar ciertas acciones.
         * Cuenta con un backend desarrollado con NestJS y una base de datos PostgreSQL. El frontend está desarrollado con Angular y utiliza TypeScript. La aplicación se despliega utilizando Docker y se prueban las funcionalidades con Vitest.
         */
        description: `A full stack social media app that allows users to create an account, make posts, follow other users, view other users' profiles, etc. JWT was used for authentication and a middleware was used for authorization to verify if the user has permissions to perform certain actions.`,
        url: "https://staging-social-media.pages.dev/home",
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

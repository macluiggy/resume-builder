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

const data = {
  /**
   * Full name
   */
  fullName: "Luiggy Macias",

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: "Summary",
    text: `Hola mi nombre es Luiggy. Soy un desarrollador de frontend con más de 1 año de experiencia en el desarrollo de aplicaciones web y construcción de sitios web. Me centro en escribir código limpio, elegantes y eficiente. Soy competente usando HTML, CSS, JavaScript y React.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: "Contacto",
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
    title: "Habilidades clave",
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
    title: "Habilidades adicionales",
    list: [
      { text: "GNU/Linux" },
      { text: "TypeScript" },
      { text: "Node.js, Express " },
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
    title: "Idiomas que hablo",
    list: [{ text: "Inglés - C1 Avanzado" }, { text: "Español - Nativo" }],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: "Pasatiempos e intereses",
    list: [
      { text: "Aprender nuevas cosas.", icon: <FaReact /> },
      { text: "Mirar series", icon: <BiMovie /> },
      { text: "Contruir habitos", icon: <FaRegCalendarCheck /> },
      { text: "Leer", icon: <FaBook /> },
      { text: "Ser activo", icon: <FaRunning /> },
    ],
  },

  projects: {
    title: "Proyectos",
    list: [
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
        description: `Una aplicación fullstack de tareas. Esta aplicación es una simple lista de tareas que usa el stack PERN, donde el usuario puede crear tareas, editarlas y eliminarlas. El backend fue desplegado en Heroku y el frontend en Netlify.`,
        url: "https://bit.ly/pern-tasks",
      },
      {
        name: "Full Stack Movie Reviews App",
        techList: ["MongoDB", "Express", "React", "Node.js"],
        description: `Aplicacion full stack, construida con el stack MERN. Esta aplicacion trae peliculas de una base de datos Mongo, tambien puedes iniciar sesion y publicar una reseña, actualizar o eliminar las reseñas que hayas hecho en la base de datos.`,
        url: "https://bit.ly/3CcvhXA",
      },
      {
        name: "Hacker Histories",
        techList: [
          "JavaScript",
          "Hacker News API",
          "React",
          "TypeScript",
          "Sass",
          "Jest",
        ],
        description: `Este proyecto es una aplicacion que permite buscar un termino y mostrar los resultados de la busqueda. Esta aplicacion fue hecha con la API de Hacker News.`,
        url: "https://bit.ly/hacker-news-searcher",
      },
      {
        name: "Drum Machine App",
        techList: ["React", "Redux", "HTML", "JavaScript", "Sass"],
        description: `Esta aplicacon te permite escuchar algunos clips, puedes cambiar entre dos tambores, encender y apagar el tambor y subir y bajar el volumen del tambor. `,
        url: "https://bit.ly/2ZdQXnB",
      },
      // {
      //   name: "Room homepage",
      //   techList: [
      //     "React",
      //     "React useEffect & useState",
      //     "HTML",
      //     "JavaScript",
      //     "Sass",
      //   ],
      //   description: ` Esta pagina de inicio fue de ayuda para probar mis habilidades de diseño. Tambien hay un slider que fue de ayuda para practicar React Hooks. `,
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
    title: "Certificaciones",
    list: [
      {
        name: "Mejorando mis habilidades de resolución de problemas haciendo katas en codewars",
        provider: "Codewars",
        url: "https://www.codewars.com/users/luiggy",
      },
      {
        name: "Certificación de desarrollo web responsivo",
        provider: " freeCodeCamp",
        url: "https://www.freecodecamp.org/certification/macluiggy/responsive-web-design",
      },
      {
        name: "Certificacin de Algoritmos y Estructuras de Datos",
        provider: " freeCodeCamp",
        url: "https://www.freecodecamp.org/certification/macluiggy/javascript-algorithms-and-data-structures",
      },
      {
        name: "Certificación de Librerías Front End",
        provider: " freeCodeCamp",
        url: "https://www.freecodecamp.org/certification/macluiggy/front-end-development-libraries",
      },
      {
        name: "Certificación de desarrollo Back End y APIs",
        provider: " freeCodeCamp",
        url: "https://freecodecamp.org/certification/macluiggy/back-end-development-and-apis",
      },
      {
        name: "EFSET English Certificate (C1 Avanced)",
        provider: " EF Standard English Test (EF SET)",
        url: "http://efset.org/cert/2yqHjs",
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: "Educación",
    list: [
      {
        institution: "Universidad Técnica de Manabí",
        description: "Ingeniería Mecánica",
        date: {
          start: "2018-09",
          end: "2020-09",
        },
      },
    ],
  },
};

export default data;

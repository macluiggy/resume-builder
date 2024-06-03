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
import englishData from "./english";
const {
  additionalSkills,
  keySkills,
  contact,
  fullName,
  education,
  workExperience,
} = englishData;
const data = {
  /**
   * Full name
   */
  fullName,

  /**
   * Summary - short "about me" paragraph
   
  antiguo resumen: Hola mi nombre es Luiggy. Soy un desarrollador de frontend con más de 1 año de experiencia en el desarrollo de aplicaciones web y construcción de sitios web. Me centro en escribir código limpio, elegantes y eficiente. Soy competente usando HTML, CSS, JavaScript y React.
   */
  summary: {
    title: "Resumen",
    // text: `
    // Desarrollador Backend con +1 años de experiencia, entre los cuales he pasado de mis propios proyectos tecnológicos a trabajos de desarrollador en empresas tecnológicas con grandes equipos de trabajo. El stack de desarrollo que uso actualmente se centra en Node.js/Express para el Backend y como base de datos PostgresSQL o similar.`,
    // text: `Soy un desarrollador de software enfocado en resultados con experiencia en Node.js, Express y PostgreSQL. Me apasiona aprender y colaborar en equipo para crear soluciones innovadoras y escalables. Busco oportunidades desafiantes para aplicar mis habilidades y experiencia en el desarrollo de aplicaciones web.`,
    text: `Hola, soy Luiggy, un desarrollador de software con un enfoque en el desarrollo de backend. Disfruto siguiendo las mejores prácticas, como los patrones de diseño y los principios SOLID, para crear sistemas eficientes y mantenibles que cumplan con los requisitos comerciales. Siempre estoy ansioso por aprender nuevas tecnologías y mejorar mis habilidades.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: "Contacto",
    list: contact.list,
  },

  /**
   * Key skills
   */
  keySkills: {
    title: "Habilidades clave",
    list: keySkills.list,
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: "Habilidades",
    list: additionalSkills.list,
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

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: "Experiencia Laboral",
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
                - Implementé una parte de la API de Stripe para manejar los
                pagos en el backend.
              </li>
              <li>
                - Utilicé el patrón de diseño de fábrica para crear una fábrica
                que genera diferentes tipos de API's de pago.
              </li>
              <li>
                - Colaboré con el equipo de frontend para asegurar una
                integración suave entre el frontend y el backend.
              </li>
              <li>
                - Escribí pruebas para el backend para asegurar la calidad del
                código. (pruebas e2e, pruebas unitarias)
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
        jobTitle: "Desarrollador Backend",
        // description: `
        //   Trabajando en el equipo de desarrollo de Bitekso, he tenido la oportunidad de trabajar con tecnologías como Node.js, Express, PostgreSQL, entre otras para la creación de endpoints y servicios RESTful para la aplicación web de Bitekso.
        //   Tambien tengo experiencia consumiendo los endpoints usando Angular`,
        description: (
          <div class="experience">
            <ul>
              <li>
                - Desarrollé una solución de backend para automatizar el proceso
                de obtención de datos de una propiedad a través de mapas, que se
                podría utilizar para determinar si una propiedad debería ser
                cobrada de impuestos en función de su distancia a un servicio (agua,
                electricidad, etc).
              </li>
              <li>
                - Implementé características para generar PDFs con información
                sobre propiedades. Los usuarios podían seleccionar una propiedad
                y generar un PDF con información como el propietario, el área,
                el valor de la propiedad, el mapa de la propiedad, etc.
              </li>
              <li>
                - Migré consultas directas con procedimientos almacenados a
                consultas con Sequelize ORM.
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
        jobTitle: "Pasante de Desarrollo Web",
        // escribe una descripcion para una pasantia de desarrollo web
        description: `
        Pasantia como desarrollador web usando python y django para el backend y angular para el frontend. Tambien se uso postgresql como base de datos
        `,
      },
    ],
  },

  projects: {
    title: "Proyectos",
    // text: "Puedes encontrar todos mis proyectos y las tecnologías que he usado para construirlos aquí:",
    list: [
      // {
      //   name: "Red Social FullStack",
      //   techList: [
      //     "MonogoDB",
      //     "Express",
      //     "React",
      //     "Node.js",
      //     "TypeScript",
      //     "Webpack",
      //     "Material UI",
      //   ],
      //   description: `
      //   Aplicación de Red Social FullStack, esta app usa conceptos avanzados como autenticación y autorización con json web tokens (JWT) para proteger la app, por lo que solo los usuarios autenticados pueden acceder a ciertas partes de la app como crear un post, eliminar un post, darle me gusta un post, comentar en un post, etc. También puedes seguir a otros usuarios y ver su perfil y posts.`,
      //   url: "https://bit.ly/3H1m2uR",
      // },
      {
        name: "Aplicación de Red Social Full Stack",
        techList: [
          "PostgreSQL",
          "NestJS",
          "Angular",
          "TypeScript",
          "Docker",
          "AWS",
          "Vitest",
        ],
        description: `Una aplicación de red social full stack que permite a los usuarios crear una cuenta, hacer publicaciones, seguir a otros usuarios, ver los perfiles de otros usuarios, etc. Se utilizó JWT para la autenticación y un middleware para la autorización para verificar si el usuario tiene permisos para realizar ciertas acciones.`,
        url: "https://staging-social-media.pages.dev/home",
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: "Certificaciones",
    list: [
      // {
      //   name: "Mejorando la de resolución de problemas haciendo katas en codewars",
      //   provider: "Codewars",
      //   url: "https://www.codewars.com/users/luiggy",
      // },
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
        name: "Quality Assurance",
        provider: "freeCodeCamp",
        url: "https://bit.ly/3rSi4Pq",
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
      {
        institution: "freeCodeCamp",
        description: "Desarrollo Web Full Stack",
      },
    ],
  },
};

export default data;

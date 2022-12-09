import { FaEnvelope, FaGithub, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const skills = [
  { text: "React, JSX" },
  { text: "Node.js, Express " },
  { text: "PostgreSQL, MongoDB " },
  { text: "TypeScript, JavaScript" },
  { text: "Responsive Web Design" },
  { text: "HTML5, CSS3" },
  { text: "Linux" },
  { text: "NextJS" },
  { text: "Redux, TDD" },
  /*{ text: 'OAuth, Firebase' }*/ { text: "Git, GitHub, npm" },
  /*{ text: 'REST, GraphQL,' }*/ { text: "Sass, CSS-in-JS" },
];

export const contact = [
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
]
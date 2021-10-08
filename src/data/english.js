import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'Luiggy Macias',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `Hello, my name is Luiggy. I'm a self-taught frontend developer with 1+ year of programming experience, developing web applications and building websites. I primarly focus on writing clean, elegant and efficient code. I am proficient in HTML, CSS, JavaScript and React.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'macluiggy.github.io',
        url: 'https://macluiggy.github.io',
        icon: <FaGlobe />,
      },
      {
        text: 'github.com/macluiggy',
        url: 'https://github.com/macluiggy',
        icon: <FaGithub />,
      },
      {
        text: 'ferrinluiggy@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+593 985 518 903',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Portoviejo, Ecuador',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'React, Redux, JSX' },
      { text: 'JavaScript' },
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'GNU/Linux' },
      { text: 'Node.js, npm, MongoDB' },
      /*{ text: 'OAuth, Firebase' }*/,
      { text: 'GitHub, Git' },
      /*{ text: 'REST, GraphQL,' }*/,
      { text: 'Sass, CSS-in-JS' },
    ],
  },

  /**
   * Languages I speak.
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'English - C1 Avanced' },
      { text: 'Spanish - Native' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Building habits', icon: <FaRegCalendarCheck /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'Drum Machine App',
        techList: [
          'React',
          'Redux',
          'HTML',
          'JavaScript',
          'Sass'
        ],
        description: `
          This application allows you to listen to some clips, you can switch between 
          two drums, turn the drum on and off and raise and lower the volume of the 
          drum.`,
        url: 'https://drum-machine-free-code-camp.netlify.app/',
      },
      {
        name: 'Room homepage',
        techList: [
          'React',
          'React useEffect & useState',
          'HTML',
          'JavaScript',
          'Sass'
        ],
        description: `
          This homepage were helpful to test my layout skills. There's a slider that 
          also were helpful to practice React Hooks`,
        url: 'https://frontend-mentor-room-homepage.netlify.app/',
      },
      {
        name: 'URL Shortening API',
        techList: [
          'HTML',
          'CSS',
          'JavaScript',
          'shortcode API'
        ],
        description: `
          This is a project where the user can shorten any valid link, this was made 
          with the shortcode API`,
        url: 'https://macluiggy.github.io/url-shortening-api-master-FM',
      },
      {
        name: 'Insure Landing Page',
        techList: [
          'HTML',
          'CSS',
          'JavaScript',
          'Responsive Web Design',
          'Media queries',
        ],
        description: `
          Product Landing Page built for fake Insure brand. This was useful for 
          practicing responsive web design.

`,
        url: 'https://macluiggy.github.io/FM-insure-landing-page-master',
      },
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
    title: 'Education & Certificates',
    list: [
      {
        name: 'Improving my problem solving skills by doing katas in codewars.',
        provider: ' Codewars',
        url: 'https://www.codewars.com/users/luiggy',
      },
      {
        name: 'Responsive Web Design Certification',
        provider: ' freeCodeCamp',
        url: 'https://www.freecodecamp.org/certification/macluiggy/responsive-web-design',
      },
      {
        name: 'Algorithms and Data Structures Certification',
        provider: ' freeCodeCamp',
        url: 'https://www.freecodecamp.org/certification/macluiggy/javascript-algorithms-and-data-structures',
      },
      {
        name: 'Front End Libraries Certification',
        provider: ' freeCodeCamp',
        url: 'https://www.freecodecamp.org/certification/macluiggy/front-end-development-libraries',
      },
      {
        name: 'Back End Development and APIs Certification',
        provider: ' freeCodeCamp',
        url: 'https://freecodecamp.org/certification/macluiggy/back-end-development-and-apis',
      },
      {
        name: 'EFSET English Certificate (C1 Avanced)',
        provider: ' EF Standard English Test (EF SET)',
        url: 'http://efset.org/cert/2yqHjs',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Universidad Técnica de Manabí',
        description: 'Mechanical Engineering',
        date: {
          start: '2018-09',
          end: '2020-09',
        },
      },
    ],
  },
};

export default data;

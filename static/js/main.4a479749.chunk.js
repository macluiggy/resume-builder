(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i(8),s=(i(13),i(5)),o=i(2),r=i(1);function c(e){var t=e.to,i=e.children;return Object(r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:i})}function l(e){var t=e.data,i=e.defaultIcon,a=void 0===i?Object(r.jsx)(o.h,{}):i,n=t.title,s=t.list;return console.log(t,"aquiiiiiiiiiiiiiiiiiiii"),Object(r.jsxs)("section",{className:"details",children:[Object(r.jsx)("h3",{children:n}),Object(r.jsx)("ul",{children:s.map((function(e){var t=e.icon,i=e.text,n=e.url;return Object(r.jsxs)("li",{children:[t||a,n?Object(r.jsx)(c,{to:n,children:i}):i]},i)}))})]})}function d(e){var t=e.text;return Object(r.jsx)("header",{className:"full-name",children:Object(r.jsx)("h1",{children:t})})}function p(e){var t=e.data,i=t.title,a=t.text;return Object(r.jsxs)("section",{className:"summary",children:[Object(r.jsx)("h2",{children:i}),Object(r.jsx)("p",{children:a})]})}function j(e){var t=e.data,i=t.title,a=t.list,n=t.text;return a=[],Object(r.jsxs)("section",{className:"projects",children:[Object(r.jsxs)("div",{style:{paddingBottom:"0.7em"},children:[Object(r.jsx)("h2",{children:i}),Object(r.jsxs)("p",{children:[n," ",Object(r.jsx)(c,{to:"https://bit.ly/all-the-projects",children:Object(r.jsx)("h4",{children:Object(r.jsx)("span",{style:{color:"blue"},children:"https://bit.ly/all-the-projects"})})})]})]}),Object(r.jsx)("ul",{children:a.map((function(e){var t=e.name,i=e.description,a=e.techList,n=e.url;return Object(r.jsxs)("li",{children:[Object(r.jsx)(c,{to:n,children:Object(r.jsxs)("h4",{children:[t,":"," ",Object(r.jsx)("span",{style:{color:"blue"},children:"click here to see the project"})]})}),Object(r.jsx)("p",{className:"sm-border-bottom",children:a.join(" | ")}),Object(r.jsx)("p",{children:i})]},t)}))})]})}function u(e){var t=e.split("-"),i=Object(s.a)(t,2),a=i[0],n=i[1],o=new Date(a,n-1);return"".concat(o.toString().slice(4,7)," ").concat(a)}function b(e){var t=e.data,i=t.title,a=t.list;return Object(r.jsxs)("section",{className:"work-experience",children:[Object(r.jsx)("h2",{children:i}),Object(r.jsx)("ul",{children:a.map((function(e){var t=e.company,i=e.jobTitle,a=e.location,n=e.date,s=e.description,o="Invalid Date"!==new Date(n.end).toString();return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"header sm-border-bottom",children:[Object(r.jsxs)("h4",{children:[i," ",Object(r.jsx)("br",{}),t,", ",a," ",Object(r.jsx)("br",{})]}),Object(r.jsxs)("span",{className:"date",children:[u(n.start)," -"," ",o?u(n.end):n.end]})]}),Object(r.jsx)("p",{children:s})]},t)}))})]})}function m(e){var t=e.data,i=t.title,a=t.list;return Object(r.jsxs)("section",{className:"certificates",children:[Object(r.jsx)("h2",{children:i}),Object(r.jsx)("ul",{children:a.map((function(e,t){var i=e.name,a=e.provider,n=e.url;return Object(r.jsx)("li",{style:{margin:"0.4em 0"},children:Object(r.jsxs)("h4",{children:[i,Object(r.jsxs)("span",{className:"provider",children:[" ","\u2014"," ",Object(r.jsx)("a",{style:{color:"blue"},rel:"noreferrer",href:n,target:"_blank",children:a})]})]})},i)}))})]})}function h(e){var t=e.data,i=t.title,a=t.list;return Object(r.jsxs)("section",{className:"education",children:[Object(r.jsx)("h2",{children:i}),Object(r.jsx)("ul",{children:a.map((function(e){var t=e.institution,i=e.description,a=e.date;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h4",{children:t}),Object(r.jsx)("span",{className:"date",children:a&&u(a.start)+"-"+u(a.end)})]}),Object(r.jsx)("p",{children:i})]},i)}))})]})}var x=i(4),g=(i(7),{fullName:"Luiggy Macias",summary:{title:"Summary",text:"\n    I am a results-oriented software developer with experience in Node.js, Express, and PostgreSQL. I am passionate about learning and collaborating as a team to create innovative and scalable solutions. I am seeking challenging opportunities to apply my skills and experience in web application development."},contact:{title:"Contact",list:[{text:"macluiggy.github.io",url:"https://macluiggy.github.io",icon:Object(r.jsx)(o.e,{})},{text:"github.com/macluiggy",url:"https://github.com/macluiggy",icon:Object(r.jsx)(o.d,{})},{text:"ferrinluiggy@gmail.com",icon:Object(r.jsx)(o.c,{})},{text:"+593 985 518 903",icon:Object(r.jsx)(o.g,{})},{text:"Portoviejo, Ecuador",icon:Object(r.jsx)(o.f,{})}]},keySkills:{title:"Key skills",list:[{text:"React, JSX"},{text:"JavaScript"},{text:"Responsive Web Design"},{text:"HTML5, CSS3"}]},additionalSkills:{title:"Skills",list:[{text:"Node.js, Express, Sequelize"},{text:"PostgreSQL, MongoDB"},{text:"TypeScript, JavaScript"},{text:"Git, GitHub, npm"},{text:"Linux"},{text:"React, JSX"},{text:"HTML5, CSS3"}]},languages:{title:"Languages",list:[{text:"English - C1 Avanced"},{text:"Spanish - Native"}]},interests:{title:"Interests",list:[{text:"Learning new things",icon:Object(r.jsx)(o.i,{})},{text:"Watching series",icon:Object(r.jsx)(x.a,{})},{text:"Building habits",icon:Object(r.jsx)(o.j,{})},{text:"Reading",icon:Object(r.jsx)(o.a,{})},{text:"Being active",icon:Object(r.jsx)(o.m,{})}]},workExperience:{title:"Work Experience",list:[{company:"Bitekso S.A.",location:"Guayaquil, Ecuador",date:{start:"2022-04",end:"Present"},jobTitle:"Backend Developer",description:Object(r.jsxs)("div",{class:"experience",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"- Assisted in implementing scalable and efficient backend solutions using Node.js, Express, and PostgreSQL."}),Object(r.jsx)("li",{children:"- Worked closely with the frontend development team to ensure smooth integration between frontend and backend."}),Object(r.jsx)("li",{children:"- Helped optimize the application's load speed and performance using caching techniques and query optimization."})]}),Object(r.jsx)("p",{children:"During my time at the company, I had the opportunity to learn and develop my Node.js programming skills, and improve my ability to work in a team in an agile development environment. Additionally, I had the opportunity to work on various exciting and challenging projects that enhanced my experience in web application development."})]})},{company:"Willay",location:"Quito, Ecuador",date:{start:"2022-03",end:"2022-04"},jobTitle:"Web Development Intern",description:"Internship as a web developer using Python and Django for the backend and Angular for the frontend. PostgreSQL was also used as the database."}]},projects:{title:"Projects",text:"You can find all my projects and the technologies I've used to build them here:",list:[{name:"Full Stack Social Media  App",techList:["MonogoDB","Express","React","Node.js","TypeScript","Webpack","Material UI"],description:"FullStack Social Media App, this app uses advanced concepts like authentication and authorization with json web tokens (JWT) to secure the app, so only authenticated users can access certain parts of the app like creating a post, deleting a post, liking a post, commenting on a post, etc. You can also follow other users and see their profile and posts.",url:"https://bit.ly/3H1m2uR"}]},certificates:{title:"Certificates",list:[{name:"Responsive Web Design Certification",provider:"freeCodeCamp",url:"https://bit.ly/3g9k3tr"},{name:"JavaScript Algorithms and Data Structures Certification",provider:"freeCodeCamp",url:"https://bit.ly/3IRGTSN"},{name:"Front End Libraries Certification",provider:"freeCodeCamp",url:"https://bit.ly/3IRHgNb"},{name:"Back End Development and APIs Certification",provider:"freeCodeCamp",url:"https://bit.ly/3G8OPgE"},{name:"Quality Assurance",provider:"freeCodeCamp",url:"https://bit.ly/3rSi4Pq"},{name:"EFSET English Certificate (C1 Avanced)",provider:" EF Standard English Test (EF SET)",url:"https://bit.ly/3KSpP0M"}]},education:{title:"Education",list:[{institution:"Universidad T\xe9cnica de Manab\xed",description:"Mechanical Engineering",date:{start:"2018-09",end:"2020-09"}},{institution:"freeCodeCamp",description:"Full Stack Web Development"}]}}),y={fullName:"Maciek Sitkowski",summary:{title:"Podsumowanie",text:"\n      Frontend Developer z rocznym, praktycznym do\u015bwiadczeniem w budowaniu \n      aplikacji oraz oraz stron internetowych. Poszerza swoj\u0105 wiedz\u0119 poprzez \n      aktywne kontrybutowanie do projekt\xf3w Open Source."},contact:{title:"Kontakt",list:[{text:"macieksitkowski.com",link:"https://macieksitkowski.com",icon:Object(r.jsx)(o.e,{})},{text:"github.com/sitek94",link:"https://github.com/sitek94",icon:Object(r.jsx)(o.d,{})},{text:"msitkowski94@gmail.com",icon:Object(r.jsx)(o.c,{})},{text:"+00 123 456 789",icon:Object(r.jsx)(o.g,{})},{text:"Warszawa, Polska",icon:Object(r.jsx)(o.f,{})}]},keySkills:{title:"G\u0142\xf3wne umiej\u0119tno\u015bci",list:[{text:"React, Redux, JSX"},{text:"JavaScript, D3.js"},{text:"Responsive Web Design"},{text:"HTML5, CSS3"}]},additionalSkills:{title:"Dodatkowe umiej\u0119tno\u015bci",list:[{text:"Node.js, Webpack"},{text:"OAuth, Firebase"},{text:"GitHub, Git"},{text:"REST, GraphQL"},{text:"Sass, CSS-in-JS"}]},languages:{title:"J\u0119zyki",list:[{text:"Polski - Ojczysty"},{text:"Angielski - P\u0142ynny"},{text:"Hiszpa\u0144ski - Komunikatywny"}]},interests:{title:"Zainteresowania",list:[{text:"Gra w szachy",icon:Object(r.jsx)(o.b,{})},{text:"Nauka nowych rzeczy",icon:Object(r.jsx)(o.i,{})},{text:"Budowanie nawyk\xf3w",icon:Object(r.jsx)(o.j,{})},{text:"Czytanie",icon:Object(r.jsx)(o.a,{})},{text:"Sport",icon:Object(r.jsx)(o.m,{})}]},projects:{title:"Projekty",list:[{name:"Habit Tracker App",techList:["React","React Query","React Router","Firebase","Material-UI"],description:"\n          Habit Tracker is my final project for Harvard's CS50 course. It's \n          built as MVP (minimal viable product) and its core functionality is to \n          track user's habits.",url:"https://habit-tracker-293718.web.app/"},{name:"Pocket Globe App",techList:["React","D3.js","TopoJSON","Material-UI"],description:"\n          The app uses D3.js and React to create a highly interactive and responsive \n          globe. It connects to various APIs to get data about selected country.",url:"https://sitek94.github.io/pocket-globe-app"}]},workExperience:{title:"Do\u015bwiadczenie",list:[{company:"Dolphin Bar & Restaurant",location:"Mallorca, Spain",date:{start:"2018-05",end:"2019-10"},jobTitle:"Barman/Kelner",description:"\n          Pracuj\u0105c w jednej z najbardziej ruchliwych restauracji na wyspie \n          nauczy\u0142em si\u0119 lepiej pracowa\u0107 w zespole. Dodatkowo by\u0142a to \u015bwietna \n          okazja do nauki hiszpa\u0144skiego."},{company:"Clothes2Order",location:"Manchester, United Kingdom",date:{start:"2017-03",end:"2018-05"},jobTitle:"Obs\u0142uga Klienta",description:"\n        Rozmawiaj\u0105c przez telefon i mailowo z klientami z ca\u0142ego \u015bwiata, \n        rozwi\u0105zuj\u0105c ich problemy i pomagaj\u0105c w sk\u0142adaniu zam\xf3wie\u0144 poprawi\u0142em \n        moje zdolno\u015bci komunikacyjne."},{company:"Marks & Spencer",location:"Castle Donington, United Kingdom",date:{start:"2015-12",end:"2017-01"},jobTitle:"Pracownik Magazynu",description:"\n          Podj\u0119cie pierwszej pracy za granic\u0105 w znacznym stopniu podnios\u0142a moje\n          zdolno\u015bci do szybkiej i \u0142atwej adaptacji w nowych \u015brodowiskach."}]},certificates:{title:"Certyfikaty",list:[{name:"CS50x: Introduction to Computer Science",provider:"Harvard University"},{name:"Responsive Web Design Certification",provider:" freeCodeCamp"},{name:"Algorithms and Data Structures Certification",provider:" freeCodeCamp"},{name:"Data Visualization Certification",provider:" freeCodeCamp"},{name:"Front End Libraries Certification",provider:" freeCodeCamp"}]},education:{title:"Edukacja",list:[{institution:"Politechnika Warszawska",description:"Architektura i Urbanistyka",date:{start:"2014-09",end:"2015-09"}}]}},O=g.additionalSkills,k=g.keySkills,f={english:g,polish:y,spanish:{fullName:g.fullName,summary:{title:"Resumen",text:"Soy un desarrollador de software enfocado en resultados con experiencia en Node.js, Express y PostgreSQL. Me apasiona aprender y colaborar en equipo para crear soluciones innovadoras y escalables. Busco oportunidades desafiantes para aplicar mis habilidades y experiencia en el desarrollo de aplicaciones web."},contact:{title:"Contacto",list:g.contact.list},keySkills:{title:"Habilidades clave",list:k.list},additionalSkills:{title:"Habilidades",list:O.list},languages:{title:"Idiomas que hablo",list:[{text:"Ingl\xe9s - C1 Avanzado"},{text:"Espa\xf1ol - Nativo"}]},interests:{title:"Pasatiempos e intereses",list:[{text:"Aprender nuevas cosas.",icon:Object(r.jsx)(o.i,{})},{text:"Mirar series",icon:Object(r.jsx)(x.a,{})},{text:"Contruir habitos",icon:Object(r.jsx)(o.j,{})},{text:"Leer",icon:Object(r.jsx)(o.a,{})},{text:"Ser activo",icon:Object(r.jsx)(o.m,{})}]},workExperience:{title:"Experiencia Laboral",list:[{company:"Bitekso S.A.",location:"Guayaquil, Ecuador",date:{start:"2022-04",end:"Actualidad"},jobTitle:"Desarrollador Backend",description:Object(r.jsxs)("div",{class:"experience",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"- Ayud\xe9 en la implementaci\xf3n de soluciones de backend escalables y eficientes utilizando Node.js, Express y PostgreSQL."}),Object(r.jsx)("li",{children:"- Trabaj\xe9 en estrecha colaboraci\xf3n con el equipo de desarrollo frontend para garantizar una integraci\xf3n sin problemas entre el frontend y el backend."}),Object(r.jsx)("li",{children:"- Ayud\xe9 en la optimizaci\xf3n de la velocidad de carga y rendimiento de la aplicaci\xf3n utilizando t\xe9cnicas de caching y optimizaci\xf3n de consultas."})]}),Object(r.jsx)("p",{children:"Durante mi tiempo en la empresa, he tenido la oportunidad de aprender y desarrollar mis habilidades de programaci\xf3n de Node.js y he mejorado mi capacidad para trabajar en equipo en un entorno de desarrollo \xe1gil. Adem\xe1s, he tenido la oportunidad de trabajar en varios proyectos emocionantes y desafiantes que han mejorado mi experiencia en el desarrollo de aplicaciones web."})]})},{company:"Willay",location:"Quito, Ecuador",date:{start:"2022-03",end:"2022-04"},jobTitle:"Pasante de Desarrollo Web",description:"\n        Pasantia como desarrollador web usando python y django para el backend y angular para el frontend. Tambien se uso postgresql como base de datos\n        "}]},projects:{title:"Proyectos",text:"Puedes encontrar todos mis proyectos y las tecnolog\xedas que he usado para construirlos aqu\xed:",list:[{name:"Red Social FullStack",techList:["MonogoDB","Express","React","Node.js","TypeScript","Webpack","Material UI"],description:"\n        Aplicaci\xf3n de Red Social FullStack, esta app usa conceptos avanzados como autenticaci\xf3n y autorizaci\xf3n con json web tokens (JWT) para proteger la app, por lo que solo los usuarios autenticados pueden acceder a ciertas partes de la app como crear un post, eliminar un post, darle me gusta un post, comentar en un post, etc. Tambi\xe9n puedes seguir a otros usuarios y ver su perfil y posts.",url:"https://bit.ly/3H1m2uR"}]},certificates:{title:"Certificaciones",list:[{name:"Certificaci\xf3n de desarrollo web responsivo",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/responsive-web-design"},{name:"Certificacin de Algoritmos y Estructuras de Datos",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/javascript-algorithms-and-data-structures"},{name:"Certificaci\xf3n de Librer\xedas Front End",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/front-end-development-libraries"},{name:"Certificaci\xf3n de desarrollo Back End y APIs",provider:" freeCodeCamp",url:"https://freecodecamp.org/certification/macluiggy/back-end-development-and-apis"},{name:"Quality Assurance",provider:"freeCodeCamp",url:"https://bit.ly/3rSi4Pq"},{name:"EFSET English Certificate (C1 Avanced)",provider:" EF Standard English Test (EF SET)",url:"http://efset.org/cert/2yqHjs"}]},education:{title:"Educaci\xf3n",list:[{institution:"Universidad T\xe9cnica de Manab\xed",description:"Ingenier\xeda Mec\xe1nica",date:{start:"2018-09",end:"2020-09"}},{institution:"freeCodeCamp",description:"Desarrollo Web Full Stack"}]}}};function v(){var e=a.useState("english"),t=Object(s.a)(e,2),i=t[0],n=t[1],c=f[i];return console.log(c.contact,"aquiiiiiiiiiiiiiiiiiiii"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("select",{onChange:function(e){return n(e.target.value)},children:[Object(r.jsx)("option",{value:"english",children:"English"}),Object(r.jsx)("option",{value:"spanish",children:"Spanish"})]}),Object(r.jsxs)("div",{className:"page",children:[Object(r.jsxs)("div",{className:"column left",children:[Object(r.jsx)(l,{data:c.contact}),Object(r.jsx)(l,{data:c.additionalSkills,defaultIcon:Object(r.jsx)(o.k,{})}),Object(r.jsx)(l,{data:c.languages,defaultIcon:Object(r.jsx)(o.l,{})}),Object(r.jsx)(l,{data:c.interests})]}),Object(r.jsxs)("div",{className:"column right",style:{fontSize:"12px"},children:[Object(r.jsx)(d,{text:c.fullName}),Object(r.jsx)(p,{data:c.summary}),Object(r.jsx)(b,{data:c.workExperience}),Object(r.jsx)(j,{data:c.projects}),Object(r.jsx)(m,{data:c.certificates}),Object(r.jsx)(h,{data:c.education})]})]})]})}n.render(Object(r.jsx)(a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,i){}},[[15,1,2]]]);
//# sourceMappingURL=main.4a479749.chunk.js.map
(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i(8),n=(i(13),i(5)),c=i(2),o=i(1);function r(e){var t=e.to,i=e.children;return Object(o.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:i})}function l(e){var t=e.data,i=e.defaultIcon,a=void 0===i?Object(o.jsx)(c.i,{}):i,s=t.title,n=t.list;return Object(o.jsxs)("section",{className:"details",children:[Object(o.jsx)("h3",{children:s}),Object(o.jsx)("ul",{children:n.map((function(e){var t=e.icon,i=e.text,s=e.url;return Object(o.jsxs)("li",{children:[t||a,s?Object(o.jsx)(r,{to:s,children:i}):i]},i)}))})]})}function d(e){var t=e.text;return Object(o.jsx)("header",{className:"full-name",children:Object(o.jsx)("h1",{children:t})})}function p(e){var t=e.data,i=t.title,a=t.text;return Object(o.jsxs)("section",{className:"summary",children:[Object(o.jsx)("h2",{children:i}),Object(o.jsx)("p",{children:a})]})}function u(e){var t=e.data,i=t.title,a=t.list,s=t.text;return Object(o.jsxs)("section",{className:"projects",children:[Object(o.jsxs)("div",{style:{paddingBottom:"0.7em"},children:[Object(o.jsx)("h2",{children:i}),Object(o.jsxs)("p",{children:[s," ",Object(o.jsx)(r,{to:"https://bit.ly/all-the-projects",children:Object(o.jsx)("h4",{children:Object(o.jsx)("span",{style:{color:"blue"},children:"https://bit.ly/all-the-projects"})})})]})]}),Object(o.jsx)("ul",{children:a.map((function(e){var t=e.name,i=e.description,a=e.techList,s=e.url;return Object(o.jsxs)("li",{children:[Object(o.jsx)(r,{to:s,children:Object(o.jsxs)("h4",{children:[t,":"," ",Object(o.jsx)("span",{style:{color:"blue"},children:"click here to see the project"})]})}),Object(o.jsx)("p",{className:"sm-border-bottom",children:a.join(" | ")}),Object(o.jsx)("p",{children:i})]},t)}))})]})}function j(e){var t=e.data,i=t.title,a=t.list;return Object(o.jsxs)("section",{className:"certificates",children:[Object(o.jsx)("h2",{children:i}),Object(o.jsx)("ul",{children:a.map((function(e,t){var i=e.name,a=e.provider,s=e.url;return Object(o.jsx)("li",{style:{margin:"0.4em 0"},children:Object(o.jsxs)("h4",{children:[i,Object(o.jsxs)("span",{className:"provider",children:[" ","\u2014"," ",Object(o.jsx)("a",{style:{color:"blue"},rel:"noreferrer",href:s,target:"_blank",children:a})]})]})},i)}))})]})}function h(e){var t=e.split("-"),i=Object(n.a)(t,2),a=i[0],s=i[1],c=new Date(a,s-1);return"".concat(c.toString().slice(4,7)," ").concat(a)}function m(e){var t=e.data,i=t.title,a=t.list;return Object(o.jsxs)("section",{className:"education",children:[Object(o.jsx)("h2",{children:i}),Object(o.jsx)("ul",{children:a.map((function(e){var t=e.institution,i=e.description,a=e.date;return Object(o.jsxs)("li",{children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h4",{children:t}),Object(o.jsx)("span",{className:"date",children:a&&h(a.start)+"-"+h(a.end)})]}),Object(o.jsx)("p",{children:i})]},i)}))})]})}var b=i(4),x=(i(7),{fullName:"Luiggy Macias",summary:{title:"Summary",text:"\n    Hard-working web developer with +1 year of programming experience and flair for creating elegant solutions in the least amount of time. I primary focus on learning by doing and building proyects, currently more than 20 projects built, I am always looking for new ways to improve myself. Passionate about software development and technology."},contact:{title:"Contact",list:[{text:"macluiggy.github.io",url:"https://macluiggy.github.io",icon:Object(o.jsx)(c.f,{})},{text:"github.com/macluiggy",url:"https://github.com/macluiggy",icon:Object(o.jsx)(c.e,{})},{text:"ferrinluiggy@gmail.com",icon:Object(o.jsx)(c.d,{})},{text:"+593 985 518 903",icon:Object(o.jsx)(c.h,{})},{text:"Portoviejo, Ecuador",icon:Object(o.jsx)(c.g,{})}]},keySkills:{title:"Key skills",list:[{text:"React, JSX"},{text:"JavaScript"},{text:"Responsive Web Design"},{text:"HTML5, CSS3"}]},additionalSkills:{title:"Additional skills",list:[{text:"Linux"},{text:"TypeScript"},{text:"Node.js, Express "},{text:"NextJS"},{text:"MongoDB, PostgreSQL"},{text:"Redux, TDD"},{text:"Git, GitHub, npm"},{text:"Sass, CSS-in-JS"}]},languages:{title:"Languages",list:[{text:"English - C1 Avanced"},{text:"Spanish - Native"}]},interests:{title:"Interests",list:[{text:"Learning new things",icon:Object(o.jsx)(c.j,{})},{text:"Watching series",icon:Object(o.jsx)(b.a,{})},{text:"Building habits",icon:Object(o.jsx)(c.k,{})},{text:"Reading",icon:Object(o.jsx)(c.a,{})},{text:"Being active",icon:Object(o.jsx)(c.n,{})}]},projects:{title:"Projects",text:"You can find all my projects and the technologies I've used to build them here:",list:[{name:"Full Stack Social Media  App",techList:["MonogoDB","Express","React","Node.js","TypeScript","Webpack"],description:"FullStack Social Media App, this app uses advanced concepts like authentication and authorization with json web tokens (JWT) to secure the app, so only authenticated users can access certain parts of the app like creating a post, deleting a post, liking a post, commenting on a post, etc. You can also follow other users and see their profile and posts.",url:"https://bit.ly/3H1m2uR"},{name:"Full Stack PERN Tasks App",techList:["PostgreSQL","Express","React","Node.js","TypeScript","Webpack","TDD: Mocha Chai"],description:"\n        A fullstack PERN Stack Tasks App . This app is a simple todo list app that uses the PERN Stack, where the user can create tasks, edit them, and delete them. The backend is deployed on Heroku and the frontend is deployed on Netlify.",url:"https://bit.ly/pern-tasks"},{name:"Full Stack Movie Reviews App",techList:["MongoDB","Express","React","Node.js"],description:"\n          Full Stack JavaScript application, made with the MERN stack. This app fetches movies from\n          a Mongo database, you can also login and post a review, update or delete the reviews you\n           have made in the database.",url:"https://bit.ly/3CcvhXA"}]},certificates:{title:"Certificates",list:[{name:"Improving my problem solving skills by doing katas in codewars.",provider:"Codewars",url:"https://bit.ly/3AHDyCP"},{name:"Responsive Web Design Certification",provider:"freeCodeCamp",url:"https://bit.ly/3g9k3tr"},{name:"JavaScript Algorithms and Data Structures Certification",provider:"freeCodeCamp",url:"https://bit.ly/3IRGTSN"},{name:"Front End Libraries Certification",provider:"freeCodeCamp",url:"https://bit.ly/3IRHgNb"},{name:"Back End Development and APIs Certification",provider:"freeCodeCamp",url:"https://bit.ly/3G8OPgE"},{name:"Quality Assurance",provider:"freeCodeCamp",url:"https://bit.ly/3rSi4Pq"},{name:"EFSET English Certificate (C1 Avanced)",provider:" EF Standard English Test (EF SET)",url:"https://bit.ly/3KSpP0M"}]},education:{title:"Education",list:[{institution:"Universidad T\xe9cnica de Manab\xed",description:"Mechanical Engineering",date:{start:"2018-09",end:"2020-09"}},{institution:"freeCodeCamp",description:"Full Stack Web Development"}]}}),g={fullName:"Maciek Sitkowski",summary:{title:"Podsumowanie",text:"\n      Frontend Developer z rocznym, praktycznym do\u015bwiadczeniem w budowaniu \n      aplikacji oraz oraz stron internetowych. Poszerza swoj\u0105 wiedz\u0119 poprzez \n      aktywne kontrybutowanie do projekt\xf3w Open Source."},contact:{title:"Kontakt",list:[{text:"macieksitkowski.com",link:"https://macieksitkowski.com",icon:Object(o.jsx)(c.f,{})},{text:"github.com/sitek94",link:"https://github.com/sitek94",icon:Object(o.jsx)(c.e,{})},{text:"msitkowski94@gmail.com",icon:Object(o.jsx)(c.d,{})},{text:"+00 123 456 789",icon:Object(o.jsx)(c.h,{})},{text:"Warszawa, Polska",icon:Object(o.jsx)(c.g,{})}]},keySkills:{title:"G\u0142\xf3wne umiej\u0119tno\u015bci",list:[{text:"React, Redux, JSX"},{text:"JavaScript, D3.js"},{text:"Responsive Web Design"},{text:"HTML5, CSS3"}]},additionalSkills:{title:"Dodatkowe umiej\u0119tno\u015bci",list:[{text:"Node.js, Webpack"},{text:"OAuth, Firebase"},{text:"GitHub, Git"},{text:"REST, GraphQL"},{text:"Sass, CSS-in-JS"}]},languages:{title:"J\u0119zyki",list:[{text:"Polski - Ojczysty"},{text:"Angielski - P\u0142ynny"},{text:"Hiszpa\u0144ski - Komunikatywny"}]},interests:{title:"Zainteresowania",list:[{text:"Gra w szachy",icon:Object(o.jsx)(c.c,{})},{text:"Nauka nowych rzeczy",icon:Object(o.jsx)(c.j,{})},{text:"Budowanie nawyk\xf3w",icon:Object(o.jsx)(c.k,{})},{text:"Czytanie",icon:Object(o.jsx)(c.a,{})},{text:"Sport",icon:Object(o.jsx)(c.n,{})}]},projects:{title:"Projekty",list:[{name:"Habit Tracker App",techList:["React","React Query","React Router","Firebase","Material-UI"],description:"\n          Habit Tracker is my final project for Harvard's CS50 course. It's \n          built as MVP (minimal viable product) and its core functionality is to \n          track user's habits.",url:"https://habit-tracker-293718.web.app/"},{name:"Pocket Globe App",techList:["React","D3.js","TopoJSON","Material-UI"],description:"\n          The app uses D3.js and React to create a highly interactive and responsive \n          globe. It connects to various APIs to get data about selected country.",url:"https://sitek94.github.io/pocket-globe-app"}]},workExperience:{title:"Do\u015bwiadczenie",list:[{company:"Dolphin Bar & Restaurant",location:"Mallorca, Spain",date:{start:"2018-05",end:"2019-10"},jobTitle:"Barman/Kelner",description:"\n          Pracuj\u0105c w jednej z najbardziej ruchliwych restauracji na wyspie \n          nauczy\u0142em si\u0119 lepiej pracowa\u0107 w zespole. Dodatkowo by\u0142a to \u015bwietna \n          okazja do nauki hiszpa\u0144skiego."},{company:"Clothes2Order",location:"Manchester, United Kingdom",date:{start:"2017-03",end:"2018-05"},jobTitle:"Obs\u0142uga Klienta",description:"\n        Rozmawiaj\u0105c przez telefon i mailowo z klientami z ca\u0142ego \u015bwiata, \n        rozwi\u0105zuj\u0105c ich problemy i pomagaj\u0105c w sk\u0142adaniu zam\xf3wie\u0144 poprawi\u0142em \n        moje zdolno\u015bci komunikacyjne."},{company:"Marks & Spencer",location:"Castle Donington, United Kingdom",date:{start:"2015-12",end:"2017-01"},jobTitle:"Pracownik Magazynu",description:"\n          Podj\u0119cie pierwszej pracy za granic\u0105 w znacznym stopniu podnios\u0142a moje\n          zdolno\u015bci do szybkiej i \u0142atwej adaptacji w nowych \u015brodowiskach."}]},certificates:{title:"Certyfikaty",list:[{name:"CS50x: Introduction to Computer Science",provider:"Harvard University"},{name:"Responsive Web Design Certification",provider:" freeCodeCamp"},{name:"Algorithms and Data Structures Certification",provider:" freeCodeCamp"},{name:"Data Visualization Certification",provider:" freeCodeCamp"},{name:"Front End Libraries Certification",provider:" freeCodeCamp"}]},education:{title:"Edukacja",list:[{institution:"Politechnika Warszawska",description:"Architektura i Urbanistyka",date:{start:"2014-09",end:"2015-09"}}]}},y=x.additionalSkills,k=x.keySkills,f={english:x,polish:g,spanish:{fullName:x.fullName,summary:{title:"Resumen",text:"\n    Desarrollador web con +1 a\xf1o de experiencia en programaci\xf3n y en el desarrollo de software. Me centro en aprender haciendo mediante la contruccion de proyectos, actualmente m\xe1s de 20 proyectos construidos, siempre estoy buscando nuevas formas de mejorarme. Apasionado por el desarrollo de software y la tecnolog\xeda."},contact:{title:"Contacto",list:x.contact.list},keySkills:{title:"Habilidades clave",list:k.list},additionalSkills:{title:"Habilidades adicionales",list:y.list},languages:{title:"Idiomas que hablo",list:[{text:"Ingl\xe9s - C1 Avanzado"},{text:"Espa\xf1ol - Nativo"}]},interests:{title:"Pasatiempos e intereses",list:[{text:"Aprender nuevas cosas.",icon:Object(o.jsx)(c.j,{})},{text:"Mirar series",icon:Object(o.jsx)(b.a,{})},{text:"Contruir habitos",icon:Object(o.jsx)(c.k,{})},{text:"Leer",icon:Object(o.jsx)(c.a,{})},{text:"Ser activo",icon:Object(o.jsx)(c.n,{})}]},projects:{title:"Proyectos",text:"Puedes encontrar todos mis proyectos y las tecnolog\xedas que he usado para construirlos aqu\xed:",list:[{name:"Red Social FullStack",techList:["MonogoDB","Express","React","Node.js","TypeScript","Webpack"],description:"\n        Aplicaci\xf3n de Red Social FullStack, esta app usa conceptos avanzados como autenticaci\xf3n y autorizaci\xf3n con json web tokens (JWT) para proteger la app, por lo que solo los usuarios autenticados pueden acceder a ciertas partes de la app como crear un post, eliminar un post, darle me gusta un post, comentar en un post, etc. Tambi\xe9n puedes seguir a otros usuarios y ver su perfil y posts.",url:"https://bit.ly/3H1m2uR"},{name:"Full Stack PERN Tasks App",techList:["PostgreSQL","Express","React","Node.js","TypeScript","Webpack","TDD: Mocha Chai"],description:"Una aplicaci\xf3n fullstack de tareas. Esta aplicaci\xf3n es una simple lista de tareas que usa el stack PERN, donde el usuario puede crear tareas, editarlas y eliminarlas. El backend fue desplegado en Heroku y el frontend en Netlify.",url:"https://bit.ly/pern-tasks"},{name:"Full Stack Movie Reviews App",techList:["MongoDB","Express","React","Node.js"],description:"Aplicacion full stack, construida con el stack MERN. Esta aplicacion trae peliculas de una base de datos Mongo, tambien puedes iniciar sesion y publicar una rese\xf1a, actualizar o eliminar las rese\xf1as que hayas hecho en la base de datos.",url:"https://bit.ly/3CcvhXA"}]},certificates:{title:"Certificaciones",list:[{name:"Mejorando la de resoluci\xf3n de problemas haciendo katas en codewars",provider:"Codewars",url:"https://www.codewars.com/users/luiggy"},{name:"Certificaci\xf3n de desarrollo web responsivo",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/responsive-web-design"},{name:"Certificacin de Algoritmos y Estructuras de Datos",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/javascript-algorithms-and-data-structures"},{name:"Certificaci\xf3n de Librer\xedas Front End",provider:" freeCodeCamp",url:"https://www.freecodecamp.org/certification/macluiggy/front-end-development-libraries"},{name:"Certificaci\xf3n de desarrollo Back End y APIs",provider:" freeCodeCamp",url:"https://freecodecamp.org/certification/macluiggy/back-end-development-and-apis"},{name:"Quality Assurance",provider:"freeCodeCamp",url:"https://bit.ly/3rSi4Pq"},{name:"EFSET English Certificate (C1 Avanced)",provider:" EF Standard English Test (EF SET)",url:"http://efset.org/cert/2yqHjs"}]},education:{title:"Educaci\xf3n",list:[{institution:"Universidad T\xe9cnica de Manab\xed",description:"Ingenier\xeda Mec\xe1nica",date:{start:"2018-09",end:"2020-09"}},{institution:"freeCodeCamp",description:"Desarrollo Web Full Stack"}]}}};function v(){var e=a.useState("english"),t=Object(n.a)(e,2),i=t[0],s=t[1],r=f[i];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("select",{onChange:function(e){return s(e.target.value)},children:[Object(o.jsx)("option",{value:"english",children:"English"}),Object(o.jsx)("option",{value:"spanish",children:"Spanish"})]}),Object(o.jsxs)("div",{className:"page",children:[Object(o.jsxs)("div",{className:"column left",children:[Object(o.jsx)(l,{data:r.contact}),Object(o.jsx)(l,{data:r.keySkills,defaultIcon:Object(o.jsx)(c.b,{})}),Object(o.jsx)(l,{data:r.additionalSkills,defaultIcon:Object(o.jsx)(c.l,{})}),Object(o.jsx)(l,{data:r.languages,defaultIcon:Object(o.jsx)(c.m,{})}),Object(o.jsx)(l,{data:r.interests})]}),Object(o.jsxs)("div",{className:"column right",children:[Object(o.jsx)(d,{text:r.fullName}),Object(o.jsx)(p,{data:r.summary}),Object(o.jsx)(u,{data:r.projects}),Object(o.jsx)(j,{data:r.certificates}),Object(o.jsx)(m,{data:r.education})]})]})]})}s.render(Object(o.jsx)(a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,i){}},[[15,1,2]]]);
//# sourceMappingURL=main.b1b75dac.chunk.js.map
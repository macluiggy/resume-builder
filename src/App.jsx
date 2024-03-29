import * as React from "react";
import {
  // FaCheckSquare as FullCheckIcon,
  FaRegCheckSquare as CheckIcon,
  FaRegComment as CommentIcon,
} from "react-icons/fa";

import Details from "./components/details.jsx";
import FullName from "./components/full-name.jsx";
import Summary from "./components/summary.jsx";
import Projects from "./components/projects.jsx";
import WorkExperience from "./components/work-experience.jsx";
import Certificates from "./components/certificates.jsx";
import Education from "./components/education.jsx";

import allData from "./data";

export default function App() {
  const [language, setLanguage] = React.useState("english");

  const data = allData[language];
  console.log(data.contact, "aquiiiiiiiiiiiiiiiiiiii");
  return (
    <>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        {/* <option value="polish">Polish</option> */}
      </select>

      <div className="page">
        <div className="column left">
          <Details data={data.contact} />
          {/* <Details data={data.keySkills} defaultIcon={<FullCheckIcon />} /> */}
          <Details data={data.additionalSkills} defaultIcon={<CheckIcon />} />
          <Details data={data.languages} defaultIcon={<CommentIcon />} />
          <Details data={data.interests} />
        </div>

        <div
          className="column right"
          style={{
            fontSize: "12px",
          }}
        >
          <FullName text={data.fullName} />
          <Summary data={data.summary} />
          <WorkExperience data={data.workExperience} />
          <Projects data={data.projects} />
          {/* <div>
            You can find all my projects and the technologies I've used here:{" "}
          </div> */}
          <Certificates data={data.certificates} />
          {<Education data={data.education} />}
        </div>
      </div>
    </>
  );
}

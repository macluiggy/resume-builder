import { format } from "../utils";

export default function WorkExperience({ data }) {
  const { title, list } = data;

  return (
    <section className="work-experience">
      <h2>{title}</h2>
      <ul>
        {list.map(({ company, jobTitle, location, date, description }) => {
          let isValidDate = new Date(date.end).toString() !== "Invalid Date";
          return (
            <li key={company}>
              <div className="header sm-border-bottom">
                <h4>
                  {jobTitle} <br />
                  {company}, {location} <br />
                </h4>

                <span className="date">
                  {format(date.start)} -{" "}
                  {isValidDate ? format(date.end) : date.end}
                </span>
              </div>

              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

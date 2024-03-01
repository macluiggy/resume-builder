import Link from "./link";

export default function Projects({ data }) {
  let { title, list, text } = data;
  // list = [];

  return (
    <section className="projects">
      <div style={{ paddingBottom: "0.7em" }}>
        <h2>{title}</h2>
        <p>
          {text}{" "}
          <Link to={"https://bit.ly/all-the-projects"}>
            <h4>
              {/* <span style={{ color: "blue" }}>
                https://bit.ly/all-the-projects
              </span> */}
            </h4>
          </Link>
        </p>
      </div>
      <ul>
        {list.map(({ name, description, techList, url }) => (
          <li key={name}>
            <Link to={url}>
              <h4>
                {name}:{" "}
                <span style={{ color: "blue" }}>
                  click here to see the project
                </span>
              </h4>
            </Link>
            <p className="sm-border-bottom">{techList.join(" | ")}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

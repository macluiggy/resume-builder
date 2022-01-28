import Link from "./link";

export default function Projects({ data }) {
  const { title, list, text } = data;

  return (
    <section className="projects">
      <div style={{ paddingBottom: "0.7em" }}>
        <h2>{title}</h2>
        <p>
          {text}{" "}
          <a style={{ color: "blue" }} href="https://bit.ly/all-the-projects">
            https://bit.ly/all-the-projects
          </a>
        </p>
      </div>
      <ul>
        {list.map(({ name, description, techList, url }) => (
          <li key={name}>
            <Link to={url}>
              <h4>
                {name}: <span style={{ color: "blue" }}>{url}</span>
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

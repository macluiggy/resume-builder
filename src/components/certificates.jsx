export default function Certificates({ data }) {
  const { title, list } = data;

  return (
    <section className="certificates">
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, provider, url }, i) => (
          <li
            key={name}
            style={{
              margin: "0.4em 0",
            }}
          >
            <h4>
              {name}
              <span className="provider">
                {" "}
                &mdash;{" "}
                {
                  <a
                    style={{ color: "blue" }}
                    rel="noreferrer"
                    href={url}
                    target="_blank"
                  >
                    {provider}
                  </a>
                }
              </span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

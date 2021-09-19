export default function Certificates({ data }) {
  const { title, list } = data;

  return (
    <section className="certificates">
      <h2>{title}</h2>
      <ul>
        {list.map(({ name, provider }, i) => (
          <li key={name}>
            <h4>
              {name}
              <span className="provider"> &mdash; {i === 0
                ? <a href="https://www.codewars.com/users/luiggy">{provider}</a>
                : provider}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}

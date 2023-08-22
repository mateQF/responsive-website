function FooterHeadings({ title, headings }) {
  return (
    <div>
      <h6 className="font-bold text-white">{title}</h6>
      <ul>
        {headings.map((heading, index) => (
          <li key={index} className="py-2 text-sm">
            {heading}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterHeadings;

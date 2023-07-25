function SkillsDetails({ children, title, items }) {
  return (
    <div className="w-full">
      <div className="w-16 mx-auto">{children}</div>
      <h3 className="py-2 border-text border-b-[1px] text-2xl font-mono">
        {title}
      </h3>
      <ul className="mt-4">
        {items.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default SkillsDetails;

export default function Solution() {
  const name = "Your Name";
  const role = "React Learner";
  const skills = ["JSX", "Components", "Props"];

  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={`skill-${index}`}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
